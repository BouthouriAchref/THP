(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-place-place-module~Pages-rate-rate-module"],{

/***/ "6Tfl":
/*!*****************************************!*\
  !*** ./src/app/Pages/rate/rate.page.ts ***!
  \*****************************************/
/*! exports provided: RatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatePage", function() { return RatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rate.page.html */ "umME");
/* harmony import */ var _rate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate.page.scss */ "pHLe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/place.service */ "Ome2");









const ID_USER = 'id';
let RatePage = class RatePage {
    constructor(modalController, navParams, storage, placeService, formBuilder, alertController, router) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.storage = storage;
        this.placeService = placeService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.router = router;
        this.noRating = false;
    }
    ngOnInit() {
        //console.table(this.navParams);
        this.idPlace = this.navParams.data.id;
        //console.log(this.navParams.data.id)
        this.credentialsForm = this.formBuilder.group({
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            Notice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    handleRate($event) {
        this.placeRating = $event.target.defaultValue;
        //console.log('placeRating', this.placeRating)
        this.credentialsForm.controls['Notice'].patchValue(this.placeRating);
    }
    Submit() {
        console.log('Form', this.credentialsForm.value);
        if (this.credentialsForm.invalid) {
            console.log('invalid form');
        }
        else {
            this.storage.get(ID_USER).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.placeService.addEvaluation(yield res, this.idPlace, this.credentialsForm.value);
                this.closeModal();
            }));
        }
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onCloseData = "Wrapped Up!";
            yield this.modalController.dismiss(onCloseData);
        });
    }
    showAlert(msg) {
        let alert = this.alertController.create({
            message: msg,
            header: 'Warning',
            buttons: [
                {
                    text: 'OK',
                    handler: data => {
                        this.router.navigate(['place']);
                    }
                }
            ]
        });
        alert.then(alert => alert.present());
    }
};
RatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_8__["PlaceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rate',
        template: _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RatePage);



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
            this.PlaceSubject.next(true);
            //console.log('___',response)
            return response;
        }));
    }
    uploadImage(id, img) {
        const fileTransfer = this.transfer.create();
        const path = this.url + '/api/Place/file/' + id;
        const targetPath = img;
        const options = {
            fileName: id + 'upload.jpeg',
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'image/jpeg'
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

/***/ "pHLe":
/*!*******************************************!*\
  !*** ./src/app/Pages/rate/rate.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n/****** Style Star Rating Widget *****/\n.et {\n  width: 100%;\n  height: -webkit-fill-available;\n  margin: 0 auto;\n  padding-top: 30px;\n  text-align: center;\n  border: 1px solid #ccc;\n  background: #f9f9f9;\n  float: left;\n  padding-inline-start: var(--ion-padding, 16px);\n  padding-inline-end: var(--ion-padding, 16px);\n}\n.rating {\n  padding-right: 10%;\n}\n.rating > input {\n  display: none;\n}\n.rating > label:before {\n  margin: 3px;\n  font-size: 42px;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"★\";\n}\n.rating > .half:before {\n  content: \"★\";\n}\n.rating > label {\n  color: #ddd;\n  float: right;\n}\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating > input:checked ~ label,\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: #f2994a;\n}\n/* hover previous stars in list */\n.rating > input:checked + label:hover,\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label,\n.rating > input:checked ~ label:hover ~ label {\n  color: #f2994a;\n}\n.form-control:focus {\n  border-color: #ff3838;\n  box-shadow: 0 0 0 0.2rem rgba(255, 56, 56, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUE2QlIsOEVBQUE7QUFNUixzQ0FBQTtBQU9BO0VBQ1EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLDhDQUFBO0VBQ0EsNENBQUE7QUF2Q1I7QUEwQ0E7RUFDRSxrQkFBQTtBQXZDRjtBQTBDQTtFQUFrQixhQUFBO0FBdENsQjtBQXdDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFyQ0Y7QUFnREE7RUFDRSxZQUFBO0FBN0NGO0FBZ0RBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUE3Q0o7QUFpREEsa0RBQUE7QUFFQTs7O0VBRThDLGNBQUE7QUE5QzlDO0FBOENpRSxpQ0FBQTtBQUVqRTs7OztFQUdnRCxjQUFBO0FBM0NoRDtBQTZDQTtFQUNFLHFCQUFBO0VBQ0EsZ0RBQUE7QUExQ0YiLCJmaWxlIjoicmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XG4vKioqKioqIFN0eWxlIFN0YXIgUmF0aW5nIFdpZGdldCAqKioqKi9cbi5ldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5cbi5yYXRpbmcge1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5yYXRpbmcgPiBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYXRpbmcgPiBsYWJlbDpiZWZvcmUge1xuICBtYXJnaW46IDNweDtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogXCLimIVcIjtcbn1cblxuLnJhdGluZyA+IC5oYWxmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piFXCI7XG59XG5cbi5yYXRpbmcgPiBsYWJlbCB7XG4gIGNvbG9yOiAjZGRkO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi8qKioqKiBDU1MgTWFnaWMgdG8gSGlnaGxpZ2h0IFN0YXJzIG9uIEhvdmVyICoqKioqL1xuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLFxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XG4gIGNvbG9yOiAjZjI5OTRhO1xufVxuXG4vKiBob3ZlciBwcmV2aW91cyBzdGFycyBpbiBsaXN0ICovXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3Zlcixcbi5yYXRpbmcgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XG4gIGNvbG9yOiAjZjI5OTRhO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmYzODM4O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDU2LCA1NiwgMC4yNSk7XG59Il19 */");

/***/ }),

/***/ "umME":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/rate/rate.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar color=\"primary\" style=\"padding-top: 0;\">\n    <ion-title>Rate this place</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"\n    integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</ion-header>\n\n<ion-content>\n  <div class=\"et\">\n    <form [formGroup]=\"credentialsForm\">\n\n      <div class=\"rating\">\n        <input type=\"radio\" (click)=\"handleRate($event)\" id=\"star5\" name=\"rating\" value=\"5\" /><label\n          for=\"star5\"></label>\n        <input type=\"radio\" (click)=\"handleRate($event)\" id=\"star4\" name=\"rating\" value=\"4\" /><label\n          for=\"star4\"></label>\n        <input type=\"radio\" (click)=\"handleRate($event)\" id=\"star3\" name=\"rating\" value=\"3\" /><label\n          for=\"star3\"></label>\n        <input type=\"radio\" (click)=\"handleRate($event)\" id=\"star2\" name=\"rating\" value=\"2\" /><label\n          for=\"star2\"></label>\n        <input type=\"radio\" (click)=\"handleRate($event)\" id=\"star1\" name=\"rating\" value=\"1\" /><label\n          for=\"star1\"></label>\n      </div>\n      \n      <!-- <span *ngIf=\"noRating\">You have to rate the place</span> -->\n      <!-- <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4 and a half\" /><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label> -->\n      <!-- <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3 and a half\" /><label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label> -->\n      <!-- <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2 and a half\" /><label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label> -->\n      <!-- <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1 and a half\" /><label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label> -->\n      <!-- <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"half\" /><label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label> -->\n\n      <div class=\"form-group\">\n        <textarea style=\"resize: none;\" class=\"form-control\" rows=\"2\" id=\"comment\" placeholder=\"Write your review...\"\n          formControlName=\"Comment\"></textarea>\n      </div>\n\n      <ion-button style=\"padding-left: none;\" (click)=\"Submit()\" color=\"primary\">Rate</ion-button>\n    </form>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default~Pages-place-place-module~Pages-rate-rate-module.js.map