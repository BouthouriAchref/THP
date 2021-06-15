(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\TunisiaHiddenPlaces\THP\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // firebaseConfig : {
    //   apiKey: "AIzaSyBUmTSn30qPG-MCeTxLg_1QGOqlObRsIXE",
    //   authDomain: "tunisah.firebaseapp.com",
    //   projectId: "tunisah",
    //   storageBucket: "tunisah.appspot.com",
    //   messagingSenderId: "74025432809",
    //   appId: "1:74025432809:web:3f00f35352ea22e2f3e278",
    //   measurementId: "G-DLXHE7G8YQ"
    // },
    url: 'https://tunisian-hidden-places.herokuapp.com'
    //url: 'http://localhost:3000'
    //url: 'http://192.162.70.235:3003'
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

/***/ "FY6/":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/notice/notice.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card-subtitle>\n  <ion-icon name=\"star\" *ngFor=\"let n of noteArray\"></ion-icon>\n  <ion-icon name=\"star-outline\" *ngFor=\"let n of noteArray2\"></ion-icon>\n</ion-card-subtitle>\n");

/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _fb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fb.service */ "SLMv");




let AuthGuardService = class AuthGuardService {
    constructor(auth, fb) {
        this.auth = auth;
        this.fb = fb;
    }
    canActivate() {
        // console.log('auth',this.auth.isAuthenticated())
        // console.log('fb',this.fb.isAuthenticated())
        return (this.auth.isAuthenticated() || this.fb.isAuthenticated());
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _fb_service__WEBPACK_IMPORTED_MODULE_3__["FbService"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "S341":
/*!*********************************************************!*\
  !*** ./src/app/Components/notice/notice.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\nion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFETjs7QUFJSTtFQUNFLGdCQUFBO0FBRE4iLCJmaWxlIjoibm90aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZjI5OTRhO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDo2cHg7XHJcbiAgICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "SLMv":
/*!****************************************!*\
  !*** ./src/app/services/fb.service.ts ***!
  \****************************************/
/*! exports provided: FbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbService", function() { return FbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor-community/facebook-login */ "phR/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.service */ "lGQG");








Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_6__["registerWebPlugin"])(_capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLogin"]);



const TOKEN_KEY = 'access_token';
const ID_USER = 'id';
let FbService = class FbService {
    constructor(router, helper, storage, plt, http, auth) {
        this.router = router;
        this.helper = helper;
        this.storage = storage;
        this.plt = plt;
        this.http = http;
        this.auth = auth;
        this.user = null;
        this.token = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }
    checkToken() {
        this.storage.get(TOKEN_KEY).then(token => {
            if (token) {
                this.authenticationState.next(true);
            }
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    setupFbLogin() {
        if (Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["isPlatform"])('desktop')) {
            this.fbLogin = _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLogin"];
        }
        else {
            // Use the native implementation inside a real app!
            const { FacebookLogin } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
            this.fbLogin = FacebookLogin;
        }
    }
    loginFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const FACEBOOK_PERMISSIONS = ['email'];
            const result = yield this.fbLogin.login({ permissions: FACEBOOK_PERMISSIONS });
            //console.log('RESULT', result)
            //console.log('result',result.accessToken.token)
            yield this.storage.set(TOKEN_KEY, result.accessToken.token);
            this.authenticationState.next(true);
            if (result.accessToken && result.accessToken.userId) {
                this.token = result.accessToken;
                this.loadUserData();
            }
            else if (result.accessToken && !result.accessToken.userId) {
                // Web only gets the token but not the user ID
                // Directly call get token to retrieve it now
                this.getCurrentToken();
            }
            else {
                // Login failed
                console.log('Login failed');
            }
        });
    }
    getCurrentToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.fbLogin.getCurrentAccessToken();
            if (result.accessToken) {
                this.token = result.accessToken;
                this.loadUserData();
            }
            else {
                // Not logged in.
            }
        });
    }
    loadUserData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
            this.http.get(url).subscribe(res => {
                //console.log('user:', res)
                this.user = res;
                this.auth.registerFb(this.user).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.storage.set(ID_USER, response.user._id);
                    this.router.navigate(['menu/profile']);
                    //console.log('awaited getid', await this.storage.get(ID_USER));
                    //console.log('user in data base',response);
                }));
            });
        });
    }
    logoutFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.remove(TOKEN_KEY);
            //console.log('this.storage.get(ID_USER);', await this.storage.get(ID_USER))
            yield this.storage.remove(ID_USER);
            //console.log('this.storage.get(TOKEN_KEY));', await this.storage.get(TOKEN_KEY))
            yield this.storage.clear();
            this.authenticationState.next(false);
            yield this.fbLogin.logout();
            this.user = null;
            this.token = null;
        });
    }
};
FbService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }
];
FbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FbService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");











