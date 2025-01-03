(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-picker/location-picker.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-picker/location-picker.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html id=\"boop\">\r\n    \r\n<div class=\"contianer container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            \r\n            <div *ngIf = \"showLocationMenu\">\r\n                <table class=\"table table-borderless\">\r\n                    <tr>\r\n                        <td><button class=\"btn btn-primary\"(click) = \"openLocationOne()\">Location One</button></td>\r\n            \r\n                        <td><button class=\"btn btn-primary\"(click) = \"openLocationTwo()\">Location Two</button></td>\r\n            \r\n                        <td><button class=\"btn btn-primary\"(click) = \"openLocationThree()\">Location Three</button></td>\r\n            \r\n                        <td><button class=\"btn btn-primary\"(click) = \"openLocationFour()\">Location Four</button></td>\r\n                    </tr>\r\n                </table>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div *ngIf = \"showTreasureMap\">\r\n                \r\n                        <img class=\"map\" src = \"{{treasureLocation}}\" >\r\n                        <iframe class = \"map\"width=\"394\" height=\"315\" frameBorder=\"0\" [src]=\"urlSafe\"></iframe>\r\n                        \r\n                        <img class = \"rotom\"src=\"assets/images/RotomTv3.png\" width=\"600px\">\r\n                    \r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 block\"  *ngIf = \"showTreasureMap\">\r\n            <h3>{{currentHint}}</h3>\r\n            <img id=\"change\"src=\"assets/images/pokebox2.png\" height=\"100px\" (click) = \"treasureBoxFound()\" >\r\n            <div *ngIf = \"currentUser.manager\">\r\n                <button (click) = \"editLocationCoordinates()\">Edit Location Coordinates</button>\r\n            </div>\r\n            <div *ngIf = \"editTreasureLocation\">\r\n                <input type=\"text\" [(ngModel)] = \"newLocationInput\">\r\n                <button (click) = \"submitCoordinates()\">Submit Coordinates</button>\r\n            </div>\r\n \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div *ngIf = \"showTreasuresList\">\r\n                \r\n    \r\n                <app-treasures-list\r\n                    [currentLocation] = \"currentLocation\" [currentUser] = \"currentUser\" >\r\n            \r\n                </app-treasures-list>\r\n            \r\n            \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\r\n    \r\n</head>\r\n\r\n<div id=backdrop class=\"jumbotron jumbotron-fluid\" *ngIf = \"loginSuccessful == false\">\r\n    <div class=\"container container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <div >\r\n                    <div  *ngIf = \"loginSuccessful == false\">\r\n                        <h1 class=\"display-4\">GEO EPIC</h1>\r\n                        <p class=\"lead\">Find Poke Items,  Gain Revature Points</p>\r\n                        <hr class=\"my-4\">\r\n                    </div>\r\n                   \r\n                </div>\r\n            </div>\r\n        </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-4 low\" *ngIf = \"loginSuccessful == false\">\r\n                    <img src=\"assets/images/MaleTrainer.png\" height=\"300px\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                \r\n                    <div id=\"check\" *ngIf = \"loginSuccessful == false\">\r\n                      \r\n                            <h2>Start Exploring!</h2>\r\n                        \r\n                            <div class=\"input-group input-group-sm mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <p class=\"input-group-text\" id=\"basic-addon1\">Username</p>\r\n                                </div>\r\n                                <input class=\"form-control\" type=\"text\" [(ngModel)] = \"usernm\">\r\n                                \r\n                            </div>\r\n                            <div class=\"input-group input-group-sm mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <p class=\"input-group-text\" id=\"basic-addon1\">Password</p>\r\n                                </div>\r\n                                <input  class=\"form-control\" type=\"password\" [(ngModel)] = \"userpassword\">\r\n                                \r\n                            </div>\r\n                           \r\n                            \r\n                            <button class=\"btn\" (click) = \"submit()\">Submit</button>\r\n                            <button class=\"btn\" (click) = \"addNewUser()\">Become an Explorer</button>\r\n                    \r\n                    </div>\r\n                    \r\n                        \r\n                    \r\n                </div>\r\n                <div class=\"col-sm-4 low\" *ngIf = \"loginSuccessful == false\">\r\n                    <img src=\"assets/images/FemaleExplore.png\" height=\"300px\">\r\n    \r\n                </div>\r\n            </div>\r\n         \r\n    </div>\r\n    \r\n</div>\r\n<div class=\"wide container container-fluid\"  *ngIf = \"showLogout\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <nav class=\"navbar navbar-expand-lg\">\r\n                <div class=\"navbar-brand\">\r\n                  GeoEpic\r\n                 \r\n                </div>\r\n                <div *ngIf = \"showLogout\">\r\n                    <button  class=\"btn btn-sm btn-primary\" (click) = \"doLogout()\">Logout</button>\r\n                    \r\n                    </div>\r\n              </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div *ngIf = \"loginSuccessful\">\r\n\r\n    <app-location-picker\r\n        [currentUser] = \"currentUser\">\r\n\r\n    </app-location-picker>\r\n\r\n\r\n</div>\r\n<footer >\r\n    <p>&copy; BitByte Inc.</p>\r\n</footer>\r\n\r\n\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/testing/testing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testing/testing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>testing works!</p>\r\n\r\n\r\n<button (click) = \"getAllClientsTest()\">Get all Clients Test</button>\r\n<button (click) = \"logintest()\">Login Test</button>\r\n<button (click) = \"createClientTest()\">Create New Client Test</button>\r\n<button (click) = \"getLocationByIdTest()\">getLocationById test</button>\r\n<button (click) = \"getAllLocationsTest()\">getAllLocations Test</button>\r\n<button (click) = \"getItemsForLocationTest()\">getItemsForLocation Test</button>\r\n<button (click) = \"getItemsForClientTest()\">getItemsForClient Test</button>\r\n<button (click) = \"getItemByIdTest()\">getItemById Test</button>\r\n<button (click) = \"updateItemTest()\">updateItem Test</button>\r\n<button (click) = \"updateClientTest()\">updateClient Test</button>\r\n<button (click) = \"getClientByIdTest()\">getClientById Test</button>\r\n<button (click) = \"updateLocationTest()\">updateLocation Test</button>\r\n<button (click) = \"createItemTest()\">createItem Test</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/treasures-list/treasures-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treasures-list/treasures-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div *ngIf = \"showTreasures\">\r\n\r\n\r\n\r\n<table>\r\n    <tr>\r\n        <td>\r\n            <h3>Treasures in box {{currentLocation.lId}}:</h3>\r\n        </td>\r\n        <td>\r\n            <h3>Your Treasure Inventory:</h3>\r\n        </td>\r\n        <td>\r\n            <h3>Your Score:</h3>\r\n        </td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>\r\n            <ul>\r\n                <li *ngFor = \"let treasure of treasures\">\r\n                    {{treasure.name}}:{{treasure.description}}\r\n                    <button (click) = \"swapTreasure(treasure)\">SWAP {{treasure.name}}</button>\r\n                </li>\r\n            </ul>\r\n        </td>\r\n        <td>\r\n            <ul>\r\n                <li *ngFor = \"let anItem of userItems\">\r\n                    {{anItem.name}}:{{anItem.description}}\r\n                    <button (click) = \"swapUserItem(anItem)\">SWAP {{anItem.name}}</button>\r\n                </li>\r\n            </ul>\r\n        </td>\r\n        <td>\r\n            \r\n        </td>\r\n    </tr>\r\n    <tr *ngIf = \"currentUser.manager\">\r\n        <button (click) = \"addTreasure()\">Add Treasure</button>\r\n        <button (click) = \"removeTreasure()\">Remove Treasure</button>\r\n    </tr>\r\n</table>\r\n\r\n\r\n\r\n</div>\r\n\r\n<div *ngIf = \"readyForSwap\">\r\n    <h3>SWAP Ready</h3>\r\n    <br>\r\n    <h5>Item from Box:{{boxSwapItem.name}}:{{boxSwapItem.description}}</h5>\r\n    <br>\r\n    <h5>Your Item:{{userSwapItem.name}}:{{userSwapItem.description}}</h5>\r\n    <br>\r\n    <button (click) = \"doSwap()\">Do Swap!</button>\r\n</div>\r\n\r\n\r\n\r\n<div *ngIf = \"addTreasureMenu\">\r\n    Name:\r\n    <input type=\"text\" [(ngModel)] = \"name\">\r\n    Description:\r\n    <input type=\"text\" [(ngModel)] = \"description\">\r\n    Value:\r\n    <input type=\"text\" [(ngModel)] = \"value\">\r\n    <button (click) = \"addTreasureToBox()\">Add Treasure</button>\r\n\r\n</div>\r\n\r\n<!-- <div *ngIf = \"removeTreasureMenu\">\r\n    <ul>\r\n        <li *ngFor = \"let anItem of userItems\">\r\n            {{anItem.name}}:{{anItem.description}}\r\n            <button (click) = \"swapUserItem(anItem)\">SWAP {{anItem.name}}</button>\r\n        </li>\r\n    </ul>\r\n</div> -->\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Models/Client.ts":
/*!**********************************!*\
  !*** ./src/app/Models/Client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Client {
    constructor(cId, username, password, score, manager) {
        this.cId = cId;
        this.username = username;
        this.password = password;
        this.score = score;
        this.manager = manager;
    }
}


/***/ }),

