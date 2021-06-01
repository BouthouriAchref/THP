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
/* harmony import */ var src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/notice/notice.module */ "qwbt");








let PlacePageModule = class PlacePageModule {
};
PlacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _place_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlacePageRoutingModule"],
            src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_7__["NoticeModule"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fb.service */ "SLMv");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/place.service */ "Ome2");
/* harmony import */ var _rate_rate_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rate/rate.page */ "6Tfl");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");













const ID_USER = 'id';
let PlacePage = class PlacePage {
    constructor(modalController, alertController, route, placeService, fb, Auth, storage, profileService, router, socialSharing) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.route = route;
        this.placeService = placeService;
        this.fb = fb;
        this.Auth = Auth;
        this.storage = storage;
        this.profileService = profileService;
        this.router = router;
        this.socialSharing = socialSharing;
        this.isSeeMore = false;
        this.seeMore = false;
        this.hobbies = ["camping", "camping", "camping", "camping", "campinglife", "campingwithdogs", "campingtrip", "campingvibes"];
        this.sliderConfig = {
            centeredSlides: true,
            spaceBetween: -60,
            slidesPerView: 1.1,
        };
        this.placeService.PlaceSubjectEvent.subscribe(res => {
            if (res) {
                this.route.params.subscribe(params => {
                    this.id = params['id'];
                    //console.log('id', this.id)
                });
                this.placeService.getPlaceById(this.id).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (res.success) {
                        this.Place = yield res.data;
                    }
                }));
            }
        });
    }
    ngOnInit() {
        //console.log(this.like)
        this.route.params.subscribe(params => {
            this.id = params['id'];
            //console.log('id', this.id)
        });
        this.placeService.getPlaceById(this.id).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res.success) {
                this.Place = yield res.data;
                this.getUser();
                //console.log('____', this.Place)
            }
            //console.log('Place', this.Place)
        }));
    }
    socialShare() {
        if (this.canActivatefb()) {
            var options = {
                message: 'TunisianHiddenPlaces',
                url: this.Place.Attachement[0].Path
            };
            this.socialSharing.shareWithOptions(options);
        }
        else {
            this.showAlertt("You need to SignIn");
        }
    }
    getUser() {
        if (this.canActivate() || this.canActivatefb()) {
            this.storage.get(ID_USER).then((res) => {
                this.profileService.findUserById(res).subscribe((response) => {
                    for (let place of response.FavoritesPlaces) {
                        //console.log('----------',place._id)
                        if (this.Place._id == place._id) {
                            this.like = true;
                        }
                    }
                });
            });
        }
    }
    addRate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _rate_rate_page__WEBPACK_IMPORTED_MODULE_10__["RatePage"],
                cssClass: 'dialog-modal2',
                componentProps: {
                    "id": this.Place._id,
                }
            });
            return yield modal.present();
        });
    }
    Like(id) {
        if (this.canActivate() || this.canActivatefb()) {
            this.like = !this.like;
            if (this.like) {
                this.storage.get(ID_USER).then((res) => {
                    this.placeService.addPlaceToFavorite(id, res);
                });
            }
            else {
                this.storage.get(ID_USER).then((res) => {
                    this.placeService.removePlaceToFavorite(id, res);
                });
            }
        }
        else {
            this.showAlertt("You need to SignIn");
        }
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.canActivate() || this.canActivatefb()) {
                const alert = yield this.alertController.create({
                    header: 'Rate this Place',
                    message: 'If you are loving (or even hating) this place, an honest rating would really help to defame the place',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: data => {
                            }
                        },
                        {
                            text: 'Rate',
                            handler: data => {
                                this.addRate();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.showAlertt("You need to SignIn");
            }
        });
    }
    showAlertt(msg) {
        let alert = this.alertController.create({
            message: msg,
            header: 'Warning',
            buttons: [
                { text: 'Cancel'
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
    canActivatefb() {
        return this.fb.isAuthenticated();
    }
    canActivate() {
        return this.Auth.isAuthenticated();
    }
};
PlacePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_9__["PlaceService"] },
    { type: src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_8__["FbService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n}\n\n.header {\n  width: 100%;\n}\n\n.space-between2 {\n  display: flex;\n  justify-content: space-between !important;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between !important;\n  padding: 10px 10px 0px 10px;\n  position: absolute;\n  z-index: 2;\n  width: inherit;\n}\n\n.image-slider {\n  position: relative;\n}\n\n.image-slider ion-slides {\n  --bullet-background-active: #ff3838;\n  height: 50vh;\n  width: 100%;\n}\n\n.image-slider ion-slides img {\n  width: 100vw;\n  max-width: 100vw;\n  object-fit: cover;\n}\n\n.profile-info {\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  background: #f8f8fa;\n  height: 100%;\n  margin-top: -22px;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n\n.profile-info .user-info {\n  padding: 20px 20px 0px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.profile-info .user-info .basic-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.profile-info .user-info .basic-info h1,\n.profile-info .user-info .basic-info p {\n  margin: 0 0 10px 0;\n}\n\n.profile-info .user-info .basic-info h1 {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.profile-info .about-me {\n  padding: 0px 20px 0px 20px;\n}\n\n.profile-info .about-me h1 {\n  font-weight: 600;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBR0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHlDQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EseUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBRUk7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQVI7O0FBQ1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNaOztBQUlBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURKOztBQUVJO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFSOztBQUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ1o7O0FBQVk7O0VBRUksa0JBQUE7QUFFaEI7O0FBQVk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBRWhCOztBQUVJO0VBQ0ksMEJBQUE7QUFBUjs7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ1oiLCJmaWxlIjoicGxhY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIC8vIGhlaWdodDogMjA2cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODM4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxufVxyXG5cclxuLmltYWdlLXNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpb24tc2xpZGVzIHtcclxuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2ZmMzgzODtcclxuICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWluZm8ge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLmJhc2ljLWluZm8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "yEDa":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/place/place.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]>\n    <div class=\"image-slider\">\n\n        <div class=\"header\">\n            <ion-buttons class=\"space-between\">\n                <ion-button style=\"color: white;\" routerLink=\"/menu/home\">\n                    <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n                </ion-button>\n                <div>\n                    <ion-button (click)=\"socialShare()\">\n                        <ion-icon name=\"share-social-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"Like(Place?._id)\" [style]=\"like ? 'color: red;' : 'color: white;'\">\n                        <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n                    </ion-button>\n                </div>\n            </ion-buttons>\n        </div>\n        <ion-slides pager=\"true\" style=\"height: fit-content;\">\n            <ion-slide *ngFor=\"let item of Place?.Attachement\">\n                <img [src]=\"item.Path\" alt=\"\">\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <div class=\"profile-info\">\n        <div class=\"user-info\">\n            <div class=\"basic-info\">\n                <h1>{{Place?.Name}}</h1>\n                <p>\n                    <app-notice [note]=\"Place?.Notice\"></app-notice>\n                </p>\n                <p>\n                    <ion-icon name=\"location-outline\"></ion-icon>\n                    {{Place?.Name}}, {{Place?.Address?.Department}}\n                </p>\n                <p>\n                    <ion-icon name=\"search-outline\"></ion-icon>\n                    {{Place?.Category?.Name}}\n                </p>\n            </div>\n        </div>\n        <div class=\"about-me\">\n            <h1>Description</h1>\n\n            <!-- <p *ngIf=\"!isSeeMore\" (click)=\"isSeeMore = true\">{{('Djerba, an island off the coast of Tunisia, is known for\n        Mediterranean beaches and whitewashed desert towns influenced by Berber, Arab, Jewish and African cultures.\n        Houmt Souk is the main city, known for its handicraft markets, fishing port and 16th-century fortress, Borj el\n        Kebir. To the south is El Ghriba synagogue, a pilgrimage site for North African Jews').substring(0,200)}}\n        <span style=\"color: rgb(49, 52, 143);\">... See more</span>\n        <span class=\"more-less\"></span>\n      </p>\n      <p *ngIf=\"isSeeMore\" (click)=\"isSeeMore = false\">{{('Djerba, an island off the coast of Tunisia, is known for\n        Mediterranean beaches and whitewashed desert towns influenced by Berber, Arab, Jewish and African cultures.\n        Houmt Souk is the main city, known for its handicraft markets, fishing port and 16th-century fortress, Borj el\n        Kebir. To the south is El Ghriba synagogue, a pilgrimage site for North African Jews')}}\n        <span class=\"more-less\" style=\"color: rgb(49, 52, 143);\"> See less</span>\n      </p>\n\n\n       <p style=\"white-space: break-spaces;\" *ngIf=\"!seeMore\" (click) =\"seeMore = true\">{{('Djerba, an island off the coast of Tunisia, is known for Mediterranean beaches and whitewashed desert towns influenced by Berber, Arab, Jewish and African cultures. Houmt Souk is the main city, known for its handicraft markets, fishing port and 16th-century fortress, Borj el Kebir. To the south is El Ghriba synagogue, a pilgrimage site for North African Jews').substring(0,100)}}\n        <span style=\"color: rgb(0, 0, 0);\">... See more</span>\n        <span class=\"more-less\"></span>\n      </p>\n      <p style=\"white-space: break-spaces;\" *ngIf=\"seeMore\" (click) =\"seeMore = false\">{{('Djerba, an island off the coast of Tunisia, is known for Mediterranean beaches and whitewashed desert towns influenced by Berber, Arab, Jewish and African cultures. Houmt Souk is the main city, known for its handicraft markets, fishing port and 16th-century fortress, Borj el Kebir. To the south is El Ghriba synagogue, a pilgrimage site for North African Jews')}}\n        <span class=\"more-less\" style=\"color: rgb(0, 0, 0);\"> See less</span>\n      </p>    -->\n            <p>{{Place?.Description}}</p>\n        </div>\n\n        <div class=\"about-me\">\n            <div class=\"space-between2\">\n                <h1>Rating And Review</h1>\n                <!-- <ion-fab-button style=\"z-index: 2;\" (click)=\"showAlert()\">\n          <img src=\"../../../assets/rate3.png\" >\n        </ion-fab-button> -->\n                <ion-buttons style=\"width: 60px;\">\n\n                    <ion-button style=\"--border-radius: 10px; width: 100%; height: 100%;\" (click)=\"showAlert()\">\n                        <!-- <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon> -->\n                        <img src=\"../../../assets/unnamed.png\">\n                    </ion-button>\n                </ion-buttons>\n            </div>\n        </div>\n\n        <ion-list style=\"background: #f8f8fa; overflow-y: scroll;\">\n            <ion-card style=\"border-radius: 12px;\" *ngFor=\"let eval of Place?.Evaluation\">\n                <ion-item>\n                    <ion-avatar slot=\"start\" style=\"margin-top: -30px;\">\n                        <img [src]=\"eval?.CreatedBy?.Avatar?.Path\">\n                    </ion-avatar>\n                    <ion-label>\n                        <h2>{{eval?.CreatedBy?.fullname}}</h2>\n                        <p>{{eval?.Comment}}</p>\n                        <app-notice [note]=\"eval?.Notice\"></app-notice>\n                        <!-- <p style=\"white-space: break-spaces;\" *ngIf=\"!seeMore\" (click)=\"seeMore = true\">{{('Djerba, an island off\n                the coast of Tunisia, is known for Mediterranean beaches and whitewashed desert towns influenced by\n                Berber, Arab, Jewish and African cultures. Houmt Souk is the main city, known for its handicraft\n                markets, fishing port and 16th-century fortress, Borj el Kebir. To the south is El Ghriba synagogue, a\n                pilgrimage site for North African Jews').substring(0,100)}}\n                <span style=\"color: rgb(0, 0, 0);\">... See more</span>\n                <span class=\"more-less\"></span>\n              </p>\n              <p style=\"white-space: break-spaces;\" *ngIf=\"seeMore\" (click)=\"seeMore = false\">{{('Djerba, an island off\n                the coast of Tunisia, is known for Mediterranean beaches and whitewashed desert towns influenced by\n                Berber, Arab, Jewish and African cultures. Houmt Souk is the main city, known for its handicraft\n                markets, fishing port and 16th-century fortress, Borj el Kebir. To the south is El Ghriba synagogue, a\n                pilgrimage site for North African Jews')}}\n                <span class=\"more-less\" style=\"color: rgb(0, 0, 0);\"> See less</span>\n              </p> -->\n                        <h3>{{eval?.CreatedAt?.substring(0,10).replace('-','/').replace('-','/')}}</h3>\n                    </ion-label>\n                </ion-item>\n            </ion-card>\n        </ion-list>\n\n\n\n        <!-- <div class=\"about-me\">\n      <h1>Other Pictures</h1>\n      <div class=\"image-slider\">\n        <ion-slides [options]=\"sliderConfig\">\n          <ion-slide>\n            <img src=\"../../../assets/banna.jpg\" alt=\"\">\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../../assets/taher.jpg\" alt=\"\">\n          </ion-slide>\n          <ion-slide>\n            <img src=\"../../../assets/Tunis.jpg\" alt=\"\">\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div> -->\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Pages-place-place-module.js.map