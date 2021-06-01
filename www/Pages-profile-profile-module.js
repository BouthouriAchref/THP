(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-profile-profile-module"],{

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
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var src_app_services_images_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/images.service */ "lA0O");
/* harmony import */ var src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/fb.service */ "SLMv");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_place_create_place_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../create-place/create-place.page */ "nZuu");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/place.service */ "Ome2");














const ID_USER = 'id';
let ProfilePage = class ProfilePage {
    constructor(Auth, profile, helper, router, route, imagesService, storage, fb, modalController, alertController, placeService) {
        this.Auth = Auth;
        this.profile = profile;
        this.helper = helper;
        this.router = router;
        this.route = route;
        this.imagesService = imagesService;
        this.storage = storage;
        this.fb = fb;
        this.modalController = modalController;
        this.alertController = alertController;
        this.placeService = placeService;
        this.ID_USER = 'id';
        this.birthday = "Born";
        this.sliderConfig = {
            centeredSlides: true,
            spaceBetween: -40,
            slidesPerView: 1.1,
        };
        this.placeService.PlaceSubjectEvent.subscribe(res => {
            if (res) {
                this.storage.get(this.ID_USER).then((res) => {
                    //console.log('res',res)
                    this.profile.findUserById(res).subscribe((user) => {
                        this.USER = user;
                    });
                });
            }
        });
    }
    ngOnInit() {
        this.storage.get(this.ID_USER).then((res) => {
            //console.log('res',res)
            this.profile.findUserById(res).subscribe((user) => {
                this.USER = user;
                //console.log(this.USER);
            });
        });
    }
    Logout() {
        console.log(this.USER.IDF);
        if (!this.USER.IDF) {
            this.Auth.logout();
        }
        else {
            this.fb.logoutFacebook();
        }
    }
    selectPlace(id) {
        this.router.navigate(['/place', { id }]).then();
    }
    addPlace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _create_place_create_place_page__WEBPACK_IMPORTED_MODULE_12__["CreatePlacePage"],
                cssClass: 'dialog-modal',
                componentProps: {
                    'id': "1",
                }
            });
            return yield modal.present();
        });
    }
    createPlace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Create a new Place',
                message: 'Do you want to create a new place ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Yes',
                        handler: data => {
                            this.addPlace();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_images_service__WEBPACK_IMPORTED_MODULE_8__["ImagesService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_9__["FbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_13__["PlaceService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]>\n    <div class=\"header\">\n        <ion-buttons class=\"space-between\">\n            <ion-button style=\"color: white;\" routerLink=\"/menu/home\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <h2>{{USER?.fullname}}</h2>\n\n        <div class=\"space-between\">\n            <div class=\"followings\">\n                <ion-buttons>\n                    <ion-button style=\"width: 60px; height: 60px; \" routerLink=\"/edit-profile\">\n                        <ion-icon style='width: 70px; height: 70px; font-size: 34px; color: #f8f8fa' name=\"create\" slot=\"icon-only\">\n                        </ion-icon>\n                    </ion-button>\n                </ion-buttons>\n                <p>Edit Profile</p>\n            </div>\n\n            <div class=\"followings\">\n                <ion-buttons>\n                    <ion-button style=\"width: 60px; height: 60px; \" (click)=\"Logout()\" routerLink=\"/menu/home\">\n                        <ion-icon style='width: 70px; height: 70px; font-size: 34px; color: #f8f8fa' name=\"log-out\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n                <p>Log Out</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"flex\">\n        <div class=\"border-red\">\n            <div class=\"border-white\">\n                <div class=\"img-box\">\n                    <img [src]=\"USER?.Avatar?.Path\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ion-padding wrapper\" id=\"Crendential\">\n        <ion-grid class=\"ion-no-padding\">\n            <ion-label>\n                <ion-row style=\"margin-bottom: 20px;\">\n                    <ion-col size=\"6\">\n                        <h3>\n                            <ion-icon name=\"person-circle-outline\"></ion-icon> {{USER?.fullname}}\n                        </h3>\n                        <h3 *ngIf=\"USER?.Birthday\">\n                            <ion-icon name=\"calendar-number-outline\"></ion-icon> Born {{USER?.Birthday}}\n                        </h3>\n                        <h3 *ngIf=\"USER?.Gender\">\n                            <ion-icon name=\"transgender-outline\"></ion-icon> {{USER?.Gender}}\n                        </h3>\n                        <h3 *ngIf=\"USER?.Nationalite\">\n                            <ion-icon name=\"globe-outline\"></ion-icon> From {{USER?.Nationalite}}\n                        </h3>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <div class=\"followings\" style=\"margin-left: 51px; margin-top: -25px;\">\n                            <ion-buttons>\n                                <ion-button style=\"width: 60px; height: 60px;\" (click)=\"createPlace()\">\n                                    <ion-icon style='width: 70px; height: 70px; font-size: 34px; color: #ed1c24' name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n                                </ion-button>\n                            </ion-buttons>\n                            <p style=\"color: #ed1c24; font-size: 10px;\">Create a new place</p>\n                        </div>\n\n                    </ion-col>\n                </ion-row>\n\n            </ion-label>\n            <ion-row class=\"ion-align-items-baseline\" *ngIf=\"USER?.FavoritesPlaces[0]\" style=\"padding-bottom: 0px;\">\n                <ion-col size=\"6\">\n                    <h4 class=\"title\">\n                        My Favories\n                    </h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides [options]=\"sliderConfig\" style=\"margin-bottom: 20px;\">\n                    <ion-slide *ngFor=\"let place of USER?.FavoritesPlaces\">\n                        <ion-card class=\"card\">\n                            <ion-card-content class=\"ion-text-left\" (click)=\"selectPlace(place._id)\">\n                                <div class=\"img-wrapper\">\n                                    <ion-img *ngIf=\"place.Attachement.length>0\" [src]=\"place?.Attachement[0]?.Path\"></ion-img>\n                                </div>\n                                <ion-card-title class=\"title\">{{place.Name}}</ion-card-title>\n                                <ion-card-subtitle>{{place.Description.substring(0, 100)}}</ion-card-subtitle>\n                                <app-notice [note]=\"place.Notice\"></app-notice>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div class=\"ion-padding wrapper\" *ngIf=\"USER?.Places[0]\" style=\"padding-bottom: 0px; padding-top: 0px;\">\n        <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-baseline\">\n                <ion-col size=\"6\">\n                    <h4 class=\"title\">\n                        My Places\n                    </h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides [options]=\"sliderConfig\" style=\"margin-bottom: 20px;\">\n                    <ion-slide *ngFor=\"let place of USER?.Places\">\n                        <ion-card class=\"card\">\n                            <ion-card-content class=\"ion-text-left\" (click)=\"selectPlace(place._id)\">\n                                <div class=\"img-wrapper\">\n                                    <ion-img *ngIf=\"place.Attachement.length>0\" [src]=\"place.Attachement[0].Path\"></ion-img>\n                                </div>\n                                <ion-card-title class=\"title\">{{place.Name}}</ion-card-title>\n                                <ion-card-subtitle>{{place.Description.substring(0, 100)}}</ion-card-subtitle>\n                                <app-notice [note]=\"place.Notice\"></app-notice>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"USER?.FavoritesPlaces.length==0\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides>\n                    <ion-slide>\n                        <ion-card class=\"card\" style=\"background-color: #f0f2f5;\">\n                            <ion-card-content class=\"ion-text-left\">\n                                <ion-card-title class=\"title\">\n                                    <div class=\"ion-padding wrapper\" *ngIf=\"USER?.FavoritesPlaces.length==0\" style=\"text-align: center; font-variant: all-small-caps;\">\n                                        <ion-grid class=\"ion-no-padding\">\n                                            <ion-row class=\"ion-align-items-baseline\">\n                                                <ion-col size=\"12\">\n                                                    <h4 class=\"title\">\n                                                        You Don't Have Any Favorite Place\n                                                    </h4>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </div>\n                                </ion-card-title>\n                                <ion-card-subtitle></ion-card-subtitle>\n                                <ion-card-subtitle></ion-card-subtitle>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"USER?.Places.length==0\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides>\n                    <ion-slide>\n                        <ion-card class=\"card\" style=\"background-color: #f0f2f5;\">\n                            <ion-card-content class=\"ion-text-left\">\n                                <ion-card-title class=\"title\">\n                                    <div class=\"ion-padding wrapper\" *ngIf=\"USER?.Places.length==0\" style=\"text-align: center; font-variant: all-small-caps;\">\n                                        <ion-grid class=\"ion-no-padding\">\n                                            <ion-row class=\"ion-align-items-baseline\">\n                                                <ion-col size=\"12\">\n                                                    <h4 class=\"title\">\n                                                        You Don't Have Any Place\n                                                    </h4>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </div>\n                                </ion-card-title>\n                                <ion-card-subtitle></ion-card-subtitle>\n                                <ion-card-subtitle></ion-card-subtitle>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "wVWf":
/*!*************************************************!*\
  !*** ./src/app/Pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f8f8fa;\n}\n\n.header {\n  height: 206px;\n  background-color: #ed1c24;\n  width: 100%;\n  padding-top: 1px;\n}\n\n.header h2 {\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: -2px 0px 0px 0px;\n  font-size: 15px;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 130px;\n  width: 130px;\n}\n\n.border-white {\n  border: white solid 4px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-red {\n  border: 7px solid #ff5757;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  margin-top: -76px;\n}\n\n.abs {\n  margin-left: 60px;\n}\n\n.ionicon {\n  stroke: currentcolor;\n  color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.card {\n  margin-right: 30px;\n  width: 80%;\n  margin-bottom: 10px;\n  border-radius: 14px;\n}\n\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 140px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n\n#Crendential {\n  margin-top: -20px;\n  padding-bottom: 0px;\n}\n\n.couverture {\n  min-height: 110px;\n  height: 100%;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFTQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFnQkE7RUFDSSxpQkFBQTtBQWJKOztBQWdCQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQWJKOztBQWdCQTtFQUNJLGVBQUE7QUFiSjs7QUFnQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBaUJJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWRSOztBQWdCSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQWRSOztBQWdCSTtFQUNJLGdCQUFBO0FBZFI7O0FBa0JBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QUFmSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDIwNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkMWMyNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLy8gLmhlYWRlciB7XHJcbi8vICAgICBoZWlnaHQ6IDExMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4vLyB9XHJcbi5oZWFkZXIgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3dpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvbGxvd2luZ3MgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IC0ycHggMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5pbWctYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLXdoaXRlIHtcclxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uYm9yZGVyLXJlZCB7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCAjZmY1NzU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzZweDtcclxufVxyXG5cclxuLy8gLmZsZXgge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTcycHg7XHJcbi8vIH1cclxuLmFicyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuLmlvbmljb24ge1xyXG4gICAgc3Ryb2tlOiBjdXJyZW50Y29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAuaW1nLXdyYXBwZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2YyOTk0YTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNDcmVuZGVudGlhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jb3V2ZXJ0dXJlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */");

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
/* harmony import */ var src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Components/notice/notice.module */ "qwbt");










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
            src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_9__["NoticeModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-profile-profile-module.js.map