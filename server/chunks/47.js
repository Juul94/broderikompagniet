"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 1047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);








const LoginPage = ({ onLogin  })=>{
    const { 0: loginError , 1: setLoginError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const handleLogin = (values)=>{
        if (values.username === "admin" && values.password === "broderi") {
            onLogin();
        } else {
            setLoginError("Invalid username or password");
        }
    };
    const initialValues = {
        username: "",
        password: ""
    };
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_7__.object({
        username: yup__WEBPACK_IMPORTED_MODULE_7__.string().required("Username is required"),
        password: yup__WEBPACK_IMPORTED_MODULE_7__.string().required("Password is required")
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            width: "300px",
            margin: "50px auto"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                variant: "h5",
                gutterBottom: true,
                children: "Login"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    mt: 4,
                    ".MuiInputBase-root": {
                        width: "100%"
                    },
                    ".MuiFormControl-root": {
                        display: "block"
                    },
                    ".MuiInputBase-input": {
                        py: "8.5px",
                        px: "14px"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Formik, {
                    initialValues: initialValues,
                    validationSchema: validationSchema,
                    onSubmit: handleLogin,
                    children: ({ errors , touched  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__.Form, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                                    name: "username",
                                    as: (_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()),
                                    label: "Username",
                                    error: touched.username && !!errors.username,
                                    helperText: touched.username && errors.username,
                                    sx: {
                                        display: "block",
                                        mb: 2
                                    },
                                    size: "small"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_6__.Field, {
                                    name: "password",
                                    as: (_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()),
                                    label: "Password",
                                    type: "password",
                                    error: touched.password && !!errors.password,
                                    helperText: touched.password && errors.password,
                                    sx: {
                                        display: "block",
                                        mb: 2
                                    },
                                    size: "small"
                                }),
                                loginError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    variant: "body2",
                                    color: "error",
                                    sx: {
                                        marginBottom: "16px"
                                    },
                                    children: loginError
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    variant: "contained",
                                    type: "submit",
                                    sx: {
                                        marginBottom: "16px",
                                        color: "#ffffff"
                                    },
                                    children: "Sign in"
                                })
                            ]
                        })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);


/***/ })

};
;