function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'products',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | products-products-module */
        [__webpack_require__.e("common"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null,
        /*! ./products/products.module */
        "./src/app/products/products.module.ts")).then(function (m) {
          return m.ProductsModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | cart-cart-module */
        [__webpack_require__.e("common"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null,
        /*! ./cart/cart.module */
        "./src/app/cart/cart.module.ts")).then(function (m) {
          return m.CartModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | auth-auth-module */
        "auth-auth-module").then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: 'checkout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | checkout-checkout-module */
        "checkout-checkout-module").then(__webpack_require__.bind(null,
        /*! ./checkout/checkout.module */
        "./src/app/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'eshopping';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 1,
      consts: [[3, "title"], [1, "container", 2, "padding-top", "15px"], [1, "row"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _shared_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/interceptors/auth-interceptor.service */
    "./src/app/shared/interceptors/auth-interceptor.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], // HttpClientXsrfModule.withOptions({
      //   cookieName: 'XSRF-TOKEN',
      //   headerName: 'X-XSRF-TOKEN'
      // }),
      _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], // HttpClientXsrfModule.withOptions({
        //   cookieName: 'XSRF-TOKEN',
        //   headerName: 'X-XSRF-TOKEN'
        // }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], // HttpClientXsrfModule.withOptions({
          //   cookieName: 'XSRF-TOKEN',
          //   headerName: 'X-XSRF-TOKEN'
          // }),
          _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/services/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/services/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/models/user */
    "./src/app/shared/models/user.ts");
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/constants */
    "./src/app/shared/constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.isLoggedIn = false;
        this.errorMessage = '';
        this.user = new _shared_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
      } // Login with Basic authentication against database
      // login(user: User) {
      //     this.user = user;
      //     const headers = new HttpHeaders(
      //         { Authorization: 'Basic ' + btoa(user.username + ':' + user.password)}
      //         );
      //     return this.http.post<User>(USER_API + "/login", user, { headers, responseType: 'text' as 'json'})
      //      .pipe(map(res => {
      //          this.isLoggedIn = true;
      //          this.user= JSON.parse(res as any) ;
      //          return this.user;
      //         //  sessionStorage.setItem("loggedInUser", this.user);
      //      },
      //      catchError(err  => { 
      //         console.log("Invalid credentials");
      //         this.errorMessage = err.error.message;
      //         this.isLoggedIn = false;
      //         return throwError("Invalid credentials");
      //      })));
      // }


      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          var _this = this;

          this.user = user;
          return this.http.post(_shared_constants__WEBPACK_IMPORTED_MODULE_4__["USER_API"] + "/login", user, {
            reportProgress: true,
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_4__["AUTH_KEY"], res);
            _this.isLoggedIn = true;
          }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            console.log("Invalid credentials");
            _this.errorMessage = err.error.message;
            _this.isLoggedIn = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Invalid credentials");
          })));
        }
      }, {
        key: "signup",
        value: function signup(user) {
          this.user = user;
          return this.http.post(_shared_constants__WEBPACK_IMPORTED_MODULE_4__["USER_API"] + "/create", user, {
            responseType: 'text'
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"](_shared_constants__WEBPACK_IMPORTED_MODULE_4__["USER_API"] + "/user/" + id);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/services/token-storage.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/services/token-storage.service.ts ***!
    \********************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppAuthServicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/constants */
    "./src/app/shared/constants.ts");

    var TokenStorageService = /*#__PURE__*/function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "saveToken",
        value: function saveToken(token) {
          sessionStorage.removeItem(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["AUTH_KEY"]);
          sessionStorage.setItem(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["AUTH_KEY"], token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var token = sessionStorage.getItem(_shared_constants__WEBPACK_IMPORTED_MODULE_1__["AUTH_KEY"]);
          return token ? JSON.parse(token)["jwt"] : null;
        }
      }, {
        key: "clearToken",
        value: function clearToken() {
          sessionStorage.clear();
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
      return new (t || TokenStorageService)();
    };

    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart/services/cart.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/cart/services/cart.service.ts ***!
    \***********************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppCartServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartService = /*#__PURE__*/function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.items = [];
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(productId) {
          this.items.push(productId);
        }
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          return this.items;
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cart/services/cart.service */
    "./src/app/cart/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _products_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../products/services/products.service */
    "./src/app/products/services/products.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function HeaderComponent_li_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_22_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.addProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Product ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_31_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_32_Template_span_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(cartService, router, aRoute, authService, productService) {
        _classCallCheck(this, HeaderComponent);

        this.cartService = cartService;
        this.router = router;
        this.aRoute = aRoute;
        this.authService = authService;
        this.productService = productService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCartItems",
        value: function getCartItems() {
          this.router.navigate(['/cart']);
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          this.router.navigate(['/products/edit-product/new'], {
            relativeTo: this.aRoute
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['auth/login'], {
            relativeTo: this.aRoute
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          window.sessionStorage.removeItem("loggedInUser");
          this.authService.isLoggedIn = false;
          this.authService.user = null;
          this.cartService.items = [];
          this.router.navigate(["auth/login"]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 34,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "bg-primary"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-bar", "navbar-kebab"], [1, "logo"], ["routerLink", "", 1, "simple-text", "logo-mini"], [1, "logo-image-small"], ["src", "assets/images/IMG_0069.JPG"], ["routerLink", "", 1, "navbar-brand", 2, "color", "azure", "padding-left", "0.3125rem"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "mt-2", "mt-lg-0"], [1, "nav-item"], [1, "input-group", "no-border"], ["type", "text", "id", "search", "name", "search", "autocomplete", "off", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], [1, "nc-icon", "nc-zoom-split"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/cart", "routerLinkActive", "active", 2, "color", "black"], [1, "fa", "fa-shopping-cart"], [1, "mt-2"], [2, "cursor", "pointer", "color", "black", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "eShopping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.productService.searchTerm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_li_22_Template, 4, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_li_31_Template, 4, 0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HeaderComponent_li_32_Template, 11, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productService.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cartService.items.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]],
      styles: [".logo-image-small[_ngcontent-%COMP%] { \r\n    width: 46px;\r\n    height: 46px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    margin-top: -6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWltYWdlLXNtYWxsIHsgXHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _cart_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _products_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/services/products.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/products/services/products.service.ts ***!
    \*******************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppProductsServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/constants */
    "./src/app/shared/constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/snackbar.service */
    "./src/app/services/snackbar.service.ts");

    var ProductsService = /*#__PURE__*/function () {
      function ProductsService(http, snackBarService) {
        _classCallCheck(this, ProductsService);

        this.http = http;
        this.snackBarService = snackBarService;
        this.products = [];
        this.categories = ["Books", "Electronics", "Groceries"];
        this.isLoading = true;
      }

      _createClass(ProductsService, [{
        key: "getProducts",
        value: function getProducts() {
          var _this2 = this;

          if (this.products.length !== 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products);
          }

          return this.http.get(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS_API"], {
            reportProgress: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this2.products = data;
            _this2.isLoading = false;
            return _this2.products;
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.products.find(function (product) {
            return product.id === id;
          });
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          var _this3 = this;

          this.isLoading = true;
          this.http.put(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS_API"], product, {
            reportProgress: true
          }).subscribe(function (data) {
            var index = _this3.products.findIndex(function (prod) {
              return prod.id === product.id;
            });

            _this3.products[index] = product;
            _this3.isLoading = false;
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct(product) {
          var _this4 = this;

          this.isLoading = true;
          this.http.post(src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS_API"], product, {
            reportProgress: true
          }).subscribe(function (data) {
            _this4.isLoading = false;

            _this4.products.push(data);

            _this4.snackBarService.show("Product added successfully");
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(productId) {
          var _this5 = this;

          var reqUrl = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS_API"] + "/" + productId;
          this.http["delete"](reqUrl, {
            reportProgress: true
          }).subscribe(function (data) {
            console.log(data);
            _this5.products = _this5.products.filter(function (product) {
              return product.id !== productId;
            });
          });
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]));
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/snackbar.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/snackbar.service.ts ***!
    \**********************************************/

  /*! exports provided: SnackBarService */

  /***/
  function srcAppServicesSnackbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
      return SnackBarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SnackBarService = /*#__PURE__*/function () {
      function SnackBarService(_snackBar) {
        _classCallCheck(this, SnackBarService);

        this._snackBar = _snackBar;
      }

      _createClass(SnackBarService, [{
        key: "show",
        value: function show(message) {
          this._snackBar.openFromComponent(_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__["SnackbarComponent"], {
            data: {
              message: message,
              icon: "check"
            },
            duration: 1000
          });
        }
      }]);

      return SnackBarService;
    }();

    SnackBarService.ɵfac = function SnackBarService_Factory(t) {
      return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SnackBarService,
      factory: SnackBarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/snackbar/snackbar.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/snackbar/snackbar.component.ts ***!
    \******************************************************************/

  /*! exports provided: SnackbarComponent */

  /***/
  function srcAppSharedComponentsSnackbarSnackbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function () {
      return SnackbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SnackbarComponent = function SnackbarComponent(snackBarRef, data) {
      _classCallCheck(this, SnackbarComponent);

      this.snackBarRef = snackBarRef;
      this.data = data;
    };

    SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) {
      return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]));
    };

    SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SnackbarComponent,
      selectors: [["app-snackbar"]],
      decls: 4,
      vars: 4,
      consts: [[1, "flex"], [1, "data"], ["aria-hidden", "true"]],
      template: function SnackbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data.message, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", ctx.data.icon, " icon");
        }
      },
      styles: [".icon[_ngcontent-%COMP%] {\r\n    color: rgb(223, 18, 206);\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc25hY2tiYXIvc25hY2tiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgY29sb3I6IHJnYigyMjMsIDE4LCAyMDYpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-snackbar',
          templateUrl: './snackbar.component.html',
          styleUrls: ['./snackbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/constants.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/constants.ts ***!
    \*************************************/

  /*! exports provided: PRODUCTS_API, USER_API, USER_KEY, AUTH_KEY, AUTHORIZATION */

  /***/
  function srcAppSharedConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRODUCTS_API", function () {
      return PRODUCTS_API;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USER_API", function () {
      return USER_API;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USER_KEY", function () {
      return USER_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function () {
      return AUTH_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTHORIZATION", function () {
      return AUTHORIZATION;
    });

    var PRODUCTS_API = "http://localhost:8080/onetravels/products";
    var USER_API = "http://localhost:8080/onetravels/auth";
    var USER_KEY = "auth-user";
    var AUTH_KEY = "auth-token";
    var AUTHORIZATION = "Authorization";
    /***/
  },

  /***/
  "./src/app/shared/interceptors/auth-interceptor.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/interceptors/auth-interceptor.service.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedInterceptorsAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants */
    "./src/app/shared/constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/services/token-storage.service */
    "./src/app/auth/services/token-storage.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(tokenExtractor, tokenService) {
        _classCallCheck(this, AuthInterceptor);

        this.tokenExtractor = tokenExtractor;
        this.tokenService = tokenService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // For Cookie based XSRF Token Basic authentication
          // const headerName = 'X-XSRF-TOKEN';
          // let token = this.tokenExtractor.getToken() as string;
          // Below code is for Jwt authentication
          var token = this.tokenService.getToken(); // below code will be get executed after login
          // because jwt token stored after login only

          if (token) {
            var newReq = req.clone({
              headers: req.headers.set(_constants__WEBPACK_IMPORTED_MODULE_1__["AUTHORIZATION"], "Bearer " + token)
            });
            return next.handle(newReq);
          }

          return next.handle(req);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpXsrfTokenExtractor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpXsrfTokenExtractor"]
        }, {
          type: _auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/user.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/models/user.ts ***!
    \***************************************/

  /*! exports provided: User */

  /***/
  function srcAppSharedModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Java Practise\onetravels-parent\onetravels-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map