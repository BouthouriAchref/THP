(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-place-place-module"],{

/***/ "/195":
/*!*********************************************!*\
  !*** ./src/app/Pages/place/place.module.ts ***!
  \*********************************************/
/*! exports provided: PlacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacePageModule", function() { return PlacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _place_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-routing.module */ "Xt0R");
/* harmony import */ var _place_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place.page */ "I4dV");







let PlacePageModule = class PlacePageModule {
};
PlacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _place_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlacePageRoutingModule"]
        ],
        declarations: [_place_page__WEBPACK_IMPORTED_MODULE_6__["PlacePage"]]
    })
], PlacePageModule);



/***/ }),

/***/ "I4dV":
/*!*******************************************!*\
  !*** ./src/app/Pages/place/place.page.ts ***!
  \*******************************************/
/*! exports provided: PlacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacePage", function() { return PlacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_place_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./place.page.html */ "yEDa");
/* harmony import */ var _place_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place.page.scss */ "gl2t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PlacePage = class PlacePage {
    constructor() { }
    ngOnInit() {
    }
};
PlacePage.ctorParameters = () => [];
PlacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-place',
        template: _raw_loader_place_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_place_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlacePage);



/***/ }),

/***/ "Xt0R":
/*!*****************************************************!*\
  !*** ./src/app/Pages/place/place-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PlacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacePageRoutingModule", function() { return PlacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _place_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place.page */ "I4dV");




const routes = [
    {
        path: '',
        component: _place_page__WEBPACK_IMPORTED_MODULE_3__["PlacePage"]
    }
];
let PlacePageRoutingModule = class PlacePageRoutingModule {
};
PlacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlacePageRoutingModule);



/***/ }),

/***/ "gl2t":
/*!*********************************************!*\
  !*** ./src/app/Pages/place/place.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f8f8fa;\n}\n\n.header {\n  height: 110px;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: 10px;\n}\n\n.header h2 {\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 90px;\n  width: 90px;\n}\n\n.border-white {\n  border: white solid 3px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 4px solid #ff3838;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: right;\n  margin-top: -30px;\n  margin-left: 20px;\n  margin-bottom: -72px;\n}\n\n.abs {\n  margin-left: 60px;\n}\n\n.ionicon {\n  stroke: currentcolor;\n  color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.card {\n  margin: 0;\n  margin-right: 30px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n\n.couverture {\n  min-height: 110px;\n  height: 100%;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47O0FBS0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFITjs7QUFNSTtFQUNFLGdCQUFBO0FBSk47O0FBV0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FBUkoiLCJmaWxlIjoicGxhY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmOGZhO1xyXG4gIH1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4uaGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uZm9sbG93aW5ncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb2xsb3dpbmdzIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLmJvcmRlci13aGl0ZSB7XHJcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmJvcmRlci1ibHVlIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZjM4Mzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC03MnB4O1xyXG5cclxufVxyXG5cclxuLmFicyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDsgICBcclxufVxyXG5cclxuLmlvbmljb24ge1xyXG4gICAgc3Ryb2tlOiBjdXJyZW50Y29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNmMjk5NGE7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOjZweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG5cclxuXHJcbi5jb3V2ZXJ0dXJle1xyXG4gICAgbWluLWhlaWdodDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLWJ1cm47XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "yEDa":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/place/place.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>place</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<ion-header class=\"ion-no-border\">\n  <ion-item lines=\"Categories\">\n    <ion-buttons>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-label>\n      <h1>Taher Robbana</h1>\n    </ion-label>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <div style=\"background:url('../../../assets/museum.jpg')\" class=\"couverture\">\n      <!-- <div style=\"background:url('../../../assets/{{profileImg.name}}'),rgb(0 0 0 / 50%);\" class=\"couverture\"> -->\n      </div>\n    <div class=\"flex\">\n      <!-- <div class=\"box-border\"> -->\n        <!-- <div class=\"border-white\"> -->\n          <!-- <div class=\"img-box\"> -->\n            \n            <ion-buttons class=\"i1\">\n              <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"heart-circle-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n\n            <button ion-button icon-start>\n              <ion-icon name=\"heart-circle-outline\"></ion-icon>\n            </button>\n          <!-- </div> -->\n        <!-- </div> -->\n      <!-- </div> -->\n     \n    </div>\n  </ion-header>\n  <br><br><br>\n  <div class=\"ion-padding wrapper\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-label>\n        <br>\n        <h1>Taher Robbana</h1>\n        \n      </ion-label>\n    </ion-grid>\n  </div>\n  \n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Pages-place-place-module.js.map