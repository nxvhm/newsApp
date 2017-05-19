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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.endpoints = {
            'sources': 'https://newsapi.org/v1/sources',
            'articles': 'https://newsapi.org/v1/articles'
        };
        this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
        if (this.localStorageSupported) {
            this.storage = window.localStorage;
        }
    }
    NewsService.prototype.log = function () {
        console.log('Im loggin fn() for NewsService');
    };
    NewsService.prototype.fetchSourcesFromServer = function () {
        var params = new http_1.URLSearchParams();
        params.set("apiKey", "ab49efb84d3d4ab789ec7b7f12a290d6");
        params.set('language', "en");
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get(this.endpoints['sources'], requestOptions).map(function (response) { return response.json(); });
    };
    NewsService.prototype.updateSourcesList = function () {
        var _this = this;
        this.fetchSourcesFromServer().subscribe(function (data) {
            var dataExpiration = new Date();
            dataExpiration.setTime(dataExpiration.getTime() + (20 * 60 * 1000));
            _this.storage.setItem('sourcesList', JSON.stringify({ data: data, expiration: dataExpiration }));
        });
    };
    NewsService.prototype.getAvailableSources = function () {
        if (this.storage.getItem('sourcesList') == null) {
            this.updateSourcesList();
            return JSON.parse(this.storage.getItem('sourcesList'));
        }
        else {
            var listData = JSON.parse(this.storage.getItem('sourcesList'));
            var currentDate = new Date();
            if (currentDate > listData.expiration) {
                console.log('Update news sources in LS with API Call');
                this.updateSourcesList();
            }
            listData = JSON.parse(this.storage.getItem('sourcesList'));
            return listData.data;
        }
    };
    NewsService.prototype.fetchArticlesFromServer = function () {
        var params = new http_1.URLSearchParams();
        params.set("apiKey", "ab49efb84d3d4ab789ec7b7f12a290d6");
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get(this.endpoints['articles'], requestOptions).map(function (response) { return response.json(); });
    };
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map