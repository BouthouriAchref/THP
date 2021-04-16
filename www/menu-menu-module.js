(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "nedP");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "ylOD");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "QjfK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person\" (click)=\"onClick()\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "nedP":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-guard.service */ "MKys");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.page */ "ylOD");





const routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_4__["MenuPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | Pages-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ../Pages/home/home.module */ "zuTJ")).then(m => m.HomePageModule)
            },
            {
                path: 'map',
                loadChildren: () => Promise.all(/*! import() | Pages-map-map-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-map-map-module")]).then(__webpack_require__.bind(null, /*! ../Pages/map/map.module */ "DYjT")).then(m => m.MapPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | Pages-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("Pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../Pages/profile/profile.module */ "wjNX")).then(m => m.ProfilePageModule),
                canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
            },
            {
                path: '',
                redirectTo: '/menu/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "ylOD":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "QjfK");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "gZmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth-guard.service */ "MKys");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let MenuPage = class MenuPage {
    constructor(auth, router, alertController) {
        this.auth = auth;
        this.router = router;
        this.alertController = alertController;
        this.result = false;
    }
    onClick() {
        if (!this.auth.canActivate()) {
            this.showAlert("You need to SignIn");
        }
        else {
            this.router.navigate(['menu/profile']);
        }
    }
    showAlert(msg) {
        let alert = this.alertController.create({
            message: msg,
            header: 'Error',
            buttons: [
                { text: 'Annuler'
                },
                { text: 'SignIn',
                    handler: data => {
                        this.router.navigate(['login']);
                    }
                }
            ]
        });
        alert.then(alert => alert.present());
    }
};
MenuPage.ctorParameters = () => [
    { type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map