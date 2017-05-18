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
var news_service_1 = require("../services/news.service");
var IndexNewsComponent = (function () {
    function IndexNewsComponent(newsProvider) {
        this.newsProvider = newsProvider;
    }
    IndexNewsComponent.prototype.logIt = function () {
        this.newsProvider.log();
    };
    IndexNewsComponent.prototype.ngOnInit = function () {
        this.logIt();
    };
    return IndexNewsComponent;
}());
IndexNewsComponent = __decorate([
    core_1.Component({
        selector: 'index-news',
        templateUrl: './src/shared/templates/index-news.component.html',
    })
    // Display index news
    ,
    __metadata("design:paramtypes", [news_service_1.NewsService])
], IndexNewsComponent);
exports.IndexNewsComponent = IndexNewsComponent;
//# sourceMappingURL=indexNews.component.js.map