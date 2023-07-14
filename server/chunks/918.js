"use strict";
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bp": () => (/* binding */ FooterContent),
/* harmony export */   "Nf": () => (/* binding */ ContainerHalf),
/* harmony export */   "OT": () => (/* binding */ SectionHeading),
/* harmony export */   "TD": () => (/* binding */ NewSection),
/* harmony export */   "UI": () => (/* binding */ TypographySpaceHalf),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "W_": () => (/* binding */ InnerContainer),
/* harmony export */   "Yb": () => (/* binding */ FormContainer),
/* harmony export */   "ep": () => (/* binding */ ContainerRelative),
/* harmony export */   "k1": () => (/* binding */ InnerContainerNoPadding),
/* harmony export */   "kL": () => (/* binding */ ContainerBG),
/* harmony export */   "wg": () => (/* binding */ TypographySpace),
/* harmony export */   "yA": () => (/* binding */ LogoImage)
/* harmony export */ });
/* unused harmony exports InnerContainerMaxWidth, FileUploadLabel, FullImage */
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);


/********** CONTAINERS **********/ // Parent Containers
const ContainerRelative = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    position: "relative",
    marginTop: "20px"
});
const ContainerBG = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        zIndex: "1",
        width: "100%",
        backgroundColor: theme.palette.background.default
    }));
const ContainerHalf = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        display: "flex",
        flexDirection: "row",
        "& > *": {
            flex: "1 1 50%"
        },
        [theme.breakpoints.down("md")]: {
            display: "block"
        }
    }));
// Child Containers
const InnerContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        padding: "50px 0 100px 0",
        backgroundColor: theme.palette.background.default
    }));
const InnerContainerMaxWidth = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    zIndex: "1",
    width: "100%",
    margin: "0 auto",
    maxWidth: "1080px"
});
const InnerContainerNoPadding = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    zIndex: "1",
    width: "100%"
});
// Content Containers
const Content = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        maxWidth: "1080px",
        margin: "0 auto",
        padding: "24px",
        [theme.breakpoints.down("sm")]: {
            padding: "16px"
        }
    }));
const NewSection = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    marginTop: "16px"
});
/********** FORMS **********/ const FormContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    maxWidth: " 350px"
});
const FileUploadLabel = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    color: "#333333",
    fontWeight: "bold",
    marginBottom: "0.75rem"
});
/********** FOOTER **********/ const FooterContent = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("div")({
    display: "flex",
    flexDirection: "row",
    gap: "25px",
    justifyContent: "space-between"
});
/********** TYPOGRAPHY **********/ const SectionHeading = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme  })=>({
        fontSize: "1.5rem",
        color: theme.palette.primary.main,
        marginBottom: "16px",
        fontWeight: 500
    }));
const TypographySpace = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()))({
    marginBottom: "16px"
});
const TypographySpaceHalf = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()))({
    marginBottom: "8px"
});
/********** IMAGES **********/ const LogoImage = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("img")({
    width: "40px"
});
const FullImage = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)("img")({
    width: "200px"
});


/***/ })

};
;