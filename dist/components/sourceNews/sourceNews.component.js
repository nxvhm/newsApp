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
var router_1 = require("@angular/router");
var news_service_1 = require("../../services/news.service");
var SourceNewsComponent = (function () {
    function SourceNewsComponent(newsProvider, route) {
        this.newsProvider = newsProvider;
        this.route = route;
    }
    SourceNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sourceId = params.id;
            _this.setSource(_this.sourceId);
            _this.loadSourceNews(_this.sourceId, _this.source);
        });
    };
    SourceNewsComponent.prototype.ngOnDestroy = function () {
    };
    SourceNewsComponent.prototype.loadSourceNews = function (sourceId, source) {
        var _this = this;
        this.newsProvider.fetchArticlesFromServer(sourceId, source).subscribe(function (articles) {
            _this.articles = articles;
        });
    };
    SourceNewsComponent.prototype.setSource = function (sourceId) {
        var _this = this;
        this.newsProvider.getNewsSources().subscribe(function (sources) {
            for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                var source = sources_1[_i];
                if (source.id == sourceId) {
                    _this.source = source;
                }
            }
        });
    };
    return SourceNewsComponent;
}());
SourceNewsComponent = __decorate([
    core_1.Component({
        selector: 'source-news',
        templateUrl: './src/components/sourceNews/source-news.component.html',
    })
    // Display list of news from selected source
    ,
    __metadata("design:paramtypes", [news_service_1.NewsService, router_1.ActivatedRoute])
], SourceNewsComponent);
exports.SourceNewsComponent = SourceNewsComponent;
//# sourceMappingURL=sourceNews.component.js.map