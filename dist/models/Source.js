"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Source = (function () {
    function Source(category, country, description, id, language, name, sortBysAvailable, url, urlsToLogos) {
        this.category = category;
        this.country = country;
        this.description = description;
        this.id = id;
        this.language = language;
        this.name = name;
        this.sortBysAvailable = sortBysAvailable;
        this.url = url;
        this.urlsToLogos = urlsToLogos;
    }
    Source.prototype.getLogo = function () {
        return ' 1 ';
    };
    return Source;
}());
exports.Source = Source;
//# sourceMappingURL=Source.js.map