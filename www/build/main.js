webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                }
            }
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "barCanvas", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/kuhno92/Downloads/hiwi/nodejs-app-skeleton/server/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="bar-positive">\n    <ion-title>\n				<img src="assets/logo.png" alt="SICK" style="height:30px; filter: brightness(0) invert(1);">\n				<font color="white"> Sample Application </font>\n		</ion-title>\n				<ion-buttons end>\n						<button ion-button icon-only>\n								<ion-icon name="help"></ion-icon>\n							</button>\n						</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="information-circle"></ion-icon>\n					</button>\n				</ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-card>\n		<ion-card-content text-right>\n				<button ion-button class="active" round margin-left id="refresh"><span class="glyphicon glyphicon-refresh"></span></button>\n		</ion-card-content>\n	</ion-card>\n\n  <ion-card>\n	  <ion-card-header>\n	  	Sample \n		</ion-card-header>\n		<ion-card-content>\n			Content\n		</ion-card-content>\n	  <ion-card-content style="height:50vh;">\n			\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			Sample\n		</ion-card-header>\n		<ion-card-content>\n			Content\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n\n<ion-footer style=" background-color: lightgray; text-align: center; justify-content: center; align-items: center;">\n	<ion-toolbar id="footer" transparent>\n		Footer:\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/kuhno92/Downloads/hiwi/nodejs-app-skeleton/server/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(336);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/kuhno92/Downloads/hiwi/nodejs-app-skeleton/server/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/kuhno92/Downloads/hiwi/nodejs-app-skeleton/server/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 202,
	"./af.js": 202,
	"./ar": 203,
	"./ar-dz": 204,
	"./ar-dz.js": 204,
	"./ar-kw": 205,
	"./ar-kw.js": 205,
	"./ar-ly": 206,
	"./ar-ly.js": 206,
	"./ar-ma": 207,
	"./ar-ma.js": 207,
	"./ar-sa": 208,
	"./ar-sa.js": 208,
	"./ar-tn": 209,
	"./ar-tn.js": 209,
	"./ar.js": 203,
	"./az": 210,
	"./az.js": 210,
	"./be": 211,
	"./be.js": 211,
	"./bg": 212,
	"./bg.js": 212,
	"./bn": 213,
	"./bn.js": 213,
	"./bo": 214,
	"./bo.js": 214,
	"./br": 215,
	"./br.js": 215,
	"./bs": 216,
	"./bs.js": 216,
	"./ca": 217,
	"./ca.js": 217,
	"./cs": 218,
	"./cs.js": 218,
	"./cv": 219,
	"./cv.js": 219,
	"./cy": 220,
	"./cy.js": 220,
	"./da": 221,
	"./da.js": 221,
	"./de": 222,
	"./de-at": 223,
	"./de-at.js": 223,
	"./de-ch": 224,
	"./de-ch.js": 224,
	"./de.js": 222,
	"./dv": 225,
	"./dv.js": 225,
	"./el": 226,
	"./el.js": 226,
	"./en-au": 227,
	"./en-au.js": 227,
	"./en-ca": 228,
	"./en-ca.js": 228,
	"./en-gb": 229,
	"./en-gb.js": 229,
	"./en-ie": 230,
	"./en-ie.js": 230,
	"./en-nz": 231,
	"./en-nz.js": 231,
	"./eo": 232,
	"./eo.js": 232,
	"./es": 233,
	"./es-do": 234,
	"./es-do.js": 234,
	"./es.js": 233,
	"./et": 235,
	"./et.js": 235,
	"./eu": 236,
	"./eu.js": 236,
	"./fa": 237,
	"./fa.js": 237,
	"./fi": 238,
	"./fi.js": 238,
	"./fo": 239,
	"./fo.js": 239,
	"./fr": 240,
	"./fr-ca": 241,
	"./fr-ca.js": 241,
	"./fr-ch": 242,
	"./fr-ch.js": 242,
	"./fr.js": 240,
	"./fy": 243,
	"./fy.js": 243,
	"./gd": 244,
	"./gd.js": 244,
	"./gl": 245,
	"./gl.js": 245,
	"./gom-latn": 246,
	"./gom-latn.js": 246,
	"./he": 247,
	"./he.js": 247,
	"./hi": 248,
	"./hi.js": 248,
	"./hr": 249,
	"./hr.js": 249,
	"./hu": 250,
	"./hu.js": 250,
	"./hy-am": 251,
	"./hy-am.js": 251,
	"./id": 252,
	"./id.js": 252,
	"./is": 253,
	"./is.js": 253,
	"./it": 254,
	"./it.js": 254,
	"./ja": 255,
	"./ja.js": 255,
	"./jv": 256,
	"./jv.js": 256,
	"./ka": 257,
	"./ka.js": 257,
	"./kk": 258,
	"./kk.js": 258,
	"./km": 259,
	"./km.js": 259,
	"./kn": 260,
	"./kn.js": 260,
	"./ko": 261,
	"./ko.js": 261,
	"./ky": 262,
	"./ky.js": 262,
	"./lb": 263,
	"./lb.js": 263,
	"./lo": 264,
	"./lo.js": 264,
	"./lt": 265,
	"./lt.js": 265,
	"./lv": 266,
	"./lv.js": 266,
	"./me": 267,
	"./me.js": 267,
	"./mi": 268,
	"./mi.js": 268,
	"./mk": 269,
	"./mk.js": 269,
	"./ml": 270,
	"./ml.js": 270,
	"./mr": 271,
	"./mr.js": 271,
	"./ms": 272,
	"./ms-my": 273,
	"./ms-my.js": 273,
	"./ms.js": 272,
	"./my": 274,
	"./my.js": 274,
	"./nb": 275,
	"./nb.js": 275,
	"./ne": 276,
	"./ne.js": 276,
	"./nl": 277,
	"./nl-be": 278,
	"./nl-be.js": 278,
	"./nl.js": 277,
	"./nn": 279,
	"./nn.js": 279,
	"./pa-in": 280,
	"./pa-in.js": 280,
	"./pl": 281,
	"./pl.js": 281,
	"./pt": 282,
	"./pt-br": 283,
	"./pt-br.js": 283,
	"./pt.js": 282,
	"./ro": 284,
	"./ro.js": 284,
	"./ru": 285,
	"./ru.js": 285,
	"./sd": 286,
	"./sd.js": 286,
	"./se": 287,
	"./se.js": 287,
	"./si": 288,
	"./si.js": 288,
	"./sk": 289,
	"./sk.js": 289,
	"./sl": 290,
	"./sl.js": 290,
	"./sq": 291,
	"./sq.js": 291,
	"./sr": 292,
	"./sr-cyrl": 293,
	"./sr-cyrl.js": 293,
	"./sr.js": 292,
	"./ss": 294,
	"./ss.js": 294,
	"./sv": 295,
	"./sv.js": 295,
	"./sw": 296,
	"./sw.js": 296,
	"./ta": 297,
	"./ta.js": 297,
	"./te": 298,
	"./te.js": 298,
	"./tet": 299,
	"./tet.js": 299,
	"./th": 300,
	"./th.js": 300,
	"./tl-ph": 301,
	"./tl-ph.js": 301,
	"./tlh": 302,
	"./tlh.js": 302,
	"./tr": 303,
	"./tr.js": 303,
	"./tzl": 304,
	"./tzl.js": 304,
	"./tzm": 305,
	"./tzm-latn": 306,
	"./tzm-latn.js": 306,
	"./tzm.js": 305,
	"./uk": 307,
	"./uk.js": 307,
	"./ur": 308,
	"./ur.js": 308,
	"./uz": 309,
	"./uz-latn": 310,
	"./uz-latn.js": 310,
	"./uz.js": 309,
	"./vi": 311,
	"./vi.js": 311,
	"./x-pseudo": 312,
	"./x-pseudo.js": 312,
	"./yo": 313,
	"./yo.js": 313,
	"./zh-cn": 314,
	"./zh-cn.js": 314,
	"./zh-hk": 315,
	"./zh-hk.js": 315,
	"./zh-tw": 316,
	"./zh-tw.js": 316
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 417;

/***/ })

},[317]);
//# sourceMappingURL=main.js.map