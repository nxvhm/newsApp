"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indexNews_component_1 = require("./components/indexNews.component");
var sourceNews_component_1 = require("./components/sourceNews.component");
var sourceList_component_1 = require("./components/sourceList.component");
exports.routes = [
    { path: "", component: indexNews_component_1.IndexNewsComponent },
    { path: "source/:id", component: sourceNews_component_1.SourceNewsComponent },
    { path: "sources", component: sourceList_component_1.SourceListComponent }
];
//# sourceMappingURL=app.routes.js.map