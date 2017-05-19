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
var SourcesSidebarComponent = (function () {
    function SourcesSidebarComponent(provider) {
        this.provider = provider;
        this.sources = [];
    }
    SourcesSidebarComponent.prototype.ngOnInit = function () {
        this.sources = this.provider.getAvailableSources();
    };
    return SourcesSidebarComponent;
}());
SourcesSidebarComponent = __decorate([
    core_1.Component({
        selector: 'sources-sidebar',
        templateUrl: './src/shared/templates/sources-sidebar.component.html',
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], SourcesSidebarComponent);
exports.SourcesSidebarComponent = SourcesSidebarComponent;
//# sourceMappingURL=sidebar.component.js.map