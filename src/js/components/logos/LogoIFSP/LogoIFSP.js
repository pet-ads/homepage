"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogoIFSP_module_css_1 = __importDefault(require("./LogoIFSP.module.css"));
var LogoIfsp_png_1 = __importDefault(require("../../../resources/logos/LogoIfsp.png"));
var react_1 = __importDefault(require("react"));
function LogoIFSP() {
    return (react_1.default.createElement("a", { href: 'https://scl.ifsp.edu.br', rel: "noreferrer", target: "_blank" },
        react_1.default.createElement("img", { className: LogoIFSP_module_css_1.default.IFSPLogo, src: LogoIfsp_png_1.default, alt: 'Identidade visual IFSP/SCL' })));
}
exports.default = LogoIFSP;