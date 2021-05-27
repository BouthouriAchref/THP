(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-create-place-create-place-module"],{

/***/ "bMax":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/create-place/create-place-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreatePlacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlacePageRoutingModule", function() { return CreatePlacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_place_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-place.page */ "nZuu");




const routes = [
    {
        path: '',
        component: _create_place_page__WEBPACK_IMPORTED_MODULE_3__["CreatePlacePage"]
    }
];
let CreatePlacePageRoutingModule = class CreatePlacePageRoutingModule {
};
CreatePlacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatePlacePageRoutingModule);



/***/ }),

/***/ "xICE":
/*!***********************************************************!*\
  !*** ./src/app/Pages/create-place/create-place.module.ts ***!
  \***********************************************************/
/*! exports provided: CreatePlacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlacePageModule", function() { return CreatePlacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_place_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-place-routing.module */ "bMax");
/* harmony import */ var _create_place_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-place.page */ "nZuu");







let CreatePlacePageModule = class CreatePlacePageModule {
};
CreatePlacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_place_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePlacePageRoutingModule"]
        ],
        declarations: [_create_place_page__WEBPACK_IMPORTED_MODULE_6__["CreatePlacePage"]]
    })
], CreatePlacePageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-create-place-create-place-module.js.map