/***/ "./src/app/Models/Config.ts":
/*!**********************************!*\
  !*** ./src/app/Models/Config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Config {
}
Config.server = "http://localhost:9999";


/***/ }),

/***/ "./src/app/Models/Item.ts":
/*!********************************!*\
  !*** ./src/app/Models/Item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Item {
    constructor(iId, name, description, value, client, location) {
        this.iId = iId;
        this.name = name;
        this.description = description;
        this.value = value;
        this.client = client;
        this.location = location;
    }
}


/***/ }),

/***/ "./src/app/Models/Location.ts":
/*!************************************!*\
  !*** ./src/app/Models/Location.ts ***!
  \************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
//this is called ILocation, instead of Location, because Location already meant something else

class Location {
    constructor(lId, clue, geoLocation) {
        this.lId = lId;
        this.clue = clue;
        this.geoLocation = geoLocation;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");





const routes = [
    { path: "testing", component: _testing_testing_component__WEBPACK_IMPORTED_MODULE_3__["TestingComponent"] },
    { path: "**", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'geoepic';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location-picker/location-picker.component */ "./src/app/location-picker/location-picker.component.ts");
/* harmony import */ var _treasures_list_treasures_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treasures-list/treasures-list.component */ "./src/app/treasures-list/treasures-list.component.ts");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_8__["LocationPickerComponent"],
            _treasures_list_treasures_list_component__WEBPACK_IMPORTED_MODULE_9__["TreasuresListComponent"],
            _testing_testing_component__WEBPACK_IMPORTED_MODULE_10__["TestingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/geo-services.service.ts":
/*!*****************************************!*\
  !*** ./src/app/geo-services.service.ts ***!
  \*****************************************/
/*! exports provided: GeoServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoServicesService", function() { return GeoServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Models_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/Config */ "./src/app/Models/Config.ts");