let AppComponent = class AppComponent {
    //rootPage:any = 'HomePage'
    constructor(storage, platform, auth, router, splashScreen, statusBar, authguard) {
        this.storage = storage;
        this.platform = platform;
        this.auth = auth;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authguard = authguard;
        this.storage.create();
        this.storage.clear();
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            if (this.authguard.canActivate()) {
                this.router.navigate(['menu/profile']);
            }
            else {
                this.router.navigate(['menu/home']);
            }
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            yield this.storage.create();
            yield this.storage.clear();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtOptionsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "G769");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _services_images_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/images.service */ "lA0O");
/* harmony import */ var _Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/notice/notice.module */ "qwbt");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");









// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { environment } from '../environments/environment';












// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
function jwtOptionsFactory(storage) {
    return {
        tokenGetter: () => {
            return storage.get('access_token');
        },
        whiteListedDomains: ['localhost:3000']
    };
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_17__["NoticeModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtModule"].forRoot({
                jwtOptionsProvider: {
                    provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JWT_OPTIONS"],
                    useFactory: jwtOptionsFactory,
                    deps: [_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__["Storage"]]
                }
            })
            //FireBase
            // AngularFireModule.initializeApp(environment.firebaseConfig),
            // AngularFireAuthModule,
            // AngularFireDatabaseModule,
            // AngularFireStorageModule,
        ],
        providers: [
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_18__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_19__["StatusBar"],
            _services_images_service__WEBPACK_IMPORTED_MODULE_16__["ImagesService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_14__["FilePath"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransfer"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lA0O":
/*!********************************************!*\
  !*** ./src/app/services/images.service.ts ***!
  \********************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let ImagesService = class ImagesService {
    constructor(transfer, Http) {
        this.transfer = transfer;
        this.Http = Http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
    }
    getImage(id) {
        return this.Http.get(`${this.url}api/Auth/user/getAvatar/${id}`);
    }
    uploadImage(img, id) {
        var options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/from-data'
        };
        const FileTransfer = this.transfer.create();
        return FileTransfer.upload(img, `${this.url}/api/Auth/user/getAvatar/${id}`, options);
    }
};
ImagesService.ctorParameters = () => [
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ImagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ImagesService);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










const TOKEN_KEY = 'access_token';
const ID_USER = 'id';
let AuthService = class AuthService {
    constructor(router, http, helper, storage, plt, alertController) {
        this.router = router;
        this.http = http;
        this.helper = helper;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.user = null;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.plt.ready().then(() => {
            this.checkToken();
            //this.logout();
        });
    }
    checkToken() {
        this.storage.get(TOKEN_KEY).then(token => {
            if (token) {
                let decoded = this.helper.decodeToken(token);
                let isExpired = this.helper.isTokenExpired(token);
                if (!isExpired) {
                    this.user = decoded;
                    this.authenticationState.next(true);
                }
                else {
                    this.storage.remove(TOKEN_KEY);
                }
            }
        });
    }
    registerFb(credentials) {
        return this.http.post(`${this.url}/api/Auth/register/facebook`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(e => {
            this.showAlert(e.error.msg);
            throw new Error(e);
        }));
    }
    register(credentials) {
        return this.http.post(`${this.url}/api/Auth/register`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(e => {
            this.showAlert(e.error.msg);
            throw new Error(e);
        }));
    }
    login(credentials) {
        return this.http.post(`${this.url}/api/Auth/login`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // await this.storage.create();
            yield this.storage.set(ID_USER, res['id']);
            yield this.storage.set(TOKEN_KEY, res['token']);
            this.user = this.helper.decodeToken(res['token']);
            this.authenticationState.next(true);
            yield this.router.navigate(['menu/profile']);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(e => {
            this.showAlert(e.error.msg);
            throw new Error(e);
        }));
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.remove(ID_USER);
            //console.log('this.storage.get(ID_USER);', await this.storage.get(ID_USER))
            yield this.storage.remove(TOKEN_KEY);
            yield this.storage.clear();
            //console.log('this.storage.get(TOKEN_KEY));', await this.storage.get(TOKEN_KEY))
            this.authenticationState.next(false);
        });
    }
    getSpecialData() {
        return this.http.get(`${this.url}/api/Auth/special`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(e => {
            let status = e.status;
            if (status === 401) {
                this.showAlert('You are not authorized for this !');
                this.logout();
            }
            throw new Error(e);
        }));
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    showAlert(msg) {
        let alert = this.alertController.create({
            message: msg,
            header: 'Warning',
            buttons: ['OK']
        });
        alert.then(alert => alert.present());
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "qwbt":
/*!****************************************************!*\
  !*** ./src/app/Components/notice/notice.module.ts ***!
  \****************************************************/
/*! exports provided: NoticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeModule", function() { return NoticeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice.component */ "yiYx");





let NoticeModule = class NoticeModule {
};
NoticeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_notice_component__WEBPACK_IMPORTED_MODULE_4__["NoticeComponent"]],
        exports: [_notice_component__WEBPACK_IMPORTED_MODULE_4__["NoticeComponent"]]
    })
], NoticeModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ./menu/menu.module */ "19mU")).then(m => m.MenuPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-login-login-module */ "Pages-login-login-module").then(__webpack_require__.bind(null, /*! ./Pages/login/login.module */ "xCeV")).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-sign-up-sign-up-module */ "Pages-sign-up-sign-up-module").then(__webpack_require__.bind(null, /*! ./Pages/sign-up/sign-up.module */ "eglg")).then(m => m.SignUpPageModule)
    },
    {
        path: 'place',
        loadChildren: () => Promise.all(/*! import() | Pages-place-place-module */[__webpack_require__.e("default~Pages-map-map-module~Pages-place-place-module"), __webpack_require__.e("common"), __webpack_require__.e("Pages-place-place-module")]).then(__webpack_require__.bind(null, /*! ./Pages/place/place.module */ "/195")).then(m => m.PlacePageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() | Pages-edit-profile-edit-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./Pages/edit-profile/edit-profile.module */ "T0NH")).then(m => m.EditProfilePageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | Pages-profile-profile-module */[__webpack_require__.e("default~Pages-create-place-create-place-module~Pages-profile-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("Pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./Pages/profile/profile.module */ "wjNX")).then(m => m.ProfilePageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'rate',
        loadChildren: () => Promise.all(/*! import() | Pages-rate-rate-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-rate-rate-module")]).then(__webpack_require__.bind(null, /*! ./Pages/rate/rate.module */ "8eyD")).then(m => m.RatePageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'create-place',
        loadChildren: () => Promise.all(/*! import() | Pages-create-place-create-place-module */[__webpack_require__.e("default~Pages-create-place-create-place-module~Pages-profile-profile-module"), __webpack_require__.e("Pages-create-place-create-place-module")]).then(__webpack_require__.bind(null, /*! ./Pages/create-place/create-place.module */ "xICE")).then(m => m.CreatePlacePageModule),
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'place-category',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-place-category-place-category-module */ "Pages-place-category-place-category-module").then(__webpack_require__.bind(null, /*! ./Pages/place-category/place-category.module */ "k24j")).then(m => m.PlaceCategoryPageModule)
    },
    {
        path: 'category',
        loadChildren: () => __webpack_require__.e(/*! import() | Pages-category-category-module */ "Pages-category-category-module").then(__webpack_require__.bind(null, /*! ./Pages/category/category.module */ "4BXM")).then(m => m.CategoryPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yiYx":
/*!*******************************************************!*\
  !*** ./src/app/Components/notice/notice.component.ts ***!
  \*******************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notice.component.html */ "FY6/");
/* harmony import */ var _notice_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice.component.scss */ "S341");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NoticeComponent = class NoticeComponent {
    constructor() {
        this.noteArray = ['1', '2', '3', '4', '5'];
        this.noteArray2 = ['1', '2', '3', '4', '5'];
    }
    ngDoCheck() {
        //console.log('___',this.note)
        if (this.note > 0) {
            this.noteArray.length = this.note;
            this.noteArray2.length = (5 - this.note);
        }
        else {
            this.noteArray.length = 0;
            this.noteArray2.length = 5;
        }
    }
};
NoticeComponent.ctorParameters = () => [];
NoticeComponent.propDecorators = {
    note: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NoticeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notice',
        template: _raw_loader_notice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notice_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoticeComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map