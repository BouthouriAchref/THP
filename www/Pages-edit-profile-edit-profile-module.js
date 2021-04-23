(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-edit-profile-edit-profile-module"],{

/***/ "/R3l":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "ly2E");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "IVoF":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-item lines=\"Categories\">\n    <ion-buttons>\n      <ion-button routerLink=\"/menu/profile\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-label>\n      <h1 style=\"font-size: 21px;\">Edit your profile</h1>\n    </ion-label>\n    <div class=\"abs\">\n      <ion-button shape=\"round\">Save</ion-button>\n    </div>\n  </ion-item>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n    integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</ion-header>\n<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <div style=\"background:url('../../../assets/museum.jpg'),rgb(0 0 0 / 50%);\" class=\"couverture\">\n    <!-- <div style=\"background:url('../../../assets/{{profileImg.name}}'),rgb(0 0 0 / 50%);\" class=\"couverture\"> -->\n    </div>\n    <div class=\"flex\">\n      <div class=\"box-border\">\n        <div class=\"border-white\">\n          <ion-buttons class=\"i3\">\n            <ion-button (click)=\"presentActionSheet()\">\n              <ion-icon slot=\"icon-only\" name=\"camera-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-buttons class=\"i2\">\n            <ion-button>\n              <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <div class=\"img-box\">\n            <ion-buttons class=\"i1\">\n              <ion-button (click)=\"presentActionSheet()\">\n                <ion-icon  slot=\"icon-only\" name=\"camera-outline\"><input type=\"file\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <div>\n              <img src=\"../../assets/taher.jpg\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-header>\n  <br><br><br>\n  <div class=\"ion-padding wrapper\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-label>\n        <br>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Update your name</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\">Update your last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Last name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formGroupExampleInput2\">Date of Birth</label>\n            <input class=\"form-control\" type=\"date\" id=\"example-date-input\">\n          </div>\n        </form>\n      </ion-label>\n    </ion-grid>\n  </div>\n  <br>\n</ion-content>");

/***/ }),

/***/ "NmZj":
/*!***********************************************************!*\
  !*** ./src/app/Pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f8f8fa;\n}\n\n.header {\n  height: 110px;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: 10px;\n}\n\n.header h2 {\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 90px;\n  width: 90px;\n  position: relative;\n}\n\n.border-white {\n  border: white solid 3px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 4px solid #ff3838;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: right;\n  margin-top: -30px;\n  margin-left: 20px;\n  margin-bottom: -72px;\n}\n\n.abs {\n  margin-left: 60px;\n}\n\n.ionicon {\n  stroke: currentcolor;\n  color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.card {\n  margin: 0;\n  margin-right: 30px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n\n.i1 {\n  color: white;\n  position: absolute;\n  top: 27%;\n  left: 23%;\n  font-size: 30px;\n}\n\n.i2 {\n  color: white;\n  position: absolute;\n  top: 27%;\n  left: 60%;\n  font-size: 30px;\n}\n\n.i3 {\n  color: white;\n  position: absolute;\n  top: 27%;\n  left: 30%;\n  font-size: 30px;\n}\n\n.couverture {\n  min-height: 110px;\n  height: 100%;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FBQUo7O0FBTUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFRQTtFQUNJLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7QUFMSjs7QUFRQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBU0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTk47O0FBU0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFQTjs7QUFVSTtFQUNFLGdCQUFBO0FBUk47O0FBYUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFWSjs7QUFhQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBVko7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FBVkoiLCJmaWxlIjoiZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxuICB9XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAvL2JhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvbXVzZXVtLmpwZycpLHJnYigwIDAgMCAvIDUwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLWJ1cm47XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcblxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmhlYWRlciBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcclxufVxyXG5cclxuLmZvbGxvd2luZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9sbG93aW5ncyBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW1nLWJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxufVxyXG5cclxuLmJvcmRlci13aGl0ZSB7XHJcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmJvcmRlci1ibHVlIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZjM4Mzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC03MnB4O1xyXG5cclxufVxyXG5cclxuLmFicyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDsgICBcclxufVxyXG5cclxuLmlvbmljb24ge1xyXG4gICAgc3Ryb2tlOiBjdXJyZW50Y29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNmMjk5NGE7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOjZweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG4uaTEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNyU7XHJcbiAgICBsZWZ0OiAyMyU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5pMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI3JTtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmkzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjclO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uY291dmVydHVyZXtcclxuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "T0NH":
/*!***********************************************************!*\
  !*** ./src/app/Pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "/R3l");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "ly2E");







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "ly2E":
/*!*********************************************************!*\
  !*** ./src/app/Pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "IVoF");
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile.page.scss */ "NmZj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/images.service */ "lA0O");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "WXJz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








const ID_USER = 'id';
let EditProfilePage = class EditProfilePage {
    constructor(navCtrl, camera, actionSheetCtrl, imagesService, modalcontroller, storage) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagesService = imagesService;
        this.modalcontroller = modalcontroller;
        this.storage = storage;
        this.images = [];
    }
    ngOnInit() {
        this.storage.get(ID_USER).then((res) => {
            this.imagesService.getImage(res).subscribe((res) => {
                console.log('avatar', res);
            });
        });
    }
    openImage(img) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = this.modalcontroller.create(img);
            (yield modal).present();
        });
    }
    // reloadImages(){
    //   this.imagesService.getImage().subscribe(data =>{
    //     this.images = data;
    //   })
    // }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let actionSheet = this.actionSheetCtrl.create({
                //title: 'Modify your album',
                buttons: [
                    {
                        text: 'Load from Source',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }
                ]
            });
            (yield actionSheet).present();
        });
    }
    takePicture(sourceType) {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imagePath) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = this.modalcontroller.create(imagePath);
            (yield modal).present();
            (yield modal).onDidDismiss()
                .then((data) => {
                // this.reloadImages();
            });
        }));
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: src_app_services_images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=Pages-edit-profile-edit-profile-module.js.map