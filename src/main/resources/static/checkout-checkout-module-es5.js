function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
  /***/
  "./src/app/checkout/billing-details/billing-details.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/checkout/billing-details/billing-details.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UserDetails, BillingDetailsComponent */

  /***/
  function srcAppCheckoutBillingDetailsBillingDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetails", function () {
      return UserDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillingDetailsComponent", function () {
      return BillingDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserDetails = function UserDetails() {
      _classCallCheck(this, UserDetails);
    };

    var BillingDetailsComponent = /*#__PURE__*/function () {
      function BillingDetailsComponent(router) {
        _classCallCheck(this, BillingDetailsComponent);

        this.router = router;
      }

      _createClass(BillingDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = new UserDetails();
          this.userDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.address2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.state, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.zip, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "updateUserDetails",
        value: function updateUserDetails() {
          this.router.navigate(['checkout/checkout', {
            outlets: {
              checkOutlet: ['result']
            }
          }]);
        }
      }]);

      return BillingDetailsComponent;
    }();

    BillingDetailsComponent.ɵfac = function BillingDetailsComponent_Factory(t) {
      return new (t || BillingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    BillingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BillingDetailsComponent,
      selectors: [["app-billing-details"]],
      decls: 59,
      vars: 1,
      consts: [[1, "container"], [1, "container", "mt-3"], [1, "col-md", "order-md-1"], [1, "mb-3"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", "required", "", 1, "form-control"], [1, "invalid-feedback"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", "name", "lastName", "required", "", 1, "form-control"], ["for", "email"], [1, "text-muted"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", 1, "form-control"], ["for", "address"], ["type", "text", "id", "address", "placeholder", "1234 Main St", "formControlName", "address", "name", "address1", "required", "", 1, "form-control"], ["for", "address2"], ["type", "text", "id", "address2", "placeholder", "Apartment or suite", "formControlName", "address2", "name", "address2", 1, "form-control"], [1, "col-md-4", "mb-3"], ["for", "state"], ["id", "state", "formControlName", "state", "name", "state", "required", "", 1, "custom-select", "d-block", "w-100"], ["value", ""], [1, "col-md-3", "mb-3"], ["for", "zip"], ["type", "text", "id", "zip", "placeholder", "", "formControlName", "zip", "name", "zip", "required", "", 1, "form-control"], [1, "mb-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block"]],
      template: function BillingDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Billing Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BillingDetailsComponent_Template_form_ngSubmit_5_listener() {
            return ctx.updateUserDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Valid first name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Valid last name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Please enter a valid email address for shipping updates. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Please enter your shipping address. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "California");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Please provide a valid state. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Zip code required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Continue to checkout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userDetailsForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillingDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-billing-details',
          templateUrl: './billing-details.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/checkout/checkout-navbar/checkout-navbar.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/checkout/checkout-navbar/checkout-navbar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CheckoutNavbarComponent */

  /***/
  function srcAppCheckoutCheckoutNavbarCheckoutNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutNavbarComponent", function () {
      return CheckoutNavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["./"];
    };

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    var _c2 = function _c2() {
      return ["shipping-details"];
    };

    var _c3 = function _c3(a0) {
      return {
        checkOutlet: a0
      };
    };

    var _c4 = function _c4(a0) {
      return {
        outlets: a0
      };
    };

    var _c5 = function _c5(a1) {
      return ["./", a1];
    };

    var _c6 = function _c6() {
      return ["billing-details"];
    };

    var _c7 = function _c7(a0) {
      return [a0];
    };

    var _c8 = function _c8() {
      return ["result"];
    };

    var CheckoutNavbarComponent = /*#__PURE__*/function () {
      function CheckoutNavbarComponent() {
        _classCallCheck(this, CheckoutNavbarComponent);
      }

      _createClass(CheckoutNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckoutNavbarComponent;
    }();

    CheckoutNavbarComponent.ɵfac = function CheckoutNavbarComponent_Factory(t) {
      return new (t || CheckoutNavbarComponent)();
    };

    CheckoutNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckoutNavbarComponent,
      selectors: [["app-checkout-navbar"]],
      decls: 22,
      vars: 30,
      consts: [[1, "text-center"], ["id", "status-buttons", 1, "board-inner"], ["id", "myTab", 1, "nav", "nav-tabs"], [1, "liner"], ["id", "productsTab", 2, "margin", "auto"], ["routerLinkActive", "active", "data-toggle", "tab", "title", "Product Summary", 3, "routerLink", "routerLinkActiveOptions"], [1, "round-tabs", "one"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"], ["id", "shippingTab", 2, "margin", "auto"], ["routerLinkActive", "active", "data-toggle", "tab", "title", "Shipping Details", 3, "routerLink"], [1, "round-tabs", "two"], ["aria-hidden", "true", 1, "fa", "fa-truck"], ["id", "billingTab", 2, "margin", "auto"], ["routerLinkActive", "active", "data-toggle", "tab", "title", "Confirmation", 3, "routerLink", "routerLinkActiveOptions"], [1, "round-tabs", "three"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], ["id", "resultTab", 2, "margin", "auto"], ["routerLinkActive", "active", "data-toggle", "tab", "title", "Payment", 3, "routerLink"], [1, "round-tabs", "four"], ["aria-hidden", "true", 1, "fa", "fa-credit-card"], [1, "clearfix"]],
      template: function CheckoutNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Checking Out Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2)))));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6)))))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c8)))));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".board[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 40px auto;\n  margin-bottom: 0;\n  box-sizing: border-box;\n}\n.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n.nav[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.liner[_ngcontent-%COMP%] {\n  height: 2px;\n  background: #ddd;\n  position: absolute;\n  width: 78%;\n  margin: 63px auto;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 20px auto;\n  border-radius: 100%;\n  padding: 0;\n}\n.nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\na[_ngcontent-%COMP%] {\n  color: #337ab7;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n#status-buttons[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span.round-tabs.one[_ngcontent-%COMP%]{\n  background: #22c222;\n  color: #fff;\n}\n#status-buttons[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span.round-tabs.two[_ngcontent-%COMP%] {\n  background: #febe29;\n  color: #fff;\n}\n#status-buttons[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span.round-tabs.three[_ngcontent-%COMP%] {\n  background: #3e5e9a;\n  color: #fff;\n}\nspan.round-tabs.one[_ngcontent-%COMP%] {\n  color: #22c222;\n  border: 2px solid #22c222;\n}\nspan.round-tabs.two[_ngcontent-%COMP%] {\n  color: #febe29;\n  border: 2px solid #febe29;\n}\nspan.round-tabs.three[_ngcontent-%COMP%] {\n  color: #3e5e9a;\n  border: 2px solid #3e5e9a;\n}\nspan.round-tabs.four[_ngcontent-%COMP%] {\n  color: #f1685e;\n  border: 2px solid #f1685e;\n}\nspan.round-tabs[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  border-radius: 100px;\n  background: #fff;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQtbmF2YmFyL2NoZWNrb3V0LW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC1uYXZiYXIvY2hlY2tvdXQtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmQgLm5hdi10YWJzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5uYXYtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ubmF2IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpbmVyIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc4JTtcbiAgbWFyZ2luOiA2M3B4IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuLm5hdi10YWJzID4gbGkge1xuICB3aWR0aDogMjUlO1xufVxuLm5hdi10YWJzID4gbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLm5hdiA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXYtdGFicyA+IGxpIGEge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi5uYXYtdGFicyA+IGxpID4gYSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG5cbi5uYXYgPiBsaSA+IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5hIHtcbiAgY29sb3I6ICMzMzdhYjc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiNzdGF0dXMtYnV0dG9ucyBhLmFjdGl2ZSBzcGFuLnJvdW5kLXRhYnMub25le1xuICBiYWNrZ3JvdW5kOiAjMjJjMjIyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3N0YXR1cy1idXR0b25zIGEuYWN0aXZlIHNwYW4ucm91bmQtdGFicy50d28ge1xuICBiYWNrZ3JvdW5kOiAjZmViZTI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI3N0YXR1cy1idXR0b25zIGEuYWN0aXZlIHNwYW4ucm91bmQtdGFicy50aHJlZSB7XG4gIGJhY2tncm91bmQ6ICMzZTVlOWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5zcGFuLnJvdW5kLXRhYnMub25lIHtcbiAgY29sb3I6ICMyMmMyMjI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMmMyMjI7XG59XG5zcGFuLnJvdW5kLXRhYnMudHdvIHtcbiAgY29sb3I6ICNmZWJlMjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZWJlMjk7XG59XG5zcGFuLnJvdW5kLXRhYnMudGhyZWUge1xuICBjb2xvcjogIzNlNWU5YTtcbiAgYm9yZGVyOiAycHggc29saWQgIzNlNWU5YTtcbn1cbnNwYW4ucm91bmQtdGFicy5mb3VyIHtcbiAgY29sb3I6ICNmMTY4NWU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMTY4NWU7XG59XG5zcGFuLnJvdW5kLXRhYnMge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBsaW5lLWhlaWdodDogNzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-checkout-navbar",
          templateUrl: "./checkout-navbar.component.html",
          styleUrls: ["./checkout-navbar.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/checkout/checkout.component.ts":
  /*!************************************************!*\
    !*** ./src/app/checkout/checkout.component.ts ***!
    \************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./checkout-navbar/checkout-navbar.component */
    "./src/app/checkout/checkout-navbar/checkout-navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CheckoutComponent = function CheckoutComponent() {
      _classCallCheck(this, CheckoutComponent);
    };

    CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)();
    };

    CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container"], [1, "board"], [1, "tab-content"], ["name", "checkOutlet"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-checkout-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-checkout',
          templateUrl: './checkout.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/checkout/checkout.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.module.ts ***!
    \*********************************************/

  /*! exports provided: CheckoutModule */

  /***/
  function srcAppCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutModule", function () {
      return CheckoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/checkout/products/products.component.ts");
    /* harmony import */


    var _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shipping-details/shipping-details.component */
    "./src/app/checkout/shipping-details/shipping-details.component.ts");
    /* harmony import */


    var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./checkout.routing.module */
    "./src/app/checkout/checkout.routing.module.ts");
    /* harmony import */


    var _checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./checkout-navbar/checkout-navbar.component */
    "./src/app/checkout/checkout-navbar/checkout-navbar.component.ts");
    /* harmony import */


    var _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./billing-details/billing-details.component */
    "./src/app/checkout/billing-details/billing-details.component.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/checkout/result/result.component.ts");

    var CheckoutModule = function CheckoutModule() {
      _classCallCheck(this, CheckoutModule);
    };

    CheckoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CheckoutModule
    });
    CheckoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CheckoutModule_Factory(t) {
        return new (t || CheckoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckoutModule, {
        declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"], _checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutNavbarComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_4__["ShippingDetailsComponent"], _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_8__["BillingDetailsComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"], _checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutNavbarComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_4__["ShippingDetailsComponent"], _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_8__["BillingDetailsComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_9__["ResultComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/checkout/checkout.routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/checkout/checkout.routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CheckoutRoutingModule */

  /***/
  function srcAppCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutRoutingModule", function () {
      return CheckoutRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/checkout/products/products.component.ts");
    /* harmony import */


    var _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shipping-details/shipping-details.component */
    "./src/app/checkout/shipping-details/shipping-details.component.ts");
    /* harmony import */


    var _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./billing-details/billing-details.component */
    "./src/app/checkout/billing-details/billing-details.component.ts");
    /* harmony import */


    var _checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/checkout/result/result.component.ts");
    /* harmony import */


    var _services_checkout_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/checkout.guard */
    "./src/app/checkout/services/checkout.guard.ts");

    var routes = [{
      path: 'checkout',
      component: _checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"],
      canActivate: [_services_checkout_guard__WEBPACK_IMPORTED_MODULE_7__["CheckoutGuard"]],
      children: [{
        path: "",
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
        outlet: "checkOutlet"
      }, {
        path: "shipping-details",
        component: _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_3__["ShippingDetailsComponent"],
        outlet: "checkOutlet"
      }, {
        path: "billing-details",
        component: _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_4__["BillingDetailsComponent"],
        outlet: "checkOutlet"
      }, {
        path: "result",
        component: _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"],
        outlet: "checkOutlet"
      }]
    }];

    var CheckoutRoutingModule = function CheckoutRoutingModule() {
      _classCallCheck(this, CheckoutRoutingModule);
    };

    CheckoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CheckoutRoutingModule
    });
    CheckoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CheckoutRoutingModule_Factory(t) {
        return new (t || CheckoutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckoutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/checkout/products/products.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/checkout/products/products.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppCheckoutProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../cart/services/cart.service */
    "./src/app/cart/services/cart.service.ts");
    /* harmony import */


    var src_app_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/products/services/products.service */
    "./src/app/products/services/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ProductsComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", product_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", product_r1.price, "");
      }
    }

    var _c0 = function _c0() {
      return ["shipping-details"];
    };

    var _c1 = function _c1(a0) {
      return {
        checkOutlet: a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        outlets: a0
      };
    };

    var _c3 = function _c3(a0) {
      return [a0];
    };

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(cartService, productService) {
        _classCallCheck(this, ProductsComponent);

        this.cartService = cartService;
        this.productService = productService;
        this.products = [];
        this.totalPrice = 0;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.cartService.items.forEach(function (item) {
            var product = _this.productService.getProduct(item);

            _this.products.push(product);

            _this.totalPrice += product.price;
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 12,
      vars: 10,
      consts: [[1, "container"], [1, "list-group", "mb-3"], ["class", "list-group-item d-flex justify-content-between lh-condensed", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between"], [1, "float-right"], ["routerLinkActive", "active", 1, "btn", "btn-default", 3, "routerLink"], [1, "list-group-item", "d-flex", "justify-content-between", "lh-condensed"], ["width", "150", "height", "100", 3, "src", "alt"], [2, "padding", "10px"], [1, "my-0"], [1, "text-muted"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_li_2_Template, 8, 4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total (INR)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.totalPrice, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)))));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: _cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: src_app_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/checkout/result/result.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/checkout/result/result.component.ts ***!
    \*****************************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppCheckoutResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/cart/services/cart.service */
    "./src/app/cart/services/cart.service.ts");
    /* harmony import */


    var src_app_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/products/services/products.service */
    "./src/app/products/services/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["receipt"];

    function ResultComponent_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", product_r2.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", product_r2.price, "");
      }
    }

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent(cartService, productService) {
        _classCallCheck(this, ResultComponent);

        this.cartService = cartService;
        this.productService = productService;
        this.products = [];
        this.totalPrice = 0;
        this.tax = 6.4;
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.cartService.items.forEach(function (id) {
            _this2.products.push(_this2.productService.getProduct(id));
          });
          this.products.forEach(function (product) {
            _this2.totalPrice += product.price;
          });
          this.date = Date.now();
        }
      }, {
        key: "downloadReceipt",
        value: function downloadReceipt() {
          var data = document.getElementById("receipt"); // let doc = new jsPDF('p','pt', 'a4');
          // let handleElement = {
          //   '#editor':function(element,renderer){
          //     return true;
          //   }
          // };
          // doc.fromHTML(data.innerHTML,15,15,{
          //   'width': 200,
          //   'elementHandlers': handleElement
          // });
          // doc.save('angular-demo.pdf');
          // console.log(data);
          // html2canvas(data).then((canvas) => {
          //   // Few necessary setting options
          //   // const imgWidth = 208;
          //   const pageHeight = 295;
          //   // const imgHeight = (canvas.height * imgWidth) / canvas.width;
          //   const contentDataURL = canvas.toDataURL("image/png");
          //   const pdf = new jsPDF(); // A4 size page of PDF
          //   const position = 0;
          //   const x_axis= 150;
          //   const y_axis = 10;
          //   console.log(this.receipt.nativeElement.offsetHeight);
          //   const imgHeight = this.receipt.nativeElement.offsetHeight;
          //   const imgWidth = this.receipt.nativeElement.offsetWidth;
          //   pdf.addImage(contentDataURL, "PNG", x_axis, y_axis, imgWidth, imgHeight);
          //   pdf.save("ikismail.pdf"); // Generated PDF
          // });
        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["app-result"]],
      viewQuery: function ResultComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.receipt = _t.first);
        }
      },
      decls: 73,
      vars: 7,
      consts: [["id", "receipt", 1, "mt-5", "mb-5"], ["name", "", "id", "", "href", "javascript:;;", "role", "button", 1, "btn", "btn-primary", 2, "position", "relative", "float", "right", 3, "click"], [1, "fa", "fa-download"], [1, "row"], ["receipt", ""], [1, "well", "col-xs-10", "col-sm-10", "col-md-6", "col-xs-offset-1", "col-sm-offset-1", "col-md-offset-3", 2, "margin", "auto"], [1, "col-xs-6", "col-sm-6", "col-md-6"], ["title", "Phone"], [1, "col-xs-6", "col-sm-6", "col-md-6", "text-right"], [1, "text-center"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "text-right"], [1, "text-center", "text-danger"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "btn-block"], [1, "glyphicon", "glyphicon-chevron-right"], [1, "col-md-9"], [1, "col-md-1", "text-center"]],
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_a_click_1_listener() {
            return ctx.downloadReceipt();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Receipt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ikismail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tamil Nadu, IN 600094 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "abbr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "P:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (+91) 8124794942 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Receipt #: 34522677W");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Receipt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ResultComponent_tr_41_Template, 10, 3, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Subtotal: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Tax: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Total: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Pay Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 5, ctx.date), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.tax, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.totalPrice + ctx.tax, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-result",
          templateUrl: "./result.component.html",
          styleUrls: ["./result.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: src_app_products_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, {
        receipt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["receipt"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/checkout/services/checkout.guard.ts":
  /*!*****************************************************!*\
    !*** ./src/app/checkout/services/checkout.guard.ts ***!
    \*****************************************************/

  /*! exports provided: CheckoutGuard */

  /***/
  function srcAppCheckoutServicesCheckoutGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function () {
      return CheckoutGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _cart_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../cart/services/cart.service */
    "./src/app/cart/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CheckoutGuard = /*#__PURE__*/function () {
      function CheckoutGuard(authService, cartService, router) {
        _classCallCheck(this, CheckoutGuard);

        this.authService = authService;
        this.cartService = cartService;
        this.router = router;
      }

      _createClass(CheckoutGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (!this.authService.isLoggedIn) {
            if (this.cartService.items.length !== 0) {
              return this.router.navigate(["/auth/login"], {
                queryParams: {
                  returnTo: "/checkout/checkout"
                }
              });
            } else {
              return this.router.navigate(["/"]);
            }
          }

          return true;
        }
      }]);

      return CheckoutGuard;
    }();

    CheckoutGuard.ɵfac = function CheckoutGuard_Factory(t) {
      return new (t || CheckoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    CheckoutGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CheckoutGuard,
      factory: CheckoutGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _cart_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/checkout/shipping-details/shipping-details.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/checkout/shipping-details/shipping-details.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserDetails, ShippingDetailsComponent */

  /***/
  function srcAppCheckoutShippingDetailsShippingDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetails", function () {
      return UserDetails;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingDetailsComponent", function () {
      return ShippingDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserDetails = function UserDetails() {
      _classCallCheck(this, UserDetails);
    };

    var ShippingDetailsComponent = /*#__PURE__*/function () {
      function ShippingDetailsComponent(router, activatedRoute) {
        _classCallCheck(this, ShippingDetailsComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(ShippingDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDetails = new UserDetails();
          this.userDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.address2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.state, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userDetails.zip, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "updateUserDetails",
        value: function updateUserDetails() {
          this.router.navigate(['checkout/checkout', {
            outlets: {
              checkOutlet: ['billing-details']
            }
          }]);
        }
      }]);

      return ShippingDetailsComponent;
    }();

    ShippingDetailsComponent.ɵfac = function ShippingDetailsComponent_Factory(t) {
      return new (t || ShippingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ShippingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShippingDetailsComponent,
      selectors: [["app-shipping-details"]],
      decls: 59,
      vars: 1,
      consts: [[1, "container"], [1, "container", "mt-3"], [1, "col-md", "order-md-1"], [1, "mb-3"], [1, "needs-validation", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", "required", "", 1, "form-control"], [1, "invalid-feedback"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", "name", "lastName", "required", "", 1, "form-control"], ["for", "email"], [1, "text-muted"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", 1, "form-control"], ["for", "address"], ["type", "text", "id", "address", "placeholder", "1234 Main St", "formControlName", "address", "name", "address1", "required", "", 1, "form-control"], ["for", "address2"], ["type", "text", "id", "address2", "placeholder", "Apartment or suite", "formControlName", "address2", "name", "address2", 1, "form-control"], [1, "col-md-4", "mb-3"], ["for", "state"], ["id", "state", "formControlName", "state", "name", "state", "required", "", 1, "custom-select", "d-block", "w-100"], ["value", ""], [1, "col-md-3", "mb-3"], ["for", "zip"], ["type", "text", "id", "zip", "placeholder", "", "formControlName", "zip", "name", "zip", "required", "", 1, "form-control"], [1, "mb-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block"]],
      template: function ShippingDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shipping Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ShippingDetailsComponent_Template_form_ngSubmit_5_listener() {
            return ctx.updateUserDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Valid first name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Valid last name is required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Please enter a valid email address for shipping updates. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Please enter your shipping address. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "California");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Please provide a valid state. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Zip code required. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Continue to checkout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userDetailsForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L3NoaXBwaW5nLWRldGFpbHMvc2hpcHBpbmctZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShippingDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shipping-details',
          templateUrl: './shipping-details.component.html',
          styleUrls: ['./shipping-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=checkout-checkout-module-es5.js.map