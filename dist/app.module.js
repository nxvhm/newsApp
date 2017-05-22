"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app.component");
var indexNews_component_1 = require("./components/indexNews/indexNews.component");
var sourceNews_component_1 = require("./components/sourceNews/sourceNews.component");
var sourceList_component_1 = require("./components/sourcesList/sourceList.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var topbar_component_1 = require("./components/topbar/topbar.component");
var app_routes_1 = require("./app.routes");
var news_service_1 = require("./services/news.service");
var NewsAppModule = (function () {
    function NewsAppModule() {
    }
    return NewsAppModule;
}());
NewsAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.routes),
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        declarations: [
            topbar_component_1.TopNavigationComponent,
            sidebar_component_1.SourcesSidebarComponent,
            app_component_1.NewsAppComponent,
            indexNews_component_1.IndexNewsComponent,
            sourceNews_component_1.SourceNewsComponent,
            sourceList_component_1.SourceListComponent,
        ],
        providers: [news_service_1.NewsService],
        bootstrap: [app_component_1.NewsAppComponent]
    })
], NewsAppModule);
exports.NewsAppModule = NewsAppModule;
//# sourceMappingURL=app.module.js.map