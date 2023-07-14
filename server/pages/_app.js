"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const material_Menu_namespaceObject = require("@mui/material/Menu");
var material_Menu_default = /*#__PURE__*/__webpack_require__.n(material_Menu_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/utils/routes.ts
const routes = [
    {
        name: "Home",
        route: ""
    },
    {
        name: "Ordre formular",
        route: "ordre-formular"
    },
    {
        name: "Galleri",
        route: "galleri"
    },
    {
        name: "Services",
        route: "services"
    },
    {
        name: "Skrifttyper",
        route: "skrifttyper"
    },
    {
        name: "Materiale",
        route: "materiale"
    },
    {
        name: "Grafisk arbejde",
        route: "grafisk-arbejde"
    },
    {
        name: "D\xe5bskjoler",
        route: "daabskjoler"
    },
    {
        name: "Caps",
        route: "caps"
    },
    {
        name: "Badges & M\xe6rker",
        route: "badges-og-maerker"
    }, 
];
/* harmony default export */ const utils_routes = (routes);

;// CONCATENATED MODULE: ./src/img/logo.jpg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.0178cd4c.jpg","height":105,"width":100,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAqgl//8QAGxABAAICAwAAAAAAAAAAAAAAAQIDBBEABSH/2gAIAQEAAT8AMm6rI66qWRORbdMQqNJo8ef/xAAcEQAABgMAAAAAAAAAAAAAAAABAgMEESEAEmH/2gAIAQIBAT8AbhLRspeyhBE19jP/xAAdEQABAwUBAAAAAAAAAAAAAAADAQIhABIjMkFR/9oACAEDAQE/ADYzEC3QS2t9mZXtf//Z","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/styles/styledDiv.ts
var styledDiv = __webpack_require__(5918);
// EXTERNAL MODULE: ./src/utils/mediaQueries.ts
var mediaQueries = __webpack_require__(5816);
;// CONCATENATED MODULE: ./src/components/layout/header.tsx














const Header = ()=>{
    const { isTablet , isMobile  } = (0,mediaQueries/* useResponsiveQueries */.U)();
    const pathName =  false && 0;
    const [menuAnchorEl, setMenuAnchorEl] = external_react_default().useState(null);
    const [currentRoute, setCurrentRoute] = external_react_default().useState("");
    const handleMenuOpen = (event)=>{
        setMenuAnchorEl(event.currentTarget);
    };
    const handleMenuClose = ()=>{
        setMenuAnchorEl(null);
    };
    const isActive = (route)=>{
        if (`/${route}` === currentRoute) {
            return true;
        }
    };
    (0,external_react_.useEffect)(()=>{
        setCurrentRoute(pathName);
    }, [
        pathName
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(styledDiv/* ContainerBG */.kL, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(styledDiv/* InnerContainerNoPadding */.k1, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                style: {
                    padding: isMobile ? "16px" : "24px",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    "&:hover": {
                                        cursor: "pointer"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(styledDiv/* LogoImage */.yA, {
                                        src: logo.src,
                                        alt: "Logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            ...isMobile && {
                                                fontSize: "16px"
                                            }
                                        },
                                        children: "Broderi Kompagniet"
                                    })
                                ]
                            })
                        })
                    }),
                    isTablet && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                edge: "start",
                                color: "inherit",
                                "aria-label": "menu",
                                onClick: handleMenuOpen,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((material_Menu_default()), {
                                anchorEl: menuAnchorEl,
                                open: Boolean(menuAnchorEl),
                                onClose: handleMenuClose,
                                sx: {
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    "& .MuiPaper-root": {
                                        width: "100%"
                                    }
                                },
                                children: utils_routes.map(({ name , route  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleMenuClose,
                                        sx: {
                                            a: {
                                                color: isActive(route) ? "primary.main" : "text.primary",
                                                textDecoration: "none"
                                            }
                                        },
                                        disableRipple: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/${route}`,
                                            passHref: true,
                                            children: name
                                        })
                                    }, `${route}-${index}`))
                            })
                        ]
                    }),
                    !isTablet && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        },
                        children: utils_routes.map(({ name , route  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/${route}`,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    disableRipple: true,
                                    sx: {
                                        py: 0,
                                        px: "7.5px",
                                        textAlign: "right",
                                        color: isActive(route) ? "primary.main" : "text.primary",
                                        textDecoration: "none",
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                            color: "primary.main"
                                        }
                                    },
                                    children: name
                                })
                            }, `${route}-${index}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/components/layout/footer.tsx







const Footer = ()=>{
    const { isMobile  } = (0,mediaQueries/* useResponsiveQueries */.U)();
    return /*#__PURE__*/ jsx_runtime_.jsx(styledDiv/* ContainerRelative */.ep, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(styledDiv/* InnerContainer */.W_, {
            sx: {
                ...isMobile && {
                    p: 2
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    maxWidth: "1080px",
                    margin: "0 auto",
                    ...!isMobile && {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 3
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            ...isMobile && {
                                mt: 1,
                                mb: 3
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                color: "textPrimary",
                                sx: {
                                    fontSize: "0.875rem"
                                },
                                children: "\xc5bningstider"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    width: "250px"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styledDiv/* FooterContent */.Bp, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                color: "textSecondary",
                                                children: "Mandag - Torsdag"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                color: "textSecondary",
                                                children: "08:00 - 16:00"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styledDiv/* FooterContent */.Bp, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                color: "textSecondary",
                                                children: "Fredag"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "body2",
                                                color: "textSecondary",
                                                children: "08:00 - 15:00"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            ...isMobile && {
                                mb: 3
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                color: "textPrimary",
                                sx: {
                                    fontSize: "0.875rem"
                                },
                                children: "Broderikompagniet"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                color: "textSecondary",
                                children: "Hejrevang 21 F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                color: "textSecondary",
                                children: "3450 Aller\xf8d"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                color: "textSecondary",
                                children: "+45 4871 1299"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            ...isMobile && {
                                mb: 2
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                color: "textPrimary",
                                sx: {
                                    fontSize: "0.875rem"
                                },
                                children: "Kontakt"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                color: "textSecondary",
                                children: "salg@broderikompagniet.dk"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/kontakt",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    color: "textSecondary",
                                    sx: {
                                        "&:hover": {
                                            cursor: "pointer",
                                            color: "primary.main"
                                        }
                                    },
                                    children: "Kontakt os her"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./src/components/layout/layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(styledDiv/* Content */.VY, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: ./src/theme/baseThemeOptions.ts


const theme = (0,styles_namespaceObject.createTheme)({
    spacing: (factor)=>`${8 * factor}px`,
    breakpoints: {
        values: {
            xs: 300,
            sm: 600,
            md: 1024,
            lg: 1300,
            ml: 1700,
            xl: 1920
        }
    },
    palette: {
        primary: {
            main: "#00A8E8",
            light: "#66D1FF",
            dark: "#00779F"
        },
        secondary: {
            main: "#FF7600",
            light: "#FFA733",
            dark: "#CC5A00"
        },
        background: {
            default: "#f3f3f4",
            light: "#E5E7EB",
            dark: "#D1D5DB"
        },
        success: {
            main: "#14B8A6",
            light: "#43C6B7",
            dark: "#0E8074"
        },
        error: {
            main: "#D14343",
            light: "#DA6868",
            dark: "#922E2E"
        },
        warning: {
            main: "#FFB020",
            light: "#FFBF4C",
            dark: "#B27B16"
        },
        info: {
            main: "#2196F3",
            light: "#64B6F7",
            dark: "#0B79D0"
        },
        text: {
            primary: "#111827",
            secondary: "#6B7280",
            disabled: "rgba(17, 24, 39, 0.48)"
        }
    }
});
/* harmony default export */ const baseThemeOptions = (theme);

;// CONCATENATED MODULE: ./src/pages/_app.tsx





const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(system_.ThemeProvider, {
        theme: baseThemeOptions,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app = (App);


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


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,918], () => (__webpack_exec__(8013)));
module.exports = __webpack_exports__;

})();