let GeoServicesService = class GeoServicesService {
    constructor(http) {
        this.http = http;
    }
    getAllClients() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/getAllClients`, { headers }).toPromise();
    }
    login(c) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/login`, c, { headers }).toPromise();
    }
    createClient(c) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/createClient`, c, { headers }).toPromise();
    }
    getLocationById(L) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/getLocationById`, L, { headers }).toPromise();
    }
    getAllLocations() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/getAllLocations`, { headers }).toPromise();
    }
    getItemsForLocation(L) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/getItemsForLocation`, L, { headers }).toPromise();
    }
    getItemsForClient(C) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/getItemsForClient`, C, { headers }).toPromise();
    }
    getItemById(I) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/getItemById`, I, { headers }).toPromise();
    }
    updateItem(I) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/updateItem`, I, { headers }).toPromise();
    }
    getClientById(C) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/getClientById`, C, { headers }).toPromise();
    }
    updateClient(C) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/updateClient`, C, { headers }).toPromise();
    }
    updateLocation(L) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/updateLocation`, L, { headers }).toPromise();
    }
    createItem(I) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Vary', "Origin");
        headers.append('Vary', "Access-Control-Request-Method");
        headers.append('Vary', "Access-Control-Request-Headers");
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${_Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server}/createItem`, I, { headers }).toPromise();
    }
};
GeoServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeoServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GeoServicesService);



/***/ }),

/***/ "./src/app/location-picker/location-picker.component.css":
/*!***************************************************************!*\
  !*** ./src/app/location-picker/location-picker.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rotom{\r\n    position: absolute;\r\n\r\n    z-index: 1;\r\n}\r\n\r\n.map{\r\n    position: absolute;\r\n    z-index: 3;\r\n    top: 180px;\r\n    left:60px;\r\n}\r\n\r\n.block{\r\n    text-align: center;\r\n}\r\n\r\n#box{\r\n    height: 100px;\r\n }\r\n\r\n.table{\r\n    background-color: lightgreen;\r\n    border-radius: 10px;\r\n    /* padding-right: -10px; */\r\n}\r\n\r\n.jumbotron{\r\n    width: 100%;\r\n}\r\n\r\n#boop{\r\n    background-image: none;\r\n}\r\n\r\n.btn{\r\n    background-color: bisque;\r\n    margin: 10px 60px;\r\n    color: slategray;\r\n}\r\n\r\n.nav-item{\r\n    margin: 20px, 0px;\r\n}\r\n\r\n#change:hover{\r\n    src: url(\"/assets/images/pokeOpening2.gif\");\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCOztJQUVsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJDQUEyQzs7QUFFL0MiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbi1waWNrZXIvbG9jYXRpb24tcGlja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm90b217XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1hcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0b3A6IDE4MHB4O1xyXG4gICAgbGVmdDo2MHB4O1xyXG59XHJcblxyXG4uYmxvY2t7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4jYm94e1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuIH1cclxuLnRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAtMTBweDsgKi9cclxufVxyXG4uanVtYm90cm9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNib29we1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgIG1hcmdpbjogMTBweCA2MHB4O1xyXG4gICAgY29sb3I6IHNsYXRlZ3JheTtcclxufVxyXG5cclxuLm5hdi1pdGVte1xyXG4gICAgbWFyZ2luOiAyMHB4LCAwcHg7XHJcbn1cclxuXHJcbiNjaGFuZ2U6aG92ZXJ7XHJcbiAgICBzcmM6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Bva2VPcGVuaW5nMi5naWZcIik7XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/location-picker/location-picker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/location-picker/location-picker.component.ts ***!
  \**************************************************************/
/*! exports provided: LocationPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPickerComponent", function() { return LocationPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _geo_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geo-services.service */ "./src/app/geo-services.service.ts");




let LocationPickerComponent = class LocationPickerComponent {
    constructor(sanitizer, gss) {
        this.sanitizer = sanitizer;
        this.gss = gss;
        this.showTreasuresList = false;
        this.showLocationMenu = true;
        this.showTreasureMap = false;
        this.editTreasureLocation = false;
        this.currentLocation = null;
        this.key = "AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk";
        this.name = 'Set iframe source';
        this.url = "https://www.google.com/maps/embed/v1/place?q=39.631979,-79.953752&key=AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk";
    }
    updateMapURL() {
        this.url = `https://www.google.com/maps/embed/v1/place?q=${this.locCoord}&key=${this.key}`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    ngOnInit() {
        this.showLocationMenu = true;
        this.showTreasuresList = false;
        this.showTreasureMap = false;
        this.editTreasureLocation = false;
        this.initializeLocations();
    }
    initializeLocations() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let inputdata = yield this.gss.getAllLocations();
            this.theLocations = inputdata;
            console.log(this.theLocations[0].geoLocation);
        });
    }
    openLocationOne() {
        this.showTreasuresList = false;
        this.locCoord = this.theLocations[0].geoLocation;
        this.updateMapURL();
        this.showTreasureMap = true;
        // this.locationNumber = 1;
        this.currentLocation = this.theLocations[0];
        this.currentHint = this.theLocations[0].clue;
    }
    openLocationTwo() {
        this.showTreasuresList = false;
        this.locCoord = this.theLocations[1].geoLocation;
        this.updateMapURL();
        this.showTreasureMap = true;
        // this.locationNumber = 2;
        this.currentLocation = this.theLocations[1];
        this.currentHint = this.theLocations[1].clue;
    }
    openLocationThree() {
        this.showTreasuresList = false;
        this.locCoord = this.theLocations[2].geoLocation;
        this.updateMapURL();
        this.showTreasureMap = true;
        // this.locationNumber = 3;
        this.currentLocation = this.theLocations[2];
        this.currentHint = this.theLocations[2].clue;
    }
    openLocationFour() {
        this.showTreasuresList = false;
        this.locCoord = this.theLocations[3].geoLocation;
        this.updateMapURL();
        this.showTreasureMap = true;
        // this.locationNumber = 4;
        this.currentLocation = this.theLocations[3];
        this.currentHint = this.theLocations[3].clue;
    }
    treasureBoxFound() {
        this.showTreasureMap = false;
        this.showTreasuresList = true;
    }
    editLocationCoordinates() {
        this.editTreasureLocation = true;
    }
    submitCoordinates() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.currentLocation.geoLocation);
            this.currentLocation.geoLocation = this.newLocationInput;
            console.log(this.currentLocation.geoLocation);
            let tempC = yield this.gss.updateLocation(this.currentLocation);
            console.log(this.currentLocation.geoLocation);
            this.currentLocation = tempC;
            alert("Location updated to " + this.currentLocation.geoLocation);
            this.newLocationInput = "";
            this.editTreasureLocation = false;
        });
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _geo_services_service__WEBPACK_IMPORTED_MODULE_3__["GeoServicesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LocationPickerComponent.prototype, "currentUser", void 0);
LocationPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-picker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-picker/location-picker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location-picker.component.css */ "./src/app/location-picker/location-picker.component.css")).default]
    })
], LocationPickerComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\r\n    margin-left: 20px;\r\n    margin-top: 10px;\r\n   \r\n    color: blue;\r\n    /* position: absolute; */\r\n    /* position: fixed; */\r\n    bottom: 0;\r\n}\r\n\r\n.wide{\r\n    width: 100%;\r\n}\r\n\r\n.tiled{\r\n    /* background-image: url(\"/src/assests/images/pokemon-go-wallpaper-pokeball-png.jpg\"); */\r\n    background-size: 50px;\r\n    background-repeat: repeat-x;\r\n    height: 30px;\r\n}\r\n\r\n.jumbotron{\r\n    background-color: burlywood;\r\n}\r\n\r\n.container{\r\n    /* background-color: aqua; */\r\n    /* margin-top: -20px; */\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.input-group-text{\r\n    background-color: bisque;\r\n    color: slategray;\r\n}\r\n\r\n.btn{\r\n    background-color: bisque;\r\n    color: slategray;\r\n}\r\n\r\n#check{\r\n    text-align: center;\r\n    margin-left: 25px;\r\n}\r\n\r\n#backdrop{\r\n    background-image: url('forest.png');\r\n    background-size: cover;\r\n}\r\n\r\n#right{\r\n    margin-right: -200px;\r\n}\r\n\r\n.low{\r\n    margin-top: 70px;\r\n}\r\n\r\n.navbar{\r\n    background-color: aquamarine;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdGQUF3RjtJQUN4RixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBcUQ7SUFDckQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgXHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLndpZGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpbGVke1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3NyYy9hc3Nlc3RzL2ltYWdlcy9wb2tlbW9uLWdvLXdhbGxwYXBlci1wb2tlYmFsbC1wbmcuanBnXCIpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiAtMjBweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgIGNvbG9yOiBzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICBjb2xvcjogc2xhdGVncmF5O1xyXG59XHJcblxyXG4jY2hlY2t7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuI2JhY2tkcm9we1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvZm9yZXN0LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNyaWdodHtcclxuICAgIG1hcmdpbi1yaWdodDogLTIwMHB4O1xyXG59XHJcblxyXG4ubG93e1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Client */ "./src/app/Models/Client.ts");
/* harmony import */ var _Models_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Config */ "./src/app/Models/Config.ts");
/* harmony import */ var _geo_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geo-services.service */ "./src/app/geo-services.service.ts");





