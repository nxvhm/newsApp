"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SourceNewsComponent = (function () {
    // Display list of news from selected source
    function SourceNewsComponent() {
    }
    return SourceNewsComponent;
}());
SourceNewsComponent = __decorate([
    core_1.Component({
        selector: 'source-news',
        templateUrl: './src/shared/templates/source-news.component.html',
    })
    // Display list of news from selected source
], SourceNewsComponent);
exports.SourceNewsComponent = SourceNewsComponent;
//# sourceMappingURL=sourceNews.component.js.map