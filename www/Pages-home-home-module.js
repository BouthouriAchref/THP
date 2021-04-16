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





let HomePage = class HomePage {
    constructor(data) {
        this.data = data;
        this.sliderConfig = {
            centeredSlides: true,
            spaceBetween: -60,
            slidesPerView: 1.1,
        };
        this.categoriesSliderConfig = {
            slidesPerView: 2.5,
        };
        this.categories = [];
        this.places = [];
    }
    ngOnInit() {
        //throw new Error('Method not implemented.');
        this.categories = this.data.getCategories();
        this.places = this.data.getPlaces();
        for (let place of this.places) {
            place.noteArray.length = place.note;
            place.noteArray2.length = (5 - place.note);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
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

/***/ "kdWo":
/*!*******************************************!*\
  !*** ./src/app/Pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgba(248, 248, 250, .96);\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 18px;\n  padding-top: 8px;\n}\nion-content {\n  --background: #f8f8fa;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 12px;\n}\n.more {\n  font-size: 12px;\n  color: #FB4E4E;\n}\n.title {\n  font-size: 14px;\n  margin-top: 10px;\n}\n.card {\n  margin-right: 60px;\n  width: 80%;\n  border-radius: 14px;\n}\n.category {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n}\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 100px;\n  overflow: hidden;\n}\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\nion-card-header ion-icon {\n  font-size: 60px;\n}\nion-card-header ion-card-title {\n  font-size: 22px;\n  font-weight: bolder;\n}\n.wrapper {\n  padding-bottom: 0;\n}\nion-badge {\n  padding: 10px;\n  font-size: 14px;\n}\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFJQTtFQUNFLHFCQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7QUFJQTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRkY7QUFNQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBTEo7QUFTRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUU7RUFDRSxnQkFBQTtBQVJKO0FBY0U7RUFDRSxlQUFBO0FBWEo7QUFjRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQVpKO0FBZ0JBO0VBQ0UsaUJBQUE7QUFiRjtBQWdCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBYkY7QUFpQkU7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWROO0FBZ0JNO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZFY7QUFnQlU7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQWRkO0FBaUJVO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtBQWZkIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjUwLCAuOTYpO1xyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y4ZjhmYTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLm1vcmUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI0ZCNEU0RTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG5cclxuLmNhdGVnb3J5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAuaW1nLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjZjI5OTRhO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtc3VidGl0bGU6bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctdG9wOjZweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1zbGlkZXIge1xyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "ktpo":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-item lines=\"Categories\">\n    <ion-avatar slot=\"end\">\n      <img src=\"../../../assets/taher.jpg\" routerLink=\"/menu/profile\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Find, </h2>\n      <h1>Place near you !!</h1>\n    </ion-label>\n  </ion-item>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<div class=\"ion-padding wrapper\">\n  <ion-buttons>\n    <ion-searchbar></ion-searchbar>\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-align-items-baseline\">\n      <ion-col size=\"6\">\n        <h4 class=\"title\">\n          Popular Dishes\n        </h4>\n      </ion-col>\n      <ion-col size=\"6\">\n        <h4 class=\"more ion-text-end\">\n          View more\n        </h4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  </div>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-slides [options]=\"sliderConfig\">\n\n          <ion-slide *ngFor=\"let place of places\">\n            <ion-card class=\"card\">\n              <ion-card-content class=\"ion-text-left\">\n                <div class=\"img-wrapper\">\n                  <ion-img src=\"{{place.image}}\"></ion-img>\n                </div>\n                <ion-card-title class=\"title\">{{place.title}}</ion-card-title>\n                <ion-card-subtitle>{{place.description.substring(0, 100)}}...</ion-card-subtitle>\n                <ion-card-subtitle >\n                  <ion-icon name=\"star\" *ngFor=\"let n of place.noteArray\"></ion-icon>\n                  <ion-icon name=\"star-outline\" *ngFor=\"let n of place.noteArray2\"></ion-icon>\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"ion-padding-horizontal wrapper\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-align-items-baseline\">\n        <ion-col size=\"6\">\n          <h4 class=\"title\">\n            Explore Categories\n          </h4>\n        </ion-col>\n        <ion-col size=\"6\">\n          <h4 class=\"more ion-text-end\">\n            Show more\n          </h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </div>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- <ion-slides [options]=\"categoriesSliderConfig\">\n            <ion-slide>\n              <ion-card class=\"category\" color=\"tertiary\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/taco.svg\"></ion-icon>\n                  <ion-card-title>Mexica</ion-card-title>\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n            <ion-slide>\n              <ion-card class=\"category\" color=\"danger\">\n                <ion-card-header class=\"ion-text-center\">\n                  <ion-icon src=\"assets/cookies.svg\"></ion-icon>\n                  <ion-card-title>Dessert</ion-card-title>\n                  <ion-card-subtitle>Something here</ion-card-subtitle>\n                </ion-card-header>\n              </ion-card>\n            </ion-slide>\n          </ion-slides> -->\n          <div class=\"category-slider ion-padding-start\">\n            <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n              <ion-slide *ngFor=\"let category of categories\">\n                <ion-col>\n                  <h4>{{ category.name }}</h4>\n                  <img src=\"{{ category.image }}\" />\n                </ion-col>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"ion-padding-horizontal wrapper\">\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-align-items-baseline\">\n          <ion-col size=\"6\">\n            <h4 class=\"title\">\n              Recommended Drinks\n            </h4>\n          </ion-col>\n          <ion-col size=\"6\">\n            <h4 class=\"more ion-text-end\">\n              Show more\n            </h4>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      </div>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-slides [options]=\"sliderConfig\">\n              <ion-slide *ngFor=\"let place of places\">\n                <ion-card class=\"card\">\n                  <ion-card-content class=\"ion-text-left\">\n                    <div class=\"img-wrapper\">\n                      <ion-img src=\"{{place.image}}\"></ion-img>\n                    </div>\n                    <ion-card-title class=\"title\">{{place.title}}</ion-card-title>\n                    <ion-card-subtitle>{{place.description.substring(0, 100)}}...</ion-card-subtitle>\n                    <ion-card-subtitle >\n                      <ion-icon name=\"star\" *ngFor=\"let n of place.noteArray\"></ion-icon>\n                      <ion-icon name=\"star-outline\" *ngFor=\"let n of place.noteArray2\"></ion-icon>\n                    </ion-card-subtitle>\n                  </ion-card-content>\n                </ion-card>\n              </ion-slide>\n              \n            </ion-slides>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n\n");

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








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-home-home-module.js.map