let LoginComponent = class LoginComponent {
    constructor(gss) {
        this.gss = gss;
        this.parentMessage = "WOOHA!!!";
        // infoManager:string;
        // isManager:boolean;
        this.loginSuccessful = false;
        this.showLogout = false;
    }
    ngOnInit() {
        console.log("Location of server: " + _Models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].server);
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let c = new _Models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](0, this.usernm, this.userpassword, 0, false);
            let tempc = yield this.gss.login(c);
            this.currentUser = tempc;
            console.log(this.currentUser);
            if (this.currentUser == null) {
                alert("Incorrect Username/Password!");
                this.usernm = "";
                this.userpassword = "";
                return;
            }
            this.loginSuccessful = true;
            this.showLogout = true;
        });
    }
    addNewUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let c = new _Models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](0, this.usernm, this.userpassword, 0, false);
            let tempc = yield this.gss.createClient(c);
            this.currentUser = tempc;
            console.log(this.currentUser);
            alert("Account successfully created. Please log in.");
            this.usernm = "";
            this.userpassword = "";
            return;
            // this.loginSuccessful = true;
            // this.showLogout = true;
        });
    }
    doLogout() {
        this.loginSuccessful = false;
        this.currentUser = null;
        this.showLogout = false;
        this.usernm = "";
        this.userpassword = "";
        // this.infoManager = "";
    }
};
LoginComponent.ctorParameters = () => [
    { type: _geo_services_service__WEBPACK_IMPORTED_MODULE_4__["GeoServicesService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/testing/testing.component.css":
/*!***********************************************!*\
  !*** ./src/app/testing/testing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmcvdGVzdGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/testing/testing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Client */ "./src/app/Models/Client.ts");
/* harmony import */ var _geo_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geo-services.service */ "./src/app/geo-services.service.ts");
/* harmony import */ var _Models_Location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/Location */ "./src/app/Models/Location.ts");
/* harmony import */ var _Models_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/Item */ "./src/app/Models/Item.ts");






