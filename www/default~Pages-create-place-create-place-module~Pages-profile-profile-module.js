(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-create-place-create-place-module~Pages-profile-profile-module"],{

/***/ "4X/6":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-place/create-place.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n    <ion-toolbar color=\"primary\" style=\"padding-top: 0px;\" (click)=\"cmo()\">\n        <ion-title style=\"padding-right: 0;\">Create a new Place</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"closeModal()\">\n                <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</ion-header>\n\n<ion-content>\n    <div class=\"et\">\n        <form [formGroup]=\"credentialsForm\">\n            <div class=\"form-group\">\n                <label for=\"exampleInputName\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputName\" placeholder=\"Enter the place name\" formControlName=\"name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputDescription\">Description</label>\n                <textarea style=\"resize: none;\" class=\"form-control\" rows=\"2\" id=\"comment\" placeholder=\"Enter the place description\" formControlName=\"description\"></textarea>\n            </div>\n\n            <!-- <div class=\"form-group\">\n        <label for=\"sel1\">Category</label>\n        <select class=\"form-control\" id=\"sel1\" (change)=\"selectChangeHandlerCat($event)\" formControlName=\"category\">\n          <option selected>Choose Category</option>\n          <option value=\"Beach\">Beach</option>\n          <option value=\"Forest\">Forest</option>\n          <option value=\"Mountain\">Mountain</option>\n          <option value=\"Lake\">Lake</option>\n          <option value=\"Other\">Other ..</option>\n        </select>\n      </div> -->\n\n\n            <div class=\"form-group\">\n                <ion-label>Category</ion-label>\n                <ion-select placeholder=\"Choose Category\" id=\"sel1\" okText=\"Ok\" cancelText=\"Dismiss\" (change)=\"selectChangeHandlerCat($event)\" formControlName=\"category\">\n                    <ion-select-option *ngFor=\"let cat of this.categories\" [value]=\"cat._id\">{{cat.Name}}\n                    </ion-select-option>\n                </ion-select>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"toggleValue\">\n                <label for=\"exampleInputAddress\">Address</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputAddress\" placeholder=\"Enter the Address\" formControlName=\"address\">\n            </div>\n\n            <div class=\"form-row\" *ngIf=\"toggleValue\">\n                <ion-row>\n                    <ion-col>\n                        <div class=\"form-group\">\n                            <label for=\"inputCity\">City</label>\n                            <input type=\"text\" class=\"form-control\" id=\"inputCity\" placeholder=\"City\" formControlName=\"city\">\n                        </div>\n                    </ion-col>\n                    <ion-col>\n                        <div class=\"form-group\">\n                            <label for=\"inputZip\">Zip</label>\n                            <input type=\"text\" class=\"form-control\" id=\"inputZip\" placeholder=\"Zip\" formControlName=\"zip\">\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n\n\n            <!-- <div class=\"form-group col-md-4\" style=\"width: 35%;\">\n          <label for=\"inputState\">State</label>\n          <select id=\"inputState\" class=\"form-control\" (change)=\"selectChangeHandlerState($event)\"\n            formControlName=\"state\">\n            <option selected>Choose...</option>\n            <option value=\"Tunis\">Tunis</option>\n            <option value=\"Ariana\">Ariana</option>\n            <option value=\"Ben Arous\">Ben Arous</option>\n            <option value=\">Mannouba\">Mannouba</option>\n            <option value=\"Bizerte\">Bizerte</option>\n            <option value=\"Nabeul\">Nabeul</option>\n            <option value=\"Beja\">Beja</option>\n            <option value=\"Jendouba\">Jendouba</option>\n            <option value=\"Zaghouan\">Zaghouan</option>\n            <option value=\"Siliana\">Siliana</option>\n            <option value=\"Kef\">Kef</option>\n            <option value=\"Sousse\">Sousse</option>\n            <option value=\"Monastir\">Monastir</option>\n            <option value=\"Mahdia\">Mahdia</option>\n            <option value=\"Kasserine\">Kasserine</option>\n            <option value=\"Sidi Bouzid\">Sidi Bouzid</option>\n            <option value=\"Kairouan\">Kairouan</option>\n            <option value=\"Gafsa\">Gafsa</option>\n            <option value=\"Sfax\">Sfax</option>\n            <option value=\"Gabes\">Gabes</option>\n            <option value=\"Medenine\">Medenine</option>\n            <option value=\"Tozeur\">Tozeur</option>\n            <option value=\"Kebili\">Kebili</option>\n            <option value=\"Tataouine\">Tataouine</option>\n          </select>\n        </div> -->\n\n\n            <div class=\"form-group\">\n                <ion-label>State</ion-label>\n                <ion-select placeholder=\"Choose State\" id=\"sel1\" okText=\"Ok\" cancelText=\"Dismiss\" (change)=\"selectChangeHandlerState($event)\" formControlName=\"state\">\n                    <ion-select-option value=\"Tunis\">Tunis</ion-select-option>\n                    <ion-select-option value=\"Ariana\">Ariana</ion-select-option>\n                    <ion-select-option value=\"Ben Arous\">Ben Arous</ion-select-option>\n                    <ion-select-option value=\">Mannouba\">Mannouba</ion-select-option>\n                    <ion-select-option value=\"Bizerte\">Bizerte</ion-select-option>\n                    <ion-select-option value=\"Nabeul\">Nabeul</ion-select-option>\n                    <ion-select-option value=\"Beja\">Beja</ion-select-option>\n                    <ion-select-option value=\"Jendouba\">Jendouba</ion-select-option>\n                    <ion-select-option value=\"Zaghouan\">Zaghouan</ion-select-option>\n                    <ion-select-option value=\"Siliana\">Siliana</ion-select-option>\n                    <ion-select-option value=\"Kef\">Kef</ion-select-option>\n                    <ion-select-option value=\"Sousse\">Sousse</ion-select-option>\n                    <ion-select-option value=\"Monastir\">Monastir</ion-select-option>\n                    <ion-select-option value=\"Mahdia\">Mahdia</ion-select-option>\n                    <ion-select-option value=\"Kasserine\">Kasserine</ion-select-option>\n                    <ion-select-option value=\"Sidi Bouzid\">Sidi Bouzid</ion-select-option>\n                    <ion-select-option value=\"Kairouan\">Kairouan</ion-select-option>\n                    <ion-select-option value=\"Gafsa\">Gafsa</ion-select-option>\n                    <ion-select-option value=\"Sfax\">Sfax</ion-select-option>\n                    <ion-select-option value=\"Gabes\">Gabes</ion-select-option>\n                    <ion-select-option value=\"Medenine\">Medenine</ion-select-option>\n                    <ion-select-option value=\"Tozeur\">Tozeur</ion-select-option>\n                    <ion-select-option value=\"Kebili\">Kebili</ion-select-option>\n                    <ion-select-option value=\"Tataouine\">Tataouine</ion-select-option>\n                </ion-select>\n            </div>\n\n            <div class=\"form-row\" *ngIf=\"!toggleValue\">\n                <div class=\"form-group col-md-6\" style=\"width: 50%;\">\n                    <label for=\"inputCity\">Longitude</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputCity\" placeholder=\"Longitude\" formControlName=\"lon\">\n                </div>\n\n                <div class=\"form-group col-md-2\" style=\"width: 50%;\">\n                    <label for=\"inputZip\">Latitude</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputZip\" placeholder=\"Latitude\" formControlName=\"lat\">\n                </div>\n            </div>\n\n            <div class=\"space-between\">\n                <ion-row>\n                    <ion-col size=\"9\">\n                        <ion-label *ngIf=\"toggleValue\" style=\"font-size: 15px;\">Switch To Coordinates</ion-label>\n                        <ion-label *ngIf=\"!toggleValue\">Switch To Address</ion-label>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <ion-toggle (ionChange)=\"change()\" style=\"padding-top: 5px;\"></ion-toggle>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <label for=\"exampleInputCategory\">Picture</label>\n            <!-- <div class=\"custom-file\">\n        <input type=\"file\" accept=\"image/*\" class=\"custom-file-input\" id=\"validatedCustomFile\" required>\n        <label class=\"custom-file-label\" for=\"validatedCustomFile\">Choose picture...</label>\n        <div class=\"invalid-feedback\">Example invalid custom file feedback</div>\n      </div> -->\n            <!-- <div class=\"custom-file\">\n                <ion-fab right bottom>\n                    <button ion-fab (click)=\"presentActionSheet()\"><ion-icon name=\"camera\"></ion-icon></button>\n                </ion-fab>\n            </div> -->\n            <ion-buttons>\n                <ion-button style=\"border: 1px solid; width: 260px; border-radius: 10px;\" (click)=\"presentActionSheet()\">\n                    <ion-icon name=\"image-outline\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </form>\n        <br>\n        <div style=\"  text-align: center;\">\n\n            <ion-button style=\"padding-left: none;\" type=\"submit\" (click)=\"presentLoading()\" color=\"primary\">Create\n            </ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "4zrB":
/*!***********************************************************!*\
  !*** ./src/app/Pages/create-place/create-place.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n.et {\n  width: 100%;\n  margin: 0 auto;\n  padding-top: 30px;\n  border: 1px solid #ccc;\n  background: #f9f9f9;\n  float: left;\n  padding-inline-start: var(--ion-padding, 16px);\n  padding-inline-end: var(--ion-padding, 16px);\n}\n.form-control:focus {\n  border-color: #ff3838;\n  box-shadow: 0 0 0 0.2rem rgba(255, 56, 56, 0.25);\n}\nion-select {\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  background-color: white;\n  /* Applies to the value and placeholder color */\n  color: #000000;\n  /* Set a different placeholder color */\n  --placeholder-color: #0000009e;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGUtcGxhY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBQ1I7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw4Q0FBQTtFQUNBLDRDQUFBO0FBREo7QUFLQTtFQUNRLHFCQUFBO0VBQ0EsZ0RBQUE7QUFGUjtBQUtBO0VBQ1Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSw4QkFBQTtFQUVBLHdDQUFBO0VBQ0Esd0JBQUE7QUFKUiIsImZpbGUiOiJjcmVhdGUtcGxhY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvMy4yLjEvY3NzL2ZvbnQtYXdlc29tZS5jc3MpO1xuLmV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIFxufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmYzODM4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDU2LCA1NiwgMC4yNSk7XG4gICAgfSBcblxuaW9uLXNlbGVjdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC8qIEFwcGxpZXMgdG8gdGhlIHZhbHVlIGFuZCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIFxuICAgICAgICAvKiBTZXQgYSBkaWZmZXJlbnQgcGxhY2Vob2xkZXIgY29sb3IgKi9cbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMDllO1xuICAgICAgXG4gICAgICAgIC8qIFNldCBmdWxsIG9wYWNpdHkgb24gdGhlIHBsYWNlaG9sZGVyICovXG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgIH0iXX0= */");

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

/***/ "nZuu":
/*!*********************************************************!*\
  !*** ./src/app/Pages/create-place/create-place.page.ts ***!
  \*********************************************************/
/*! exports provided: CreatePlacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlacePage", function() { return CreatePlacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_place_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-place.page.html */ "4X/6");
/* harmony import */ var _create_place_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-place.page.scss */ "4zrB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/place.service */ "Ome2");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");









