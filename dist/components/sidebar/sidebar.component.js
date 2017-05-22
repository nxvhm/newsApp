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
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/filter");
var SourcesSidebarComponent = (function () {
    function SourcesSidebarComponent(provider, router, route) {
        this.provider = provider;
        this.router = router;
        this.route = route;
    }
    SourcesSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams = {};
        this.provider.getNewsSources().subscribe(function (sources) {
            _this.sources = sources;
        });
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.route; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .subscribe(function (event) {
            _this.routeParams = event.params;
        });
    };
    SourcesSidebarComponent.prototype.onFilterSourceChange = function (value) {
        //console.log(this.filterSource);
    };
    return SourcesSidebarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourcesSidebarComponent.prototype, "filterSource", void 0);
SourcesSidebarComponent = __decorate([
    core_1.Component({
        selector: 'sources-sidebar',
        templateUrl: './src/components/sidebar/sources-sidebar.component.html',
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService, router_1.Router, router_1.ActivatedRoute])
], SourcesSidebarComponent);
exports.SourcesSidebarComponent = SourcesSidebarComponent;
//# sourceMappingURL=sidebar.component.js.map