let TestingComponent = class TestingComponent {
    constructor(gss) {
        this.gss = gss;
    }
    ngOnInit() {
    }
    getAllClientsTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let inputdata = yield this.gss.getAllClients();
            let temp = inputdata;
            console.log(temp);
            console.log(temp[0].username);
        });
    }
    logintest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let c = new _Models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](0, "jason", "jasonpass", 0, true);
            let tempc = yield this.gss.login(c);
            c = tempc;
            console.log(c);
        });
    }
    createClientTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let c = new _Models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](0, "test1", "test1pass", 0, false);
            let tempc = yield this.gss.createClient(c);
            c = tempc;
            console.log(c);
        });
    }
    getLocationByIdTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let L = new _Models_Location__WEBPACK_IMPORTED_MODULE_4__["Location"](1, "", "");
            let tempL = yield this.gss.getLocationById(L);
            L = tempL;
            console.log(L);
        });
    }
    getAllLocationsTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let inputdata = yield this.gss.getAllLocations();
            let temp = inputdata;
            console.log(temp);
            console.log(temp[0].clue);
        });
    }
    getItemsForLocationTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let L = new _Models_Location__WEBPACK_IMPORTED_MODULE_4__["Location"](1, "", "");
            let tempL = yield this.gss.getItemsForLocation(L);
            let items = tempL;
            console.log(items);
            console.log(items[0].name);
        });
    }
    getItemsForClientTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let C = new _Models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](1, "", "", 0, false);
            let tempL = yield this.gss.getItemsForClient(C);
            let items = tempL;
            console.log(items);
            console.log(items[0].name);
        });
    }
    getItemByIdTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let I = new _Models_Item__WEBPACK_IMPORTED_MODULE_5__["Item"](1, "", "", 0, null, null);
            let tempI = yield this.gss.getItemById(I);
            I = tempI;
            console.log(I);
        });
    }
    updateItemTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //get item
            let I = new _Models_Item__WEBPACK_IMPORTED_MODULE_5__["Item"](28, "", "", 0, null, null);
            let tempI = yield this.gss.getItemById(I);
            I = tempI;
            //get location
            let L = new _Models_Location__WEBPACK_IMPORTED_MODULE_4__["Location"](1, "", "");
            let tempL = yield this.gss.getLocationById(L);
            L = tempL;
            I.location = L;
            I.client = null;
            console.log(I);
            tempI = yield this.gss.updateItem(I);
            I = tempI;
            console.log(I);
        });
    }
    updateClientTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let c = new _Models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](25, "tempc", "tempcpass", 0, false);
            let tempc = yield this.gss.updateClient(c);
            c = tempc;
            console.log(c);
        });
    }
    getClientByIdTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let c = new _Models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"](25, "", "", 0, false);
            let tempc = yield this.gss.getClientById(c);
            c = tempc;
            console.log(c);
        });
    }
    updateLocationTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let Loc = new _Models_Location__WEBPACK_IMPORTED_MODULE_4__["Location"](10, "", "");
            let tempLoc = yield this.gss.getLocationById(Loc);
            Loc = tempLoc;
            Loc.geoLocation = "45678";
            let t2 = yield this.gss.updateLocation(Loc);
            Loc = t2;
            console.log(Loc);
        });
    }
    createItemTest() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let I = new _Models_Item__WEBPACK_IMPORTED_MODULE_5__["Item"](0, "Test Haha", "Testing Haha", 40, null, null);
            let tempI = yield this.gss.createItem(I);
            I = tempI;
            console.log(I);
        });
    }
};
TestingComponent.ctorParameters = () => [
    { type: _geo_services_service__WEBPACK_IMPORTED_MODULE_3__["GeoServicesService"] }
];
TestingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/testing/testing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testing.component.css */ "./src/app/testing/testing.component.css")).default]
    })
], TestingComponent);