const ID_USER = 'id';
let CreatePlacePage = class CreatePlacePage {
    constructor(modalController, navParams, formBuilder, placeService, storage, loadingController, actionSheetCtrl, camera, alertController) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.placeService = placeService;
        this.storage = storage;
        this.loadingController = loadingController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.alertController = alertController;
        this.toggleValue = true;
        this.showresp = false;
    }
    ngOnInit() {
        // console.table(this.navParams);
        // this.id = this.navParams.data.paramID;
        this.credentialsForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            lon: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.placeService.getAllCategory().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.categories = yield res.category;
            console.log('cat', this.categories);
        }));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onCloseData = "Wrapped Up!";
            yield this.modalController.dismiss(onCloseData);
        });
    }
    change() {
        this.toggleValue = !this.toggleValue;
        //console.log(this.toggleValue);
    }
    selectChangeHandlerState(event) {
        this.credentialsForm.controls['state'].setValue(event.target.value);
        //return event.target.value;
    }
    selectChangeHandlerCat(event) {
        this.credentialsForm.controls['category'].setValue(event.target.value);
        //return event.target.value;
    }
    cmo() {
        console.log('___', this.credentialsForm.value);
    }
    openCamera() {
        const option = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(option).then((imageData) => {
            this.based64Image = imageData;
            //this.based64Image = 'data:image/jpeg;based64,' + imageData;
        });
    }
    openGallery() {
        const option = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(option).then((imageData) => {
            this.based64Image = imageData;
            //this.based64Image = 'data:image/jpeg;based64,' + imageData;
        });
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                //title: 'Select Image Source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            this.openGallery();
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.openCamera();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        });
    }
    Submit() {
        console.log(this.credentialsForm.value);
        if (this.credentialsForm.invalid) {
            console.log('invalid form');
        }
        else {
            //console.log('Form', this.credentialsForm.value)
            this.placeService.getLat(this.credentialsForm.value).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('lat', res);
                this.credentialsForm.controls['lat'].patchValue(yield res);
            }));
            this.placeService.getLon(this.credentialsForm.value).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('lon', res);
                this.credentialsForm.controls['lon'].patchValue(yield res);
            }));
            setTimeout(() => {
                this.CreatePlace();
                this.closeModal();
                this.showAlert('Success', 'Place created successfully');
            }, 2000);
        }
    }
    CreatePlace() {
        // console.log('AddPlace',this.credentialsForm.value)
        this.storage.get(ID_USER).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Form', yield this.credentialsForm.value);
            this.placeService.addPlace(yield res, yield this.credentialsForm.value).subscribe(response => {
                this.placeService.uploadImage(response.place._id, this.based64Image);
            });
        }));
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            this.Submit();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    showAlert(head, msg) {
        let alert = this.alertController.create({
            message: msg,
            header: head,
            buttons: ['OK']
        });
        alert.then(alert => alert.present());
    }
};
CreatePlacePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_6__["PlaceService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CreatePlacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-place',
        template: _raw_loader_create_place_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_place_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreatePlacePage);



/***/ })

}]);
//# sourceMappingURL=default~Pages-create-place-create-place-module~Pages-profile-profile-module.js.map