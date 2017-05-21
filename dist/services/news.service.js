"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.endpoints = {
            'sources': 'https://newsapi.org/v1/sources',
            'articles': 'https://newsapi.org/v1/articles'
        };
        this.storage = window.localStorage;
        this.apiKey = "ab49efb84d3d4ab789ec7b7f12a290d6";
    }
    NewsService.prototype.log = function () {
        console.log('Im loggin fn() for NewsService');
    };
    /**
     * Get available news sources
     * Check if data available in localStorage otherwise call api and save
     * result in localStorage
     * @return {Observable<Source[]>} List of Sources
     */
    NewsService.prototype.getNewsSources = function () {
        var _this = this;
        var storageData = this.storage.getItem('sourcesList');
        // If sources are in localStorage return them as observable
        if (storageData != null && storageData != undefined && storageData != 'null') {
            var listData = JSON.parse(storageData);
            var currentDate = new Date();
            if (currentDate < new Date(listData.expiration)) {
                return Observable_1.Observable.create(function (observer) {
                    observer.next(listData.data);
                    observer.complete();
                });
            }
        }
        // Get Sources from API and save them in localStorage
        var params = new http_1.URLSearchParams();
        params.set("apiKey", this.apiKey);
        params.set('language', "en");
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get(this.endpoints['sources'], requestOptions).map(function (response) {
            var data = response.json().sources;
            _this.saveInStorage('sourcesList', data);
            return data;
        });
    };
    /**
     * [fetchArticlesFromServer description]
     * @param  {string} sourceId = "bbc-news" [description]
     * @param  {string} sortBy   = "latest"   [description]
     * @return {Observable<Article[]>} [description]
     */
    NewsService.prototype.fetchArticlesFromServer = function (sourceId, sortBy) {
        var _this = this;
        if (sourceId === void 0) { sourceId = "bbc-news"; }
        if (sortBy === void 0) { sortBy = "top"; }
        var storageKey = sourceId + "-" + sortBy + "-articles", storageData = this.storage.getItem(storageKey);
        if (storageData != null && storageData != undefined && storageData != 'null') {
            var articlesData = JSON.parse(storageData);
            var currentDate = new Date();
            if (currentDate < new Date(articlesData.expiration)) {
                console.log('Load articles from LS ', storageKey);
                return Observable_1.Observable.create(function (observer) {
                    observer.next(articlesData.data);
                    observer.complete();
                });
            }
        }
        var params = new http_1.URLSearchParams();
        params.set("apiKey", this.apiKey);
        params.set("source", sourceId);
        params.set("sortBy", sortBy);
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        console.log('Load articles from API ', storageKey);
        return this.http.get(this.endpoints['articles'], requestOptions).map(function (response) {
            var data = response.json().articles;
            _this.saveInStorage(storageKey, data);
            return data;
        });
    };
    /**
     * [saveInStorage description]
     * @param {string} key  [description]
     * @param {any}    data [description]
     */
    NewsService.prototype.saveInStorage = function (key, data) {
        var expiration = new Date;
        expiration.setTime(expiration.getTime() + (20 * 60 * 1000));
        this.storage.setItem(key, JSON.stringify({ data: data, expiration: expiration }));
    };
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map