/***/ }),

/***/ "./src/app/treasures-list/treasures-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/treasures-list/treasures-list.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWFzdXJlcy1saXN0L3RyZWFzdXJlcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/treasures-list/treasures-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/treasures-list/treasures-list.component.ts ***!
  \************************************************************/
/*! exports provided: TreasuresListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasuresListComponent", function() { return TreasuresListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Item */ "./src/app/Models/Item.ts");
/* harmony import */ var _Models_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Location */ "./src/app/Models/Location.ts");
/* harmony import */ var _geo_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geo-services.service */ "./src/app/geo-services.service.ts");





let TreasuresListComponent = class TreasuresListComponent {
    constructor(gss) {
        this.gss = gss;
        this.treasures = [];
        this.userItems = [];
        this.boxSwapItem = null;
        this.userSwapItem = null;
        this.showTreasures = false;
        this.readyForSwap = false;
        this.addTreasureMenu = false;
        this.removeTreasureMenu = false;
    }
    populateTreasureList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let L = new _Models_Location__WEBPACK_IMPORTED_MODULE_3__["Location"](this.currentLocation.lId, "", "");
            let tempL = yield this.gss.getItemsForLocation(L);
            this.treasures = tempL;
        });
    }
    populateUserItems() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let tempI = yield this.gss.getItemsForClient(this.currentUser);
            // let items:Item[] = tempI;
            this.userItems = tempI;
        });
    }
    ngOnInit() {
        console.log("In treasures-List component");
        console.log(this.currentUser);
        console.log(this.currentLocation);
        this.boxSwapItem = null;
        this.userSwapItem = null;
        this.readyForSwap = false;
        this.populateTreasureList();
        this.populateUserItems();
        this.showTreasures = true;
        this.addTreasureMenu = false;
        this.removeTreasureMenu = false;
        this.name = "";
        this.description = "";
        this.value = 0;
    }
    swapTreasure(T) {
        this.boxSwapItem = T;
        if ((this.userSwapItem != null) && (this.boxSwapItem != null)) {
            this.readyForSwap = true;
            this.showTreasures = false;
        }
    }
    swapUserItem(T) {
        this.userSwapItem = T;
        if ((this.userSwapItem != null) && (this.boxSwapItem != null)) {
            this.readyForSwap = true;
            this.showTreasures = false;
        }
    }
    //User item gets no owner/no location
    //box item gets both owner and location
    doSwap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //update boxSwapItem
            this.boxSwapItem.location = null;
            this.boxSwapItem.client = this.currentUser;
            let tempI = yield this.gss.updateItem(this.boxSwapItem);
            this.boxSwapItem = tempI;
            //update userSwapItem
            this.userSwapItem.client = null;
            this.userSwapItem.location = this.currentLocation;
            let tempI2 = yield this.gss.updateItem(this.userSwapItem);
            this.userSwapItem = tempI2;
            //Update User's score
            this.currentUser.score += this.userSwapItem.value;
            let tempc = yield this.gss.updateClient(this.currentUser);
            this.currentUser = tempc;
            //reset screen
            this.ngOnInit();
        });
    }
    addTreasure() {
        this.addTreasureMenu = true;
    }
    addTreasureToBox() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let newTreasure = new _Models_Item__WEBPACK_IMPORTED_MODULE_2__["Item"](0, this.name, this.description, this.value, null, this.currentLocation);
            let TempI = yield this.gss.createItem(newTreasure);
            newTreasure = TempI;
            console.log(newTreasure);
            alert("Treasure successfully added: " + newTreasure.name);
            this.ngOnInit();
        });
    }
    removeTreasure() {
        //put code here
    }
};
TreasuresListComponent.ctorParameters = () => [
    { type: _geo_services_service__WEBPACK_IMPORTED_MODULE_4__["GeoServicesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TreasuresListComponent.prototype, "currentLocation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TreasuresListComponent.prototype, "currentUser", void 0);
TreasuresListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-treasures-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./treasures-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/treasures-list/treasures-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./treasures-list.component.css */ "./src/app/treasures-list/treasures-list.component.css")).default]
    })
], TreasuresListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\genji\Documents\RevatureStuff\GeoEpic_front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map