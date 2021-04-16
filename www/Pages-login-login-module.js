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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.custom-font {\n  font-family: \"Josefin Sans\", sans-serif;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-title {\n  padding: 20px 0 46px 0;\n  font-weight: 900;\n}\nion-toolbar p {\n  padding: 40px 0 20px 0;\n  font-weight: 600;\n}\nion-toolbar .back-circle {\n  z-index: -1;\n  width: 200px;\n  height: 200px;\n  background: #e5ecf1;\n  position: absolute;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\nion-content {\n  --background: rgba(237, 242, 245, .8);\n}\nion-content .back-blob {\n  z-index: -1;\n  width: 600px;\n  position: absolute;\n  left: -50%;\n  top: 0;\n}\nion-content form {\n  margin-top: 20px;\n}\nion-content .wrap-input {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  margin-bottom: 26px;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.12);\n}\nion-content .input {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n  height: 46px;\n  padding: 0 20px 0 23px;\n}\nion-content .container-form-btn {\n  display: flex;\n  justify-content: center;\n}\nion-content .form-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n  min-width: 160px;\n  height: 42px;\n  background-color: #394752;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  padding-top: 5px;\n  transition: all 0.4s;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.5);\n}\nion-content .form-btn:hover {\n  background-color: #28333b;\n  box-shadow: 0 10px 30px 0px rgba(57, 71, 82, 0.8);\n}\nimg {\n  max-width: 100%;\n  border: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -20px;\n}\n.fa {\n  padding: 20px;\n  font-size: 30px;\n  width: 70px;\n  border-radius: 50%;\n  text-decoration: none;\n  margin: 5px 2px;\n  background-color: #28333b;\n  margin-top: 125px;\n  margin-left: 20px;\n}\n.fa-google:before {\n  content: \"\";\n  color: white;\n}\n.fa-facebook-f:before, .fa-facebook:before {\n  content: \"\";\n  color: white;\n}\n.fa-apple:before {\n  content: \"\";\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksdUNBQUE7QUFFSjtBQUNFO0VBQ0UseUJBQUE7QUFFSjtBQUFJO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUVOO0FBQ0k7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBTjtBQU9FO0VBRUUscUNBQUE7QUFMSjtBQU9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBTE47QUFRSTtFQUNFLGdCQUFBO0FBTk47QUFTSTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0FBUE47QUFVSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBUk47QUFXSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQVROO0FBWUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtBQVZOO0FBYUk7RUFDRSx5QkFBQTtFQUNBLGlEQUFBO0FBWE47QUFnQkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFiSjtBQWdCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBYkY7QUFlQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBWkY7QUFjQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBWEY7QUFhQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBVkYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmN1c3RvbS1mb250IHtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDIwcHggMCA0NnB4IDA7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5pb24tdG9vbGJhciBwIHtcbiAgcGFkZGluZzogNDBweCAwIDIwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi10b29sYmFyIC5iYWNrLWNpcmNsZSB7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWVjZjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyMzcsIDI0MiwgMjQ1LCAuOCk7XG59XG5pb24tY29udGVudCAuYmFjay1ibG9iIHtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNTAlO1xuICB0b3A6IDA7XG59XG5pb24tY29udGVudCBmb3JtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1jb250ZW50IC53cmFwLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjEyKTtcbn1cbmlvbi1jb250ZW50IC5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiBKb3NlZmluIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDIzcHg7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyLWZvcm0tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZm9ybS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTQ3NTI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSg1NywgNzEsIDgyLCAwLjUpO1xufVxuaW9uLWNvbnRlbnQgLmZvcm0tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzMzYjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoNTcsIDcxLCA4MiwgMC44KTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmZhIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogNXB4IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzMzYjtcbiAgbWFyZ2luLXRvcDogMTI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZmEtZ29vZ2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74agXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhLWZhY2Vib29rLWY6YmVmb3JlLCAuZmEtZmFjZWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgppcIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtYXBwbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhblcIjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

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







//import { AuthenticationService } from 'src/app/services/authentication.service';
let LoginPage = class LoginPage {
    constructor(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]),
        });
    }
    onSubmit() {
        //console.log('this.credentialsForm', this.credentialsForm)
        //console.log('this.credentialsForm.value', this.credentialsForm.value)
        this.authService.login(this.credentialsForm.value).subscribe((response) => {
            console.log('response', response);
            //const id = response.id
            this.router.navigate(['menu/profile']);
            // this.router.navigate([`/user/${id}`],re);
        });
    }
    register() {
        this.authService.register(this.credentialsForm.value).subscribe(res => {
            this.authService.login(this.credentialsForm.value).subscribe();
            this.router.navigate(['menu/profile']);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap\" rel=\"stylesheet\">\r\n\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center custom-font\">Sign In</ion-title>\r\n    <ion-buttons>\r\n      <ion-button routerLink=\"/menu/home\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  \r\n  <!-- <svg class=\"back-blob\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill=\"#ED1C25\"\r\n      d=\"M68.6,-33.5C81.6,-17.2,79.6,13.8,65.7,37.6C51.8,61.3,25.9,77.8,2.1,76.6C-21.7,75.4,-43.5,56.5,-54.2,34.6C-65,12.7,-64.8,-12.3,-53.9,-27.4C-43,-42.4,-21.5,-47.6,3.2,-49.4C27.9,-51.2,55.7,-49.7,68.6,-33.5Z\" transform=\"translate(110 120)\" />\r\n  </svg> -->\r\n\r\n  <div class=\"row\">\r\n    <img src=\"../../../assets/logo_THP1.png\">\r\n  </div>\r\n\r\n  <div class=\"ion-padding\">\r\n    <form class=\"ion-padding\" [formGroup]=\"credentialsForm\"  >\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"text\" name=\"user-email\" placeholder=\"Email\" #email formControlName=\"email\">\r\n      </div>\r\n\r\n      <div class=\"wrap-input\">\r\n        <input class=\"input\" type=\"password\" name=\"password\" placeholder=\"Password\" #password formControlName=\"password\">\r\n      </div>\r\n\r\n      <div class=\"container-form-btn\">\r\n        <!-- <button class=\"form-btn custom-font\" type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"!credentialsForm.valid\">Login</button> -->\r\n        <button class=\"form-btn custom-font\" (click)=\"onSubmit()\">Login</button>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <button class=\"fa fa-facebook\"></button>\r\n        <button class=\"fa fa-google\"></button>\r\n        <button class=\"fa fa-apple\"></button>\r\n        \r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <p class=\"ion-text-center custom-font\">Dont' have an account? <a routerLink=\"/signup\">Sign Up</a></p>\r\n  </ion-toolbar>\r\n</ion-footer>");

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