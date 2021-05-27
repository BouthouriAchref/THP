(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-place-category-place-category-module"],{

/***/ "J0bP":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/place-category/place-category-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PlaceCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceCategoryPageRoutingModule", function() { return PlaceCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _place_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-category.page */ "Ndtu");




const routes = [
    {
        path: '',
        component: _place_category_page__WEBPACK_IMPORTED_MODULE_3__["PlaceCategoryPage"]
    }
];
let PlaceCategoryPageRoutingModule = class PlaceCategoryPageRoutingModule {
};
PlaceCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlaceCategoryPageRoutingModule);



/***/ }),

/***/ "Ndtu":
/*!*************************************************************!*\
  !*** ./src/app/Pages/place-category/place-category.page.ts ***!
  \*************************************************************/
/*! exports provided: PlaceCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceCategoryPage", function() { return PlaceCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_place_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./place-category.page.html */ "o6hN");
/* harmony import */ var _place_category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-category.page.scss */ "THhF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/place.service */ "Ome2");






let PlaceCategoryPage = class PlaceCategoryPage {
    constructor(placeService, route, router) {
        this.placeService = placeService;
        this.route = route;
        this.router = router;
        this.Page = "ppc";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log('id', this.id);
        });
        this.placeService.getPlacesByCat(this.id).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Places = yield res.data;
            console.log(this.Places);
        }));
        this.placeService.getCategoryById(this.id).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.category = yield res.data;
        }));
    }
    onclick() {
        this.router.navigate(['/menu/home']);
    }
    selectPlace(id, Page) {
        this.router.navigate(['/place', { id, Page }]).then();
    }
};
PlaceCategoryPage.ctorParameters = () => [
    { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PlaceCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-place-category',
        template: _raw_loader_place_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_place_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlaceCategoryPage);



/***/ }),

/***/ "Ome2":
/*!*******************************************!*\
  !*** ./src/app/services/place.service.ts ***!
  \*******************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let PlaceService = class PlaceService {
    constructor(http, alertController, transfer) {
        this.http = http;
        this.alertController = alertController;
        this.transfer = transfer;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.PlaceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.PlaceSubjectEvent = this.PlaceSubject.asObservable();
    }
    getAllPlaces() {
        return this.http.get(`${this.url}/api/Place/Places`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            //this.PlaceSubject.next(response)
            //console.log('___',response)
            return response;
        }));
    }
    // getAllPlacesAfterChange() {
    //   this.getAllPlaces();
    //   return this.http.get<any>(`${this.url}/api/Place/Places`)
    // }
    getPlaceById(id) {
        this.getPlaceByID(id);
        return this.http.get(`${this.url}/api/Place/Place/${id}`);
    }
    getPlaceByID(id) {
        return this.http.get(`${this.url}/api/Place/Place/${id}`).subscribe(response => {
            //this.PlaceSubject.next(response)
            //console.log('___',response)
            return response;
        });
    }
    getAllCategory() {
        return this.http.get(`${this.url}/api/category`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            return response;
        }));
    }
    getCategoryById(id) {
        return this.http.get(`${this.url}/api/category/${id}`);
    }
    getPlacesByCat(id) {
        return this.http.get(`${this.url}/api/Place/Places/Category/${id}`);
    }
    getLat(credentials) {
        return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address}, ${credentials.city}, ${credentials.state}, ${credentials.zip}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log('response', response)
            // console.log('ed',this.lon)
            return yield response[0].lat;
        })));
    }
    getLon(credentials) {
        return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address}, ${credentials.city}, ${credentials.state}, ${credentials.zip}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log('response', response)
            //console.log('ed',this.lon)
            return yield response[0].lon;
        })));
    }
    addPlace(id, credentials) {
        //console.log('___',credentials) 
        return this.http.post(`${this.url}/api/Place/addPlace/${id}`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            //this.PlaceSubject.next(true)
            //console.log('___',response)
            return response;
        }));
    }
    uploadImage(id, img) {
        const fileTransfer = this.transfer.create();
        const path = this.url + '/api/Place/' + id;
        const targetPath = img;
        const options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data'
        };
        return fileTransfer.upload(targetPath, path, options, true);
    }
    addEvaluation(idUser, idPlace, credentials) {
        return this.http.post(`${this.url}/api/evaluation/${idPlace}/${idUser}`, credentials).subscribe(response => {
            this.PlaceSubject.next(true);
            //console.log('response', response)
            return response;
        });
    }
    addPlaceToFavorite(idPlace, idUser) {
        return this.http.put(`${this.url}/api/Place/Places/addfavorite/${idPlace}/${idUser}`, idUser).subscribe(response => {
            this.PlaceSubject.next(true);
            //console.log('response',response)
            return response;
        });
    }
    removePlaceToFavorite(idPlace, idUser) {
        return this.http.put(`${this.url}/api/Place/Places/removefavorite/${idPlace}/${idUser}`, idUser).subscribe(response => {
            this.PlaceSubject.next(true);
            //console.log('response',response)
            return response;
        });
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
PlaceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"] }
];
PlaceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PlaceService);



/***/ }),

/***/ "THhF":
/*!***************************************************************!*\
  !*** ./src/app/Pages/place-category/place-category.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f8f8fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGFjZS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6InBsYWNlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxufSJdfQ== */");

/***/ }),

/***/ "k24j":
/*!***************************************************************!*\
  !*** ./src/app/Pages/place-category/place-category.module.ts ***!
  \***************************************************************/
/*! exports provided: PlaceCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceCategoryPageModule", function() { return PlaceCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _place_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-category-routing.module */ "J0bP");
/* harmony import */ var _place_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-category.page */ "Ndtu");
/* harmony import */ var src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/notice/notice.module */ "qwbt");








let PlaceCategoryPageModule = class PlaceCategoryPageModule {
};
PlaceCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _place_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceCategoryPageRoutingModule"],
            src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_7__["NoticeModule"]
        ],
        declarations: [_place_category_page__WEBPACK_IMPORTED_MODULE_6__["PlaceCategoryPage"]]
    })
], PlaceCategoryPageModule);



/***/ }),

/***/ "o6hN":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/place-category/place-category.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-buttons class=\"space-between\">\n                    <ion-button style=\"color: #eb445a;\">\n                        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n                    </ion-button>\n                </ion-buttons>\n            </ion-col>\n            <ion-col size=\"10\">\n                <ion-title style=\"margin-left: -70px; text-align: center; padding-inline: 0px;\" (click)=\"onclick()\">Category : {{this.category?.Name}}</ion-title>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <ion-list style=\"background: #f8f8fa; overflow-y: scroll;\">\n        <ion-card style=\"border-radius: 12px;\" *ngFor=\"let place of this.Places\" (click)=\"selectPlace(place._id,'ppc')\">\n            <img [src]=\"place?.Attachement[0].Path\">\n            <ion-item>\n\n                <ion-avatar slot=\"start\" style=\"margin-top: -30px;\">\n                    <img [src]=\"place?.CreatedBy?.Avatar?.Path\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{place?.Name}}</h2>\n                    <p>{{place?.Description.substring(0, 100)}}</p>\n                    <app-notice [note]=\"place?.Notice\"></app-notice>\n                    <h3>{{place?.CreatedAt?.substring(0,10).replace('-','/').replace('-','/')}}</h3>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n    </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=Pages-place-category-place-category-module.js.map