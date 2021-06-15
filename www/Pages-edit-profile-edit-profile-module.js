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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n    <div class=\"header\">\n        <ion-buttons class=\"space-between\">\n            <ion-button style=\"color: white;\" routerLink=\"/menu/profile\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n            <div>\n                <ion-button style=\"color: white;\" (click)=\"Submit()\">\n                    <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n                </ion-button>\n            </div>\n        </ion-buttons>\n        <h2>{{USER?.fullname}}</h2>\n    </div>\n\n    <div class=\"flex\">\n        <div class=\"border-red\">\n            <div class=\"border-white\">\n                <div class=\"img-box\">\n                    <ion-buttons class=\"i1\">\n                        <ion-button (click)=\"presentActionSheet()\">\n                            <ion-icon slot=\"icon-only\" name=\"camera-outline\"></ion-icon>\n                        </ion-button>\n                    </ion-buttons>\n                    <div>\n                        <img *ngIf=\"USER?.Avatar\" [src]=\"USER?.Avatar.Path\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ion-padding wrapper\" style=\"padding-top: 0px;\">\n        <ion-grid class=\"ion-no-padding\">\n            <ion-label>\n                <br>\n                <form [formGroup]=\"credentialsForm\">\n                    <div class=\"form-group\">\n                        <label for=\"formGroupExampleInput\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [placeholder]=\"USER?.fullname\" formControlName=\"fullname\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"formGroupExampleInput2\">Date of Birth</label>\n                        <input class=\"form-control\" type=\"date\" id=\"example-date-input\" [placeholder]=\"USER?.Birthday\" formControlName=\"Birthday\">\n                    </div>\n\n\n                    <!-- <label for=\"formGroupExampleInput2\">Gender</label>\n                    <ion-list>\n                        <ion-radio-group formControlName=\"Gender\" (ionChange)=\"radioGroupChange($event)\">\n                            <ion-item>\n                                <ion-label>Male</ion-label>\n                                <ion-radio slot=\"start\" value=\"Male\"></ion-radio>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label>Female</ion-label>\n                                <ion-radio slot=\"start\" value=\"Female\"></ion-radio>\n                            </ion-item>\n                        </ion-radio-group>\n                    </ion-list> -->\n\n                    <div class=\"form-group\">\n                        <ion-label>Gender</ion-label>\n                        <ion-select placeholder=\"Choose Gender\" id=\"sel1\" okText=\"Ok\" cancelText=\"Dismiss\" (change)=\"selectChangeHandlerGender($event)\" class=\"form-control-list\" [placeholder]=\"USER?.Gender\" formControlName=\"Gender\">\n                            <ion-select-option value=\"Male\">Male</ion-select-option>\n                            <ion-select-option value=\"Female\">Female</ion-select-option>\n                        </ion-select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <ion-label>Country</ion-label>\n                        <ion-select placeholder=\"Choose Country\" id=\"sel1\" okText=\"Ok\" cancelText=\"Dismiss\" (change)=\"selectChangeHandlerContry($event)\" class=\"form-control-list\" [placeholder]=\"USER?.Nationalite\" formControlName=\"Nationalite\">\n                            <ion-select-option value=\"Tunisie\">Tunisie</ion-select-option>\n                            <ion-select-option value=\"Maroc\">Maroc</ion-select-option>\n                            <ion-select-option value=\"Algerie\">Algerie</ion-select-option>\n                            <ion-select-option value=\"Libye\">Libye</ion-select-option>\n                            <ion-select-option value=\"France\">France</ion-select-option>\n                            <ion-select-option value=\"Spain\">Spain</ion-select-option>\n                            <ion-select-option value=\"Allemagne\">Allemagne</ion-select-option>\n\n                        </ion-select>\n                    </div>\n                    <div>\n\n                        <!-- <select name=\"nationality\" class=\"form-control\" id=\"sel1\" data-live-search=\"true\">\n              <option value=\"\">-- select one --</option>\n              <option class=\"op\" value=\"afghan\"><i class=\"ae flag\"></i>Afghan</option>\n              <option class=\"op\" value=\"albanian\"><i class=\"united states flag\"></i>Albanian</option>\n              <option class=\"op\" value=\"algerian\">Algerian</option>\n              <option class=\"op\" value=\"american\">American</option>\n              <option class=\"op\" value=\"andorran\">Andorran</option>\n              <option class=\"op\" value=\"angolan\">Angolan</option>\n              <option class=\"op\" value=\"antiguans\">Antiguans</option>\n              <option class=\"op\" value=\"argentinean\">Argentinean</option>\n              <option class=\"op\" value=\"armenian\">Armenian</option>\n              <option class=\"op\" value=\"australian\">Australian</option>\n              <option class=\"op\" value=\"austrian\">Austrian</option>\n              <option value=\"azerbaijani\">Azerbaijani</option>\n              <option value=\"bahamian\">Bahamian</option>\n              <option value=\"bahraini\">Bahraini</option>\n              <option value=\"bangladeshi\">Bangladeshi</option>\n              <option value=\"barbadian\">Barbadian</option>\n              <option value=\"barbudans\">Barbudans</option>\n              <option value=\"batswana\">Batswana</option>\n              <option value=\"belarusian\">Belarusian</option>\n              <option value=\"belgian\">Belgian</option>\n              <option value=\"belizean\">Belizean</option>\n              <option value=\"beninese\">Beninese</option>\n              <option value=\"bhutanese\">Bhutanese</option>\n              <option value=\"bolivian\">Bolivian</option>\n              <option value=\"bosnian\">Bosnian</option>\n              <option value=\"brazilian\">Brazilian</option>\n              <option value=\"british\">British</option>\n              <option value=\"bruneian\">Bruneian</option>\n              <option value=\"bulgarian\">Bulgarian</option>\n              <option value=\"burkinabe\">Burkinabe</option>\n              <option value=\"burmese\">Burmese</option>\n              <option value=\"burundian\">Burundian</option>\n              <option value=\"cambodian\">Cambodian</option>\n              <option value=\"cameroonian\">Cameroonian</option>\n              <option value=\"canadian\">Canadian</option>\n              <option value=\"cape verdean\">Cape Verdean</option>\n              <option value=\"central african\">Central African</option>\n              <option value=\"chadian\">Chadian</option>\n              <option value=\"chilean\">Chilean</option>\n              <option value=\"chinese\">Chinese</option>\n              <option value=\"colombian\">Colombian</option>\n              <option value=\"comoran\">Comoran</option>\n              <option value=\"congolese\">Congolese</option>\n              <option value=\"costa rican\">Costa Rican</option>\n              <option value=\"croatian\">Croatian</option>\n              <option value=\"cuban\">Cuban</option>\n              <option value=\"cypriot\">Cypriot</option>\n              <option value=\"czech\">Czech</option>\n              <option value=\"danish\">Danish</option>\n              <option value=\"djibouti\">Djibouti</option>\n              <option value=\"dominican\">Dominican</option>\n              <option value=\"dutch\">Dutch</option>\n              <option value=\"east timorese\">East Timorese</option>\n              <option value=\"ecuadorean\">Ecuadorean</option>\n              <option value=\"egyptian\">Egyptian</option>\n              <option value=\"emirian\">Emirian</option>\n              <option value=\"equatorial guinean\">Equatorial Guinean</option>\n              <option value=\"eritrean\">Eritrean</option>\n              <option value=\"estonian\">Estonian</option>\n              <option value=\"ethiopian\">Ethiopian</option>\n              <option value=\"fijian\">Fijian</option>\n              <option value=\"filipino\">Filipino</option>\n              <option value=\"finnish\">Finnish</option>\n              <option value=\"french\">French</option>\n              <option value=\"gabonese\">Gabonese</option>\n              <option value=\"gambian\">Gambian</option>\n              <option value=\"georgian\">Georgian</option>\n              <option value=\"german\">German</option>\n              <option value=\"ghanaian\">Ghanaian</option>\n              <option value=\"greek\">Greek</option>\n              <option value=\"grenadian\">Grenadian</option>\n              <option value=\"guatemalan\">Guatemalan</option>\n              <option value=\"guinea-bissauan\">Guinea-Bissauan</option>\n              <option value=\"guinean\">Guinean</option>\n              <option value=\"guyanese\">Guyanese</option>\n              <option value=\"haitian\">Haitian</option>\n              <option value=\"herzegovinian\">Herzegovinian</option>\n              <option value=\"honduran\">Honduran</option>\n              <option value=\"hungarian\">Hungarian</option>\n              <option value=\"icelander\">Icelander</option>\n              <option value=\"indian\">Indian</option>\n              <option value=\"indonesian\">Indonesian</option>\n              <option value=\"iranian\">Iranian</option>\n              <option value=\"iraqi\">Iraqi</option>\n              <option value=\"irish\">Irish</option>\n              <option value=\"israeli\">Israeli</option>\n              <option value=\"italian\">Italian</option>\n              <option value=\"ivorian\">Ivorian</option>\n              <option value=\"jamaican\">Jamaican</option>\n              <option value=\"japanese\">Japanese</option>\n              <option value=\"jordanian\">Jordanian</option>\n              <option value=\"kazakhstani\">Kazakhstani</option>\n              <option value=\"kenyan\">Kenyan</option>\n              <option value=\"kittian and nevisian\">Kittian and Nevisian</option>\n              <option value=\"kuwaiti\">Kuwaiti</option>\n              <option value=\"kyrgyz\">Kyrgyz</option>\n              <option value=\"laotian\">Laotian</option>\n              <option value=\"latvian\">Latvian</option>\n              <option value=\"lebanese\">Lebanese</option>\n              <option value=\"liberian\">Liberian</option>\n              <option value=\"libyan\">Libyan</option>\n              <option value=\"liechtensteiner\">Liechtensteiner</option>\n              <option value=\"lithuanian\">Lithuanian</option>\n              <option value=\"luxembourger\">Luxembourger</option>\n              <option value=\"macedonian\">Macedonian</option>\n              <option value=\"malagasy\">Malagasy</option>\n              <option value=\"malawian\">Malawian</option>\n              <option value=\"malaysian\">Malaysian</option>\n              <option value=\"maldivan\">Maldivan</option>\n              <option value=\"malian\">Malian</option>\n              <option value=\"maltese\">Maltese</option>\n              <option value=\"marshallese\">Marshallese</option>\n              <option value=\"mauritanian\">Mauritanian</option>\n              <option value=\"mauritian\">Mauritian</option>\n              <option value=\"mexican\">Mexican</option>\n              <option value=\"micronesian\">Micronesian</option>\n              <option value=\"moldovan\">Moldovan</option>\n              <option value=\"monacan\">Monacan</option>\n              <option value=\"mongolian\">Mongolian</option>\n              <option value=\"moroccan\">Moroccan</option>\n              <option value=\"mosotho\">Mosotho</option>\n              <option value=\"motswana\">Motswana</option>\n              <option value=\"mozambican\">Mozambican</option>\n              <option value=\"namibian\">Namibian</option>\n              <option value=\"nauruan\">Nauruan</option>\n              <option value=\"nepalese\">Nepalese</option>\n              <option value=\"new zealander\">New Zealander</option>\n              <option value=\"ni-vanuatu\">Ni-Vanuatu</option>\n              <option value=\"nicaraguan\">Nicaraguan</option>\n              <option value=\"nigerien\">Nigerien</option>\n              <option value=\"north korean\">North Korean</option>\n              <option value=\"northern irish\">Northern Irish</option>\n              <option value=\"norwegian\">Norwegian</option>\n              <option value=\"omani\">Omani</option>\n              <option value=\"pakistani\">Pakistani</option>\n              <option value=\"palauan\">Palauan</option>\n              <option value=\"panamanian\">Panamanian</option>\n              <option value=\"papua new guinean\">Papua New Guinean</option>\n              <option value=\"paraguayan\">Paraguayan</option>\n              <option value=\"peruvian\">Peruvian</option>\n              <option value=\"polish\">Polish</option>\n              <option value=\"portuguese\">Portuguese</option>\n              <option value=\"qatari\">Qatari</option>\n              <option value=\"romanian\">Romanian</option>\n              <option value=\"russian\">Russian</option>\n              <option value=\"rwandan\">Rwandan</option>\n              <option value=\"saint lucian\">Saint Lucian</option>\n              <option value=\"salvadoran\">Salvadoran</option>\n              <option value=\"samoan\">Samoan</option>\n              <option value=\"san marinese\">San Marinese</option>\n              <option value=\"sao tomean\">Sao Tomean</option>\n              <option value=\"saudi\">Saudi</option>\n              <option value=\"scottish\">Scottish</option>\n              <option value=\"senegalese\">Senegalese</option>\n              <option value=\"serbian\">Serbian</option>\n              <option value=\"seychellois\">Seychellois</option>\n              <option value=\"sierra leonean\">Sierra Leonean</option>\n              <option value=\"singaporean\">Singaporean</option>\n              <option value=\"slovakian\">Slovakian</option>\n              <option value=\"slovenian\">Slovenian</option>\n              <option value=\"solomon islander\">Solomon Islander</option>\n              <option value=\"somali\">Somali</option>\n              <option value=\"south african\">South African</option>\n              <option value=\"south korean\">South Korean</option>\n              <option value=\"spanish\">Spanish</option>\n              <option value=\"sri lankan\">Sri Lankan</option>\n              <option value=\"sudanese\">Sudanese</option>\n              <option value=\"surinamer\">Surinamer</option>\n              <option value=\"swazi\">Swazi</option>\n              <option value=\"swedish\">Swedish</option>\n              <option value=\"swiss\">Swiss</option>\n              <option value=\"syrian\">Syrian</option>\n              <option value=\"taiwanese\">Taiwanese</option>\n              <option value=\"tajik\">Tajik</option>\n              <option value=\"tanzanian\">Tanzanian</option>\n              <option value=\"thai\">Thai</option>\n              <option value=\"togolese\">Togolese</option>\n              <option value=\"tongan\">Tongan</option>\n              <option value=\"trinidadian or tobagonian\">Trinidadian or Tobagonian</option>\n              <option value=\"tunisian\">Tunisian</option>\n              <option value=\"turkish\">Turkish</option>\n              <option value=\"tuvaluan\">Tuvaluan</option>\n              <option value=\"ugandan\">Ugandan</option>\n              <option value=\"ukrainian\">Ukrainian</option>\n              <option value=\"uruguayan\">Uruguayan</option>\n              <option value=\"uzbekistani\">Uzbekistani</option>\n              <option value=\"venezuelan\">Venezuelan</option>\n              <option value=\"vietnamese\">Vietnamese</option>\n              <option value=\"welsh\">Welsh</option>\n              <option value=\"yemenite\">Yemenite</option>\n              <option value=\"zambian\">Zambian</option>\n              <option value=\"zimbabwean\">Zimbabwean</option>\n            </select> -->\n\n                        <label for=\"formGroupExampleInput\">Change Passwod</label>\n\n                        <div class=\"input-group\" style=\"margin: 0 0 5px;\">\n                            <input class=\"form-control\" #passInput [type]=\"showPassword ? 'text' : 'password'\" placeholder=\"Type your current password\" formControlName=\"oldpassword\">\n                            <span class=\"input-group-btn\">\n                                <!-- <button class=\"btn btn-default\" type=\"submit\">\n                                <ion-icon name=\"eye\"></ion-icon>\n                                </button> -->\n                                <ion-buttons>\n                                    <ion-button (click)=\"showHidepassword()\">\n                                        <ion-icon *ngIf=\"showPassword\" slot=\"icon-only\" name=\"eye\"></ion-icon>\n                                        <ion-icon *ngIf=\"!showPassword\" slot=\"icon-only\" name=\"eye-off\"></ion-icon>\n                                    </ion-button>\n                                </ion-buttons>\n                            </span>\n                        </div>\n\n                        <div class=\"input-group\" style=\"margin: 0 0 5px;\">\n                            <input class=\"form-control\" #passInput [type]=\"showPassword1 ? 'text' : 'password'\" placeholder=\"Type your new password (6 characters min)\" formControlName=\"newpassword\">\n                            <span class=\"input-group-btn\">\n                            </span>\n                        </div>\n\n                        <div class=\"input-group\" style=\"margin: 0 0 5px;\">\n                            <input class=\"form-control\" #passInput [type]=\"showPassword2 ? 'text' : 'password'\" placeholder=\"Confirm your new password\" formControlName=\"confirmpassword\">\n                            <span class=\"input-group-btn\">\n\n                            </span>\n                        </div>\n                    </div>\n                </form>\n            </ion-label>\n        </ion-grid>\n    </div>\n\n    <!-- <p>response</p>\n    <p>{{this.response | json}}</p>\n    <p>error</p>\n    <p>{{this.error | json}}</p> -->\n</ion-content>");

