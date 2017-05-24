"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sourceNews_component_1 = require("./components/sourceNews/sourceNews.component");
var sourceList_component_1 = require("./components/sourcesList/sourceList.component");
exports.routes = [
    { path: "", component: sourceList_component_1.SourceListComponent },
    { path: "source/:id", component: sourceNews_component_1.SourceNewsComponent }
    //{ path: "sources", component: SourceListComponent}
];
//# sourceMappingURL=app.routes.js.map