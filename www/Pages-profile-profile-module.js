(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-profile-profile-module"],{

/***/ "Aso2":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    findUserById(id) {
        return this.http.get(`${this.url}/api/Auth/user/${id}`);
    }
    updateAvatar(id) {
        return this.http.put(`${this.url}/api/Auth/user/upload/`, id);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "WB7l":
/*!***********************************************!*\
  !*** ./src/app/Pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "qzha");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "wVWf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "WXJz");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/images.service */ "lA0O");









const ID_USER = 'id';
let ProfilePage = class ProfilePage {
    constructor(profile, helper, router, route, imagesService, storage) {
        this.profile = profile;
        this.helper = helper;
        this.router = router;
        this.route = route;
        this.imagesService = imagesService;
        this.storage = storage;
        this.sliderConfig = {
            centeredSlides: true,
            spaceBetween: -60,
            slidesPerView: 1.1,
        };
    }
    ngOnInit() {
        // this.id = this.route.params.subscribe( params =>{
        this.storage.get(ID_USER).then((res) => {
            console.log(res);
            this.profile.findUserById(res).subscribe((user) => {
                this.USER = user;
                console.log(this.USER);
            });
            // console.log(this.profile.findUserById(params['id']))
            //});
        });
        // this.imagesService.getImage("60741f9d64d6491320264873").subscribe( (res) => {
        //   console.log('avatar',res);
        // })
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_images_service__WEBPACK_IMPORTED_MODULE_8__["ImagesService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "gPNf":
/*!*********************************************************!*\
  !*** ./src/app/Pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "WB7l");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "qzha":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-item lines=\"Categories\">\n    <ion-buttons>\n      <ion-button routerLink=\"/menu/home\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-label>\n      <h1></h1>\n    </ion-label>\n  </ion-item>\n</ion-header>\n<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <div style=\"background:url('../../../assets/museum.jpg'),rgb(0 0 0 / 50%);\" class=\"couverture\">\n      <!-- <div style=\"background:url('../../../assets/{{profileImg.name}}'),rgb(0 0 0 / 50%);\" class=\"couverture\"> -->\n      </div>\n    <div class=\"flex\">\n      <div class=\"box-border\">\n        <div class=\"border-white\">\n          <div class=\"img-box\">\n            \n            <img src=\"../../assets/taher.jpg\">\n          </div>\n        </div>\n      </div>\n      <div class=\"abs\">\n        <br><br>\n        <ion-button shape=\"round\" routerLink=\"/edit-profile\">Edit your profile</ion-button>\n      </div>\n    </div>\n  </ion-header>\n  <br><br><br>\n  <div class=\"ion-padding wrapper\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-label>\n        <br>\n        <h1></h1>\n        <h3>\n          <ion-icon name=\"person-circle-outline\"></ion-icon> {{USER?.fullname}}\n        </h3>\n        <h3>\n          <ion-icon name=\"calendar-number-outline\"></ion-icon> Born September 7, 1995\n        </h3>\n      </ion-label>\n      <ion-row class=\"ion-align-items-baseline\">\n        <ion-col size=\"6\">\n          <h4 class=\"title\">\n            My Favories\n          </h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"sliderConfig\">\n          <ion-slide>\n            <ion-card class=\"card\">\n              <ion-card-content class=\"ion-text-left\">\n                <div class=\"img-wrapper\">\n                  <ion-img src=\"../../assets/museum.jpg\"></ion-img>\n                </div>\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\n                <ion-card-subtitle>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-slide>\n          <ion-slide>\n            <ion-card class=\"card\">\n              <ion-card-content class=\"ion-text-left\">\n                <div class=\"img-wrapper\">\n                  <ion-img src=\"../../assets/museum.jpg\"></ion-img>\n                </div>\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\n                <ion-card-subtitle>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"ion-padding wrapper\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-baseline\">\n        <ion-col size=\"6\">\n          <h4 class=\"title\">\n            My Places\n          </h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"sliderConfig\">\n          <ion-slide>\n            <ion-card class=\"card\">\n              <ion-card-content class=\"ion-text-left\">\n                <div class=\"img-wrapper\">\n                  <ion-img src=\"../../assets/museum.jpg\"></ion-img>\n                </div>\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\n                <ion-card-subtitle>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-slide>\n          <ion-slide>\n            <ion-card class=\"card\">\n              <ion-card-content class=\"ion-text-left\">\n                <div class=\"img-wrapper\">\n                  <ion-img src=\"../../assets/museum.jpg\"></ion-img>\n                </div>\n                <ion-card-title class=\"title\">Some Awesome Dish Title</ion-card-title>\n                <ion-card-subtitle>Some description here</ion-card-subtitle>\n                <ion-card-subtitle>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br>\n  <ion-button expand=\"block\">creat a new place</ion-button>\n</ion-content>");

/***/ }),

/***/ "wVWf":
/*!*************************************************!*\
  !*** ./src/app/Pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f8f8fa;\n}\n\n.header {\n  height: 110px;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: 10px;\n}\n\n.header h2 {\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 90px;\n  width: 90px;\n}\n\n.border-white {\n  border: white solid 3px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 4px solid #ff3838;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: right;\n  margin-top: -30px;\n  margin-left: 20px;\n  margin-bottom: -72px;\n}\n\n.abs {\n  margin-left: 60px;\n}\n\n.ionicon {\n  stroke: currentcolor;\n  color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.card {\n  margin: 0;\n  margin-right: 30px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n\n.couverture {\n  min-height: 110px;\n  height: 100%;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFLSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhOOztBQU1JO0VBQ0UsZ0JBQUE7QUFKTjs7QUFXQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QUFSSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxuICB9XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLWJ1cm47XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmhlYWRlciBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcclxufVxyXG5cclxuLmZvbGxvd2luZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9sbG93aW5ncyBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW1nLWJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItd2hpdGUge1xyXG4gICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItYmx1ZSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmYzODM4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNzJweDtcclxuXHJcbn1cclxuXHJcbi5hYnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7ICAgXHJcbn1cclxuXHJcbi5pb25pY29uIHtcclxuICAgIHN0cm9rZTogY3VycmVudGNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAuaW1nLXdyYXBwZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZjI5OTRhO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDo2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4uY291dmVydHVyZXtcclxuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "wjNX":
/*!*************************************************!*\
  !*** ./src/app/Pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "WB7l");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-routing.module */ "gPNf");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"] }]),
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfilePageRoutingModule"],
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-profile-profile-module.js.map