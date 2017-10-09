webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<app-editor></app-editor>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__ = __webpack_require__("./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_design_view_design_component__ = __webpack_require__("./src/app/view-design/view-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_collections_view_collections_component__ = __webpack_require__("./src/app/view-collections/view-collections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_404_view_404_component__ = __webpack_require__("./src/app/view-404/view-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editor_editor_component__ = __webpack_require__("./src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__folder_tree_folder_tree_component__ = __webpack_require__("./src/app/folder-tree/folder-tree.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var defaultEditorView = __WEBPACK_IMPORTED_MODULE_6__view_design_view_design_component__["a" /* ViewDesignComponent */].menu.url;
var appRoutes = [
    { path: __WEBPACK_IMPORTED_MODULE_6__view_design_view_design_component__["a" /* ViewDesignComponent */].menu.url, component: __WEBPACK_IMPORTED_MODULE_6__view_design_view_design_component__["a" /* ViewDesignComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_7__view_collections_view_collections_component__["a" /* ViewCollectionsComponent */].menu.url, component: __WEBPACK_IMPORTED_MODULE_7__view_collections_view_collections_component__["a" /* ViewCollectionsComponent */] },
    { path: '',
        redirectTo: defaultEditorView,
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__view_404_view_404_component__["a" /* View404Component */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__view_design_view_design_component__["a" /* ViewDesignComponent */],
            __WEBPACK_IMPORTED_MODULE_7__view_collections_view_collections_component__["a" /* ViewCollectionsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__view_404_view_404_component__["a" /* View404Component */],
            __WEBPACK_IMPORTED_MODULE_9__editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__folder_tree_folder_tree_component__["a" /* FolderTreeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- Routed views go here -->"

/***/ }),

/***/ "./src/app/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorComponent = (function () {
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("./src/app/editor/editor.component.html"),
        styles: [__webpack_require__("./src/app/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "./src/app/folder-tree/folder-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\n  <header>\n    <form>\n      <input type=\"text\" placeholder=\"Collection name\"/><button class='button-primary'>Add</button>\n    </form>\n  </header>\n\n  <section id='local-resources'>\n    <h5>Collections</h5>\n    <ul>\n      <li></li>\n    </ul>\n  </section>\n\n  <section id='dropbox-resources'>\n    <h5 class='label'>Dropbox <span>(read only)</span></h5>\n    <ul>\n      <li *ngFor='let dropboxFolder of dropboxContent'>\n        <div class='toggle'>\n          <div class=\"folder folder-dropbox\"></div>\n          <h4>{{dropboxFolder.name}}</h4>\n        </div>\n        <div class='toggle-content'>\n          <ul>\n            <li>File</li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  </section>\n\n</aside>"

/***/ }),

/***/ "./src/app/folder-tree/folder-tree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "aside {\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  height: 100%;\n  padding: 40px 30px;\n  box-sizing: border-box;\n  overflow-y: auto; }\n  aside h5 {\n    color: #9d9d9d;\n    font-size: 14px;\n    font-weight: bold; }\n    aside h5 span {\n      font-weight: 400;\n      line-height: 1;\n      color: #777;\n      font-size: 75%; }\n  aside form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.1); }\n    aside form input {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    aside form button {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n  aside section > ul > li {\n    list-style: none;\n    margin: 0; }\n    aside section > ul > li .toggle {\n      cursor: pointer;\n      color: #9d9d9d;\n      padding: 10px 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n      aside section > ul > li .toggle:hover {\n        color: #fff; }\n      aside section > ul > li .toggle h4 {\n        padding-left: 15px;\n        line-height: 1.6;\n        -webkit-box-flex: 2;\n            -ms-flex: 2;\n                flex: 2;\n        font-size: 16px;\n        margin: 0; }\n  aside .folder {\n    background-color: #3781a6;\n    border-top-size: 2px;\n    border-top-style: solid;\n    border-color: #2f6e8d;\n    width: 35px;\n    height: 22px;\n    border-radius: 2px;\n    cursor: pointer;\n    position: relative;\n    color: #fff; }\n    aside .folder.folder-dropbox:after {\n      content: '\\F340';\n      font: normal normal normal 14px/1 'Material-Design-Iconic-Font';\n      text-align: center;\n      display: block;\n      line-height: 1.6; }\n  aside .folder-row:hover .folder {\n    background-color: #67abcd;\n    border-color: #56a1c7; }\n  aside .folder-row:hover .folder:before {\n    background-color: #56a1c7; }\n  aside .folder:before {\n    content: '';\n    width: 20px;\n    height: 3px;\n    background-color: #2f6e8d;\n    display: block;\n    margin-top: -5px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 5px; }\n  aside .folder-tree {\n    height: 100vh;\n    height: calc(100vh - 50px);\n    overflow: auto;\n    padding-top: 10px;\n    border-top: 2px solid rgba(255, 255, 255, 0.1); }\n    aside .folder-tree h5 {\n      padding: 10px;\n      color: #9d9d9d; }\n  aside .folder-row {\n    margin-top: 15px;\n    cursor: pointer; }\n    aside .folder-row h4 {\n      color: #9d9d9d;\n      font-size: 16px;\n      margin: 3px 0;\n      padding-left: 15px; }\n    aside .folder-row:hover h4 {\n      color: #fff; }\n    aside .folder-row > * {\n      float: left; }\n    aside .folder-row + .list-group .list-group-item {\n      border: 0;\n      color: #9e9e9e;\n      background-color: transparent;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    aside .folder-row .dropdown-toggle {\n      background-color: transparent;\n      color: #f1f1f1;\n      border: 0; }\n    aside .folder-row.loading .spinner {\n      float: right;\n      width: 15px;\n      margin-right: 10px; }\n    aside .folder-row.loading .folder {\n      opacity: .3; }\n    aside .folder-row.loading:hover .folder {\n      background-color: #3781a6;\n      border-color: #2f6e8d; }\n    aside .folder-row.loading:hover .folder:before {\n      background-color: #2f6e8d; }\n    aside .folder-row.loading h4 {\n      color: #777; }\n  aside .folder-row.dropbox.loaded + .list-group .spinner {\n    display: none; }\n  aside .no-content:before {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-left: 50px;\n    content: \"No Content Available\";\n    display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/folder-tree/folder-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderTreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FolderTreeComponent = (function () {
    function FolderTreeComponent(http) {
        this.http = http;
        this.viewTitle = 'Collections';
    }
    FolderTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/data/dropbox').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.dropboxContent = data;
        });
    };
    return FolderTreeComponent;
}());
FolderTreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-folder-tree',
        template: __webpack_require__("./src/app/folder-tree/folder-tree.component.html"),
        styles: [__webpack_require__("./src/app/folder-tree/folder-tree.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], FolderTreeComponent);

var _a;
//# sourceMappingURL=folder-tree.component.js.map

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class='clearfix'>\n  <div class=\"container-fluid\">\n    <!--Left-->\n    <nav>\n      <ul class=\"clearfix nav-item\">\n        <li id='back-to-site'><a href='/'><i class=\"zmdi zmdi-hc-2x zmdi-chevron-left\"></i></a></li>\n        <li *ngFor=\"let item of menu\"> \n          <a [title]='item.title' routerLink='/{{ item.url }}' routerLinkActive=\"active\">{{ item.text }}</a>\n        </li>\n      </ul>\n    </nav>\n    <!--Right-->\n    <aside class='clearfix nav-item'>{{user.name}} <svg id='avatar' width=\"40\" height=\"40\" [attr.data-jdenticon-value]='user.name'></svg></aside>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  margin-bottom: 40px;\n  color: #9d9d9d;\n  display: block;\n  clear: both;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  background-color: #171717;\n  float: left;\n  display: block;\n  width: 100%;\n  text-transform: uppercase; }\n  header .nav-item {\n    margin-bottom: 0; }\n  header nav {\n    float: left; }\n    header nav ul {\n      cursor: pointer;\n      list-style: none; }\n      header nav ul #back-to-site {\n        padding: 12px 10px; }\n      header nav ul li {\n        margin: 0;\n        padding: 15px 10px;\n        float: left; }\n        header nav ul li a {\n          letter-spacing: 2px;\n          font-size: 1.5rem;\n          color: inherit;\n          text-decoration: none; }\n          header nav ul li a:hover {\n            color: #fff; }\n          header nav ul li a.active {\n            color: #fff; }\n  header aside {\n    position: relative;\n    padding: 15px 10px;\n    float: right;\n    padding-right: 50px; }\n    header aside #avatar {\n      position: absolute;\n      right: 0;\n      top: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_collections_view_collections_component__ = __webpack_require__("./src/app/view-collections/view-collections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_design_view_design_component__ = __webpack_require__("./src/app/view-design/view-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarComponent = (function () {
    function ToolbarComponent(user) {
        this.user = user;
        this.menu = [
            __WEBPACK_IMPORTED_MODULE_1__view_collections_view_collections_component__["a" /* ViewCollectionsComponent */].menu,
            __WEBPACK_IMPORTED_MODULE_2__view_design_view_design_component__["a" /* ViewDesignComponent */].menu
        ];
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__("./src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("./src/app/toolbar/toolbar.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ToolbarComponent);

var _a;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
        this.name = 'Adam Crockett';
    }
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/view-404/view-404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  view-404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/view-404/view-404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/view-404/view-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var View404Component = (function () {
    function View404Component() {
    }
    View404Component.prototype.ngOnInit = function () {
    };
    return View404Component;
}());
View404Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-view-404',
        template: __webpack_require__("./src/app/view-404/view-404.component.html"),
        styles: [__webpack_require__("./src/app/view-404/view-404.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], View404Component);

//# sourceMappingURL=view-404.component.js.map

/***/ }),

/***/ "./src/app/view-collections/view-collections.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid\">\n  <app-folder-tree></app-folder-tree>\n  <div class='contents'>\n\n    <div class='collection collection-{{collection.id}}' *ngFor='let collection of collections'>\n      <h3>{{collection.name}}</h3>\n      <header>\n\n      </header>\n      <div class='preview'>\n        {{collection.contents}}\n      </div>\n      <footer>\n        <nav>\n          <p>Edit</p>\n          <p>Delete</p>\n        </nav>\n      </footer>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/view-collections/view-collections.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-folder-tree {\n  position: absolute;\n  left: 0;\n  top: 58px;\n  width: 475px;\n  height: calc(100vh - 58px); }\n\n.contents {\n  position: absolute;\n  right: 0;\n  top: 58px;\n  width: calc(100% - 475px);\n  padding: 40px 30px;\n  box-sizing: border-box; }\n  .contents .collection {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background-color: rgba(17, 17, 17, 0.8);\n    min-height: 490px;\n    border: 1px solid rgba(255, 255, 255, 0.1); }\n    .contents .collection .preview {\n      background-color: #000;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n    .contents .collection header {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1); }\n    .contents .collection footer {\n      border-top: 1px solid rgba(255, 255, 255, 0.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/view-collections/view-collections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCollectionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewCollectionsComponent = (function () {
    function ViewCollectionsComponent(http) {
        this.http = http;
        this.viewTitle = 'Collections';
    }
    ViewCollectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/data/collections').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.collections = data;
        });
    };
    return ViewCollectionsComponent;
}());
ViewCollectionsComponent.menu = {
    url: "collections",
    title: 'Manage collections',
    text: 'Collections'
};
ViewCollectionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-view-collections',
        template: __webpack_require__("./src/app/view-collections/view-collections.component.html"),
        styles: [__webpack_require__("./src/app/view-collections/view-collections.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ViewCollectionsComponent);

var _a;
//# sourceMappingURL=view-collections.component.js.map

/***/ }),

/***/ "./src/app/view-design/view-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Design</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/view-design/view-design.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/view-design/view-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDesignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewDesignComponent = (function () {
    function ViewDesignComponent() {
    }
    ViewDesignComponent.prototype.ngOnInit = function () {
    };
    return ViewDesignComponent;
}());
ViewDesignComponent.menu = {
    url: "design",
    title: 'design',
    text: 'Design'
};
ViewDesignComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-view-design',
        template: __webpack_require__("./src/app/view-design/view-design.component.html"),
        styles: [__webpack_require__("./src/app/view-design/view-design.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ViewDesignComponent);

//# sourceMappingURL=view-design.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map