"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var news_service_1 = require("./services/news.service");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.NewsAppModule, news_service_1.NewsService);
//# sourceMappingURL=main.js.map