/***/ }),

/***/ "NmZj":
/*!***********************************************************!*\
  !*** ./src/app/Pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f8f8fa;\n}\n\n.header {\n  height: 206px;\n  background-color: #ed1c24;\n  width: 100%;\n}\n\n.header h2 {\n  color: white;\n  text-align: center;\n  font-weight: bold;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.followings p {\n  color: white;\n  margin: 8px 0px 0px 0px;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 130px;\n  width: 130px;\n}\n\n.border-white {\n  border: white solid 4px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-red {\n  border: 7px solid #ff5757;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  margin-top: -76px;\n}\n\n.ionicon {\n  stroke: currentcolor;\n  color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.card {\n  margin: 0;\n  margin-right: 30px;\n  width: 80%;\n  box-shadow: none;\n  border-radius: 14px;\n}\n\nion-card-content .img-wrapper {\n  border-radius: 14px;\n  height: 200px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\nion-card-content ion-icon {\n  color: #f2994a;\n  padding-right: 4px;\n}\n\nion-card-content ion-card-subtitle:last-of-type {\n  padding-top: 6px;\n}\n\n.i1 {\n  color: white;\n  position: absolute;\n  top: 23%;\n  left: 44%;\n  font-size: 30px;\n}\n\n.i2 {\n  color: white;\n  position: absolute;\n  top: 27%;\n  left: 60%;\n  font-size: 30px;\n}\n\n.i3 {\n  color: white;\n  position: absolute;\n  top: 27%;\n  left: 30%;\n  font-size: 30px;\n}\n\n.couverture {\n  min-height: 110px;\n  height: 100%;\n  width: 100%;\n  padding-top: 1px;\n  background-blend-mode: color-burn;\n  background-size: cover;\n}\n\n.form-control:focus {\n  border-color: #ff3838;\n  box-shadow: 0 0 0 0.2rem rgba(255, 56, 56, 0.25);\n}\n\n.form-control-list {\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control-list:focus {\n  border-color: #ff3838;\n  box-shadow: 0 0 0 0.2rem rgba(255, 56, 56, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUVJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBRUk7RUFDSSxnQkFBQTtBQUFSOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxnREFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsZ0RBQUE7QUFESiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjhmOGZhO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGhlaWdodDogMjA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzI0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3dpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvbGxvd2luZ3MgcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmltZy1ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItd2hpdGUge1xyXG4gICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItcmVkIHtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkICNmZjU3NTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC03NnB4O1xyXG59XHJcblxyXG4uaW9uaWNvbiB7XHJcbiAgICBzdHJva2U6IGN1cnJlbnRjb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZjI5OTRhO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmkxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjMlO1xyXG4gICAgbGVmdDogNDQlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uaTIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNyU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5pMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI3JTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmNvdXZlcnR1cmUge1xyXG4gICAgbWluLWhlaWdodDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yLWJ1cm47XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmMzgzODtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgNTYsIDU2LCAwLjI1KTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWxpc3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYzODM4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCA1NiwgNTYsIDAuMjUpO1xyXG59XHJcblxyXG4vLyAub3Age1xyXG4vLyAgICAgd2lkdGg6IDIwJTtcclxuLy8gfVxyXG4vLyBzZWxlY3Q6aG92ZXIge1xyXG4vLyAgICAgY29sb3I6ICM0NjQ0NDQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgYm9keXtcclxuLy8gICAgICAgICBwYWRkaW5nOjEwMHB4IDA7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWZlZmVmXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgYSwgYTpob3ZlcntcclxuLy8gICAgICAgICBjb2xvcjojMzMzXHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4vLyAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIFtjbGFzc149XCJmYS1cIl0sIFtjbGFzcyo9XCIgZmEtXCJdIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgLkxvZ2luSW5wdXQge1xyXG4vLyAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgfSJdfQ== */");

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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











