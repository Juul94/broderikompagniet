"use strict";
exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 8131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ImageGallery */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utilities_mediaQueries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5816);














const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(()=>(0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.createStyles)({
        galleryItem: {
            cursor: "pointer",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "transform 0.2s",
            "&:hover": {
                transform: "scale(1.05)"
            }
        },
        dialogContent: {
            padding: "16px"
        },
        dialogTitle: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        "@media (max-width: 600px)": {
            dialogContent: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            imageWrapper: {
                marginBottom: "16px"
            }
        }
    }));
const ImageGallery = ({ images , thumbSize , largeContent  })=>{
    const { isMobile  } = (0,_utilities_mediaQueries__WEBPACK_IMPORTED_MODULE_12__/* .useResponsiveQueries */ .U)();
    const classes = useStyles();
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedImageIndex , 1: setSelectedImageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleOpenDialog = (index)=>{
        setSelectedImageIndex(index);
        setOpen(true);
    };
    const handleCloseDialog = ()=>{
        setOpen(false);
        setSelectedImageIndex(null);
    };
    const handleKeyDown = (event)=>{
        if (event.key === "ArrowLeft" && selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex((prevIndex)=>prevIndex !== null ? prevIndex - 1 : null);
        } else if (event.key === "ArrowRight" && selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
            setSelectedImageIndex((prevIndex)=>prevIndex !== null ? prevIndex + 1 : null);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedImageIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
        sx: {
            display: "flex",
            flexDirection: "row"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                sx: {
                    img: {
                        "&:hover": {
                            cursor: "pointer"
                        }
                    },
                    ".lazy-load-image-background": {
                        marginRight: "16px"
                    }
                },
                children: images.map((image, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__.LazyLoadImage, {
                        style: {
                            maxWidth: thumbSize || (isMobile ? "200px" : "100px"),
                            maxHeight: thumbSize || (isMobile ? "200px" : "100px")
                        },
                        src: image.url,
                        alt: image.title,
                        className: classes.galleryItem,
                        onClick: ()=>handleOpenDialog(index),
                        effect: "blur"
                    }, `${image.title}-${index}`);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3___default()), {
                open: open,
                onClose: handleCloseDialog,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default()), {
                        className: classes.dialogTitle,
                        children: [
                            selectedImageIndex !== null && images[selectedImageIndex].title,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                "aria-label": "close",
                                onClick: handleCloseDialog,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8___default()), {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: classes.dialogContent,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
                            sx: {
                                display: "flex",
                                justifyContent: "space-between",
                                ".MuiButtonBase-root": {
                                    "&:hover": {
                                        color: "primary.main",
                                        backgroundColor: "transparent"
                                    }
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    "aria-label": "previous",
                                    disabled: selectedImageIndex === 0,
                                    onClick: ()=>setSelectedImageIndex((prevIndex)=>prevIndex !== null ? prevIndex - 1 : null),
                                    disableRipple: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_11__.LazyLoadImage, {
                                    style: {
                                        maxWidth: largeContent ? isMobile ? "300px" : "500px" : isMobile ? "200px" : "400px",
                                        maxHeight: largeContent ? isMobile ? "300px" : "500px" : isMobile ? "200px" : "400px",
                                        marginRight: "8px"
                                    },
                                    src: selectedImageIndex !== null ? images[selectedImageIndex].url : "",
                                    alt: selectedImageIndex !== null ? images[selectedImageIndex].title : "",
                                    effect: "blur"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    "aria-label": "next",
                                    disabled: selectedImageIndex === images.length - 1,
                                    onClick: ()=>setSelectedImageIndex((prevIndex)=>prevIndex !== null ? prevIndex + 1 : null),
                                    disableRipple: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGallery);


/***/ }),

/***/ 5816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useResponsiveQueries)
/* harmony export */ });
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0__);

const useResponsiveQueries = ()=>{
    const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0___default()("(max-width: 600px)");
    const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_0___default()("(max-width: 1024px)");
    return {
        isMobile,
        isTablet
    };
};


/***/ })

};
;