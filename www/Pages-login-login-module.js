(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-login-login-module"],{

/***/ "5Ccs":
/*!*****************************************************!*\
  !*** ./src/app/Pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "SIgR");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "5XCt":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.custom-font {\n  font-family: \"Josefin Sans\", sans-serif;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-title {\n  font-weight: 900;\n}\nion-toolbar p {\n  padding: 40px 0 20px 0;\n  font-weight: 600;\n}\nion-toolbar .back-circle {\n  z-index: -1;\n  width: 200px;\n  height: 200px;\n  background: #e5ecf1;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\nion-content {\n  --background: rgba(237, 242, 245, .8);\n}\nion-content .back-blob {\n  z-index: -1;\n  width: 600px;\n  position: absolute;\n  left: -50%;\n  top: 0;\n}\nion-content .wrap-input {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  margin-bottom: 26px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\nion-content .input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n  height: 46px;\n  padding: 0 20px 0 23px;\n}\nion-content .container-form-btn {\n  display: flex;\n  justify-content: center;\n}\nion-content .form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #ed1c24;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\nion-content .form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\nimg {\n  max-width: 100%;\n  border: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -20px;\n}\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 70px;\n  border-radius: 50%;\n  text-decoration: none;\n  margin: 5px 2px;\n  background-color: #28333b;\n  margin-top: 125px;\n  margin-left: 20px;\n}\n.fa-google:before {\n  content: \"\";\n  color: white;\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\";\n  color: white;\n}\n.fa-apple:before {\n  content: \"\";\n  color: white;\n}\n.facebook {\n  background-color: #3B5998;\n  width: 90%;\n  margin-left: 20px;\n  border-radius: 5px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksdUNBQUE7QUFFSjtBQUNBO0VBQ0kseUJBQUE7QUFFSjtBQURJO0VBQ0ksZ0JBQUE7QUFHUjtBQURJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQUdSO0FBREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBR1I7QUFDQTtFQUNJLHFDQUFBO0FBRUo7QUFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtBQUdSO0FBREk7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtBQUdSO0FBREk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFHUjtBQURJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaURBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxpREFBQTtBQUVSO0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVBOztFQUVJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmN1c3RvbS1mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5pb24tdG9vbGJhciBwIHtcbiAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi10b29sYmFyIC5iYWNrLWNpcmNsZSB7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWVjZjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzcsIDI0MiwgMjQ1LCAuOCk7XG59XG5pb24tY29udGVudCAuYmFjay1ibG9iIHtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNTAlO1xuICB0b3A6IDA7XG59XG5pb24tY29udGVudCAud3JhcC1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC4xMik7XG59XG5pb24tY29udGVudCAuaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogSm9zZWZpbiBTYW5zO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAwIDIwcHggMCAyM3B4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lci1mb3JtLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmZvcm0tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYzI0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC41KTtcbn1cbmlvbi1jb250ZW50IC5mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMzM2I7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDU3LCA3MSwgODIsIDAuOCk7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5mYSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDVweCAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMzM2I7XG4gIG1hcmdpbi10b3A6IDEyNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmZhLWdvb2dsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GoFwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1mYWNlYm9vay1mOmJlZm9yZSxcbi5mYS1mYWNlYm9vazpiZWZvcmUge1xuICBjb250ZW50OiBcIu+CmlwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS1hcHBsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+FuVwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQjU5OTg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "SIgR":
/*!*******************************************!*\
  !*** ./src/app/Pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "c+lz");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "5XCt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fb.service */ "SLMv");









//import { AuthenticationService } from 'src/app/services/authentication.service';
let LoginPage = class LoginPage {
    constructor(router, formBuilder, authService, https, fb) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.https = https;
        this.fb = fb;
        this.fb.setupFbLogin();
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
        });
    }
    login() {
        this.fb.loginFacebook();
    }
    onSubmit() {
        this.authService.login(this.credentialsForm.value).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        }));
    }
    register() {
        this.authService.register(this.credentialsForm.value).subscribe(() => {
            this.authService.login(this.credentialsForm.value);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_services_fb_service__WEBPACK_IMPORTED_MODULE_8__["FbService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "c+lz":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap\" rel=\"stylesheet\">\r\n\r\n<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-title class=\"ion-text-center custom-font\">Sign In</ion-title>\r\n        <ion-buttons class=\"space-between\">\r\n            <ion-button style=\"color: #ed1c24;\" routerLink=\"/menu/home\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n    <!-- <svg class=\"back-blob\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill=\"#ED1C25\"\r\n      d=\"M68.6,-33.5C81.6,-17.2,79.6,13.8,65.7,37.6C51.8,61.3,25.9,77.8,2.1,76.6C-21.7,75.4,-43.5,56.5,-54.2,34.6C-65,12.7,-64.8,-12.3,-53.9,-27.4C-43,-42.4,-21.5,-47.6,3.2,-49.4C27.9,-51.2,55.7,-49.7,68.6,-33.5Z\" transform=\"translate(110 120)\" />\r\n  </svg> -->\r\n\r\n    <div class=\"row\">\r\n        <img src=\"../../../assets/logo_THP1.png\">\r\n    </div>\r\n\r\n    <div class=\"ion-padding\">\r\n        <form class=\"ion-padding\" [formGroup]=\"credentialsForm\">\r\n\r\n            <div class=\"wrap-input\">\r\n                <input class=\"input\" type=\"text\" name=\"user-email\" placeholder=\"Email\" #email formControlName=\"email\">\r\n            </div>\r\n\r\n            <div class=\"wrap-input\">\r\n                <input class=\"input\" type=\"password\" name=\"password\" placeholder=\"Password\" #password formControlName=\"password\">\r\n            </div>\r\n\r\n            <div class=\"container-form-btn\">\r\n                <!-- <button class=\"form-btn custom-font\" type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"!credentialsForm.valid\">Login</button> -->\r\n                <button class=\"form-btn custom-font\" (click)=\"onSubmit()\">Login</button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n\r\n    <ion-buttons>\r\n        <ion-button class=\"facebook\" (click)=\"login()\">\r\n            <ion-icon style=\"color: white; margin-right: 20px;\" name=\"logo-facebook\"></ion-icon>\r\n            <p style=\"margin-top: 0;margin-bottom: 0rem;\">Sign up using Facebook</p>\r\n        </ion-button>\r\n    </ion-buttons>\r\n\r\n    <!-- <ion-fab style=\"margin-top: 205px\" vertical=\"center\" horizontal=\"center\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"share\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button>\r\n                <ion-icon name=\"logo-facebook\" (click)=\"login()\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n        <ion-fab-list side=\"start\">\r\n            <ion-fab-button>\r\n                <ion-icon name=\"logo-instagram\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n        <ion-fab-list side=\"end\">\r\n            <ion-fab-button>\r\n                <ion-icon name=\"logo-twitter\"></ion-icon>\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab> -->\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <p class=\"ion-text-center custom-font\">Dont' have an account? <a routerLink=\"/signup\">Sign Up</a></p>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "xCeV":
/*!*********************************************!*\
  !*** ./src/app/Pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "5Ccs");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "SIgR");







// const routes: Router = [
//   {
//     path: '',
//     Component: LoginPage
//   }
// ];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ })

}]);
//# sourceMappingURL=Pages-login-login-module.js.map