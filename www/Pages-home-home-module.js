(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-home-home-module"],{

/***/ "1LYw":
/*!*****************************************!*\
  !*** ./src/app/Pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "ktpo");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "kdWo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-guard.service */ "MKys");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/fb.service */ "SLMv");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/place.service */ "Ome2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














const ID_USER = 'id';
let HomePage = class HomePage {
    constructor(formBuilder, profile, storage, fb, Auth, auth, router, alertController, data, place) {
        this.formBuilder = formBuilder;
        this.profile = profile;
        this.storage = storage;
        this.fb = fb;
        this.Auth = Auth;
        this.auth = auth;
        this.router = router;
        this.alertController = alertController;
        this.data = data;
        this.place = place;
        this.sliderConfig = {
            centeredSlides: true,
            spaceBetween: -40,
            slidesPerView: 1.1,
        };
        this.SearchData = [];
        this.Search = false;
        this.categoriesSliderConfig = {
            slidesPerView: 2.5,
        };
        this.isOpened = false;
        this.isEmty = false;
        this.populairePlaces = [];
        this.recommendedPlaces = [];
        this.isOpened = false;
        this.profile.ProfileSubjectEvent.subscribe(res => {
            this.USER = res;
            //console.log('___',res)
        });
        this.place.PlaceSubjectEvent.subscribe(res => {
            if (res) {
                this.place.getAllPlaces().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (res.success) {
                        this.places = null;
                        this.places = yield res.data;
                        //console.log('__',this.places)
                    }
                    this.triPlaces(this.places);
                }));
            }
        });
    }
    ngOnInit() {
        this.place.getAllPlaces().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res.success) {
                this.places = yield res.data;
                console.log('__', this.places);
            }
            this.triPlaces(this.places);
            //console.log(this.populairePlaces)
            this.place.getAllCategory().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.categories = yield res.category;
                //console.log('cat',this.categories)
            }));
            if (this.canActivatefb() || this.canActivate()) {
                this.getAvatar();
            }
        }));
        this.credentialsForm = this.formBuilder.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required])
        });
    }
    triPlaces(places) {
        this.populairePlaces = [];
        this.recommendedPlaces = [];
        for (let place of this.places) {
            if (place.Notice >= 4) {
                this.populairePlaces.push(place);
            }
            else {
                this.recommendedPlaces.push(place);
            }
        }
    }
    FilterSearch(event) {
        this.Search = true;
        const val = event.target.value;
        //console.log('val', val);
        if (val && val.trim() != '') {
            this.places = this.places.filter((item) => {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Address.Department.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.populairePlaces = this.places;
            if (this.places.length == 0) {
                this.isEmty = true;
            }
            //console.log(this.places)
        }
        if (val == '') {
            this.place.getAllPlaces().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res.success) {
                    this.places = yield res.data;
                    this.triPlaces(this.places);
                    this.Search = false;
                    this.isEmty = false;
                    console.log('__', this.places);
                }
            }));
        }
    }
    cmo() {
        console.log('___', this.credentialsForm.value);
    }
    selectCat() {
        let id = this.credentialsForm.value.category;
        this.router.navigate(['/place-category', { id }]).then();
    }
    selectChangeHandlerCat(event) {
        this.credentialsForm.controls['category'].setValue(event.target.value);
        //return event.target.value;
    }
    selectPlace(id) {
        this.router.navigate(['/place', { id }]).then();
    }
    selectCategory(id) {
        this.router.navigate(['/place-category', { id }]).then();
    }
    getAvatar() {
        this.storage.get(ID_USER).then((res) => {
            this.profile.findUserById(res).subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.USER = yield user;
                //console.log(this.USER);
            }));
        });
    }
    open() {
        this.isOpened = !this.isOpened;
    }
    onClick() {
        this.router.navigate(['login']);
    }
    // showAlert(msg) {
    //   let alert = this.alertController.create({
    //     message: msg,
    //     header: 'Error',
    //     buttons: [
    //       {text:'SignIn',
    //         handler : data =>{
    //           this.router.navigate(['login']);
    //         }
    //       },
    //       {text:'Annuler'
    //       }
    //     ]
    //   });
    //   alert.then(alert => alert.present());
    // }
    canActivatefb() {
        return this.fb.isAuthenticated();
    }
    canActivate() {
        return this.Auth.isAuthenticated();
    }
    Logout() {
        if (this.canActivate) {
            this.Auth.logout();
        }
        if (this.canActivatefb) {
            this.fb.logoutFacebook();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_11__["ProfileService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_10__["FbService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_12__["PlaceService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let DataService = class DataService {
    constructor() { }
    getPlaces() {
        var places = [];
        var place1 = {
            id: 1,
            title: "Tunis",
            description: "Tunis is the sprawling capital of Tunisia, a country in North Africa. It sits along Lake Tunis, just inland from the Mediterranean Sea’s Gulf of Tunis. It’s home to a centuries-old medina and the Bardo, an archaeology museum where celebrated Roman mosaics are displayed in a 15th-century palace complex. The parklike ruins of ancient Carthage sit in the city’s northern suburbs. ",
            image: "../../assets/Tunis.jpg",
            note: 3,
            noteArray: [],
            noteArray2: [],
            longitude: 10.1815,
            latitude: 36.8065
        };
        var place2 = {
            id: 2,
            title: "Bizerte",
            description: "Bizerte or Bizerta, the classical Hippo, is a town of Bizerte Governorate in Tunisia. It is the northernmost city in Africa, located 65 km north of the capital Tunis. It is one of the oldest known settlements in Tunisia, having been founded by settlers from the Phoenician port of Sidon around 1100 BC. ",
            image: "../../assets/Bizerte.jpg",
            note: 2,
            noteArray: [],
            noteArray2: [],
            longitude: 9.8642,
            latitude: 37.2768
        };
        var place3 = {
            id: 3,
            title: "Monastir",
            description: "Monastir, also called Mistīr, is a city on the central coast of Tunisia, in the Sahel area, some 20 kilometres south of Sousse and 162 kilometres south of Tunis. Traditionally a fishing port, Monastir is now a major tourist resort. Its population is about 93,306. It is the capital of Monastir Governorate",
            image: "../../assets/Monastir.jpg",
            note: 3,
            noteArray: [],
            noteArray2: [],
            longitude: 10.8113,
            latitude: 35.7643
        };
        var place4 = {
            id: 4,
            title: "Gabes",
            description: "Gabès, also spelled Cabès, Cabes, Kabes, Gabbs and Gaps, is the capital city of the Gabès Governorate in Tunisia. It is located on the coast of the Gulf of Gabès. With a population of 152,921, Gabès is the 6th largest Tunisian city.",
            image: "../../assets/Gabes.jpg",
            note: 4,
            noteArray: [],
            noteArray2: [],
            longitude: 10.0975,
            latitude: 33.8881
        };
        var place5 = {
            id: 5,
            title: "Béja",
            description: "Béja is a city in Tunisia. It is the capital of the Béja Governorate. It is located 105 kilometers from Tunis, between the Medjerdah River and the Mediterranean, against the foothills of the Khroumire, ...",
            image: "../../assets/Béja.jpg",
            note: 4,
            noteArray: [],
            noteArray2: [],
            longitude: 9.1844,
            latitude: 36.7333
        };
        var place6 = {
            id: 6,
            title: "Djerba",
            description: "Djerba, an island off the coast of Tunisia, is known for Mediterranean beaches and whitewashed desert towns influenced by Berber, Arab, Jewish and African cultures. Houmt Souk is the main city, known for its handicraft markets, fishing port and 16th-century fortress, Borj el Kebir. To the south is El Ghriba synagogue, a pilgrimage site for North African Jews.",
            image: "../../assets/Djerba.jpg",
            note: 5,
            noteArray: [],
            noteArray2: [],
            longitude: 10.8451,
            latitude: 33.8076
        };
        places.push(place1, place2, place3, place4, place5, place6);
        return places;
    }
    getCategories() {
        var categories = [];
        var cat1 = {
            id: 1,
            name: 'Beach',
            image: '../../assets/beach.jpg'
        };
        var cat2 = {
            id: 2,
            name: 'Forest',
            image: '../../assets/forest.jpg'
        };
        var cat3 = {
            id: 3,
            name: 'Mountain',
            image: '../../assets/mountain.jpg'
        };
        var cat4 = {
            id: 4,
            name: 'Lake',
            image: '../../assets/lake.jpg'
        };
        categories.push(cat1, cat2, cat3, cat4);
        return categories;
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



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
        this.PlaceSubject.next(true);
        //console.log('___',credentials) 
        return this.http.post(`${this.url}/api/Place/addPlace/${id}`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            //console.log('___',response)
            return response;
        }));
    }
    deletePlaceById(idUser, idPlace) {
        this.PlaceSubject.next(true);
        return this.http.delete(`${this.url}/api/Place/places/${idUser}/${idPlace}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            //console.log('___',response)
            return response;
        }));
    }
    deleteEvaluationById(idPlace, idEval) {
        this.PlaceSubject.next(true);
        return this.http.delete(`${this.url}/api/evaluation/${idPlace}/${idEval}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
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
    uploadImagePlace(id, image) {
        //console.log('___',credentials) 
        return this.http.post(`${this.url}/api/Place/file/${id}`, image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            //console.log('1',response)
            return response;
        }));
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

/***/ "kdWo":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\nion-content {\n  --background: #f8f8fa;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n.more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n.title {\n  font-size: 15px;\n}\n.card {\n  margin: 0;\n  margin-right: 50px;\n  width: 80%;\n  margin-bottom: 10px;\n  border-radius: 14px;\n}\n.category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 140px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\nion-card-header ion-icon {\n  font-size: 60px;\n}\nion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n.wrapper {\n  padding-bottom: 0;\n}\nion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n}\n.border {\n  border: 0px solid #ff3838;\n  border-radius: 50%;\n  height: -webkit-fill-available;\n}\n.border_white {\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  height: -webkit-fill-available;\n}\n.img_box {\n  border-radius: 50%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRVI7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBRUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBR0k7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBS0k7RUFDSSxlQUFBO0FBRlI7QUFJSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUZSO0FBTUE7RUFDSSxpQkFBQTtBQUhKO0FBTUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUhKO0FBT0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUpSO0FBS1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIWjtBQUlZO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUFGaEI7QUFJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7QUFGaEI7QUFRQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUxKO0FBUUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFMSjtBQVFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUxKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ4LCAyNTAsIC45Nik7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5tb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjRkI0RTRFO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZjI5OTRhO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG5pb24tYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNhdGVnb3J5LXNsaWRlciB7XHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmMzgzODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLmJvcmRlcl93aGl0ZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcblxyXG4uaW1nX2JveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */");

/***/ }),

/***/ "ktpo":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-item lines=\"Categories\">\n\n\n        <!-- <ion-avatar slot=\"end\" *ngIf=\"canActivate()\">\n      <div class=\"border\">\n        <img src=\"../../../assets/l.png\" routerLink=\"/menu/profile\">\n      </div>\n    </ion-avatar> -->\n\n        <ion-avatar slot=\"end\" *ngIf=\"canActivate() || canActivatefb()\">\n            <div class=\"border\">\n                <div class=\"border_white\">\n                    <div class=\"img_box\">\n                        <img [src]=\"USER?.Avatar?.Path\" routerLink=\"/menu/profile\">\n                    </div>\n                </div>\n            </div>\n        </ion-avatar>\n\n        <!-- <ion-avatar slot=\"end\" *ngIf=\"canActivate()\">\n      <div class=\"border\">\n        <img src=\"../../../assets/l2.png\" routerLink=\"/menu/profile\">\n      </div>\n    </ion-avatar> -->\n\n        <!-- <ion-avatar (click)=\"Logout()\" slot=\"end\" *ngIf=\"canActivate()\">\n      <img src=\"../../../assets/dec2.png\">\n    </ion-avatar> -->\n\n        <ion-avatar (click)=\"Logout()\" slot=\"end\" *ngIf=\"canActivate() || canActivatefb()\">\n            <div class=\"border\">\n                <div class=\"border_white\">\n                    <img src=\"../../../assets/dec2.png\" routerLink=\"/login\">\n                </div>\n            </div>\n        </ion-avatar>\n\n        <ion-button routerLink=\"/login\" slot=\"end\" color=\"primary\" *ngIf=\"!canActivate() && !canActivatefb()\">Sign in\n        </ion-button>\n\n        <ion-label>\n            <h2>Find, </h2>\n            <h1 style=\"font-size: 23px;\">Place near you !!</h1>\n        </ion-label>\n    </ion-item>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div class=\"ion-padding wrapper\">\n        <ion-buttons style=\"padding-bottom: 10px;\">\n            <ion-searchbar (ionInput)=\"FilterSearch($event)\"></ion-searchbar>\n            <ion-button (click)='open()'>\n                <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <div *ngIf=\"isOpened\">\n            <ion-row>\n                <ion-col size=\"10\">\n                    <form [formGroup]=\"credentialsForm\">\n                        <div class=\"form-group\">\n                            <ion-label>Category</ion-label>\n                            <ion-select placeholder=\"Choose Category\" id=\"sel1\" okText=\"Ok\" cancelText=\"Dismiss\" (change)=\"selectChangeHandlerCat($event)\" formControlName=\"category\">\n                                <ion-select-option *ngFor=\"let cat of this.categories\" [value]=\"cat._id\">{{cat.Name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </div>\n                    </form>\n                </ion-col>\n                <ion-col size=\"2\">\n                    <ion-icon style=\"margin-top: 38px;margin-left: 20px; color: #ed1c24;\" name=\"search\" (click)='selectCat()'></ion-icon>\n                </ion-col>\n\n            </ion-row>\n\n\n        </div>\n\n        <ion-grid class=\"ion-no-padding\" *ngIf=\"!Search\">\n            <ion-row class=\"ion-align-items-baseline\">\n                <ion-col size=\"6\">\n                    <h4 class=\"title\">\n                        Popular Places\n                    </h4>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <h4 class=\"more ion-text-end\">\n                        Show more\n                    </h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid class=\"ion-no-padding\" *ngIf=\"Search\">\n            <ion-row class=\"ion-align-items-baseline\">\n                <ion-col size=\"6\">\n                    <h4 class=\"title\">\n                        Places to Search\n                    </h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </div>\n\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"this.isEmty\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides>\n                    <ion-slide>\n                        <ion-card style=\"background-color: #f0f2f5; margin: 0; width: 80%; margin-bottom: 10px; border-radius: 14px;\">\n                            <ion-card-content class=\"ion-text-left\">\n                                <ion-card-title class=\"title\">\n                                    <div class=\"ion-padding wrapper\" style=\"text-align: center; font-variant: all-small-caps;\">\n                                        <ion-grid class=\"ion-no-padding\">\n                                            <ion-row class=\"ion-align-items-baseline\">\n                                                <ion-col size=\"12\">\n                                                    <h4 class=\"title\">\n                                                        No Places With This Search\n                                                    </h4>\n                                                </ion-col>\n                                            </ion-row>\n                                        </ion-grid>\n                                    </div>\n                                </ion-card-title>\n                                <ion-card-subtitle></ion-card-subtitle>\n                                <ion-card-subtitle></ion-card-subtitle>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"!Search\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides [options]=\"sliderConfig\">\n\n                    <ion-slide *ngFor=\"let place of populairePlaces\">\n                        <ion-card class=\"card\">\n                            <ion-card-content class=\"ion-text-left\" (click)=\"selectPlace(place._id)\">\n                                <div class=\"img-wrapper\">\n                                    <ion-img *ngIf=\"place.Attachement.length>0\" [src]=\"place.Attachement[0].Path\"></ion-img>\n                                </div>\n                                <ion-card-title class=\"title\">{{place.Name}}</ion-card-title>\n                                <ion-card-subtitle>{{place.Description.substring(0, 145)}}...</ion-card-subtitle>\n                                <app-notice [note]=\"place.Notice\"></app-notice>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"Search\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides [options]=\"sliderConfig\">\n\n                    <ion-slide *ngFor=\"let place of populairePlaces\">\n                        <ion-card class=\"card\">\n                            <ion-card-content class=\"ion-text-left\" (click)=\"selectPlace(place._id)\">\n                                <div class=\"img-wrapper\">\n                                    <ion-img *ngIf=\"place.Attachement.length>0\" [src]=\"place.Attachement[0].Path\"></ion-img>\n                                </div>\n                                <ion-card-title class=\"title\">{{place.Name}}</ion-card-title>\n                                <ion-card-subtitle>{{place.Description.substring(0, 145)}}...</ion-card-subtitle>\n                                <app-notice [note]=\"place.Notice\"></app-notice>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div class=\"ion-padding-horizontal wrapper\">\n        <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-baseline\">\n                <ion-col size=\"6\">\n                    <h4 class=\"title\">\n                        Explore Categories\n                    </h4>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <h4 class=\"more ion-text-end\" routerLink=\"/category\">\n                        Show more\n                    </h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"category-slider ion-padding-start\">\n                    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n                        <ion-slide *ngFor=\"let category of this.categories\">\n                            <ion-col (click)=\"selectCategory(category._id)\">\n                                <h4>{{ category.Name }}</h4>\n                                <img *ngIf=\"category?.Attachement\" [src]=\"category?.Attachement?.Path\" />\n                            </ion-col>\n\n                        </ion-slide>\n                    </ion-slides>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div class=\"ion-padding-horizontal wrapper\">\n        <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-baseline\">\n                <ion-col size=\"6\">\n                    <h4 class=\"title\">\n                        Recommended Places\n                    </h4>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <h4 class=\"more ion-text-end\">\n                        Show more\n                    </h4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-slides [options]=\"sliderConfig\" style=\"margin-bottom: 20px;\">\n                    <ion-slide *ngFor=\"let place of recommendedPlaces\">\n                        <ion-card class=\"card\">\n                            <ion-card-content class=\"ion-text-left\" (click)=\"selectPlace(place._id)\">\n                                <div class=\"img-wrapper\">\n                                    <ion-img *ngIf=\"place.Attachement.length>0\" [src]=\"place.Attachement[0].Path\"></ion-img>\n                                </div>\n                                <ion-card-title class=\"title\">{{place.Name}}</ion-card-title>\n                                <ion-card-subtitle>{{place.Description.substring(0, 150)}}...</ion-card-subtitle>\n                                <app-notice [note]=\"place?.Notice\"></app-notice>\n                            </ion-card-content>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "ndSE":
/*!***************************************************!*\
  !*** ./src/app/Pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "1LYw");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "zuTJ":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "1LYw");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "ndSE");
/* harmony import */ var src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Components/notice/notice.module */ "qwbt");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"],
            src_app_Components_notice_notice_module__WEBPACK_IMPORTED_MODULE_8__["NoticeModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-home-home-module.js.map