let EditProfilePage = class EditProfilePage {
    constructor(profile, formBuilder, navCtrl, actionSheetCtrl, imagesService, modalcontroller, storage, alertController, camera) {
        this.profile = profile;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagesService = imagesService;
        this.modalcontroller = modalcontroller;
        this.storage = storage;
        this.alertController = alertController;
        this.camera = camera;
        this.ID_USER = 'id';
        this.images = [];
        this.showPassword = false;
        this.showPassword1 = false;
        this.showPassword2 = false;
        this.isOpened = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].url;
        this.profile.ProfileSubjectEvent.subscribe(res => {
            this.USER = res;
            //console.log('_in edit profile__',res)
        });
        this.profile.EditProfileSubjectEvent.subscribe(res => {
            if (res) {
                this.ngOnInit();
            }
        });
    }
    ngOnInit() {
        this.storage.get(this.ID_USER).then((res) => {
            //console.log('res', res)
            this.profile.findUserById(res).subscribe((user) => {
                this.USER = user;
                console.log('user', user);
            });
        });
        this.credentialsForm = this.formBuilder.group({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            Birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            Nationalite: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](''),
            oldpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(6)]),
            newpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(6)]),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(6)])
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
            this.updateImage(imageData);
        });
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
            this.updateImage(imageData);
        });
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let actionSheet = yield this.actionSheetCtrl.create({
                //title: 'Modify your album',
                buttons: [
                    {
                        text: 'Load from Source',
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
                        role: 'cancel',
                    }
                ]
            });
            actionSheet.present();
        });
    }
    updateImage(img) {
        this.storage.get(this.ID_USER).then((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.profile.uploadImage(yield resp, img).then(res => {
                this.response = res;
            }).catch(err => {
                this.error = err;
            });
        }));
    }
    showHidepassword() {
        this.showPassword = !this.showPassword;
        this.showPassword1 = !this.showPassword1;
        this.showPassword2 = !this.showPassword2;
    }
    selectChangeHandlerContry(event) {
        this.credentialsForm.controls['Nationalite'].setValue(event.target.value);
    }
    selectChangeHandlerGender(event) {
        this.credentialsForm.controls['Gender'].setValue(event.target.value);
    }
    Submit() {
        // console.log('_____',this.credentialsForm.value.oldpassword)
        // console.log('_____',this.credentialsForm.value.newpassword)
        // console.log('_____',this.credentialsForm.value.confirmpassword)
        if (this.credentialsForm.valid) {
            if (this.credentialsForm.value.oldpassword && this.credentialsForm.value.newpassword == this.credentialsForm.value.confirmpassword) {
                this.profile.updatePassword(this.USER._id, this.credentialsForm.value).subscribe(res => {
                    if (res.updatePassword) {
                        //this.profile.updateProfile(this.USER._id,this.credentialsForm.value)
                        this.credentialsForm.reset();
                        this.showAlert('Info', 'Profile Update Successfully');
                    }
                    else {
                        this.showAlert(res.head, res.message);
                    }
                });
            }
        }
        else {
            this.showAlert('Warning', 'You need to your Password');
        }
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
EditProfilePage.ctorParameters = () => [
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: src_app_services_images_service__WEBPACK_IMPORTED_MODULE_4__["ImagesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] }
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