"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Reveal_module_css_1 = __importDefault(require("./Reveal.module.css"));
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_2 = __importDefault(require("react"));
function Reveal(_a) {
    var children = _a.children, width = _a.width;
    var ref = (0, react_1.useRef)(null);
    var isInView = (0, framer_motion_1.useInView)(ref, { once: true });
    var mainControl = (0, framer_motion_1.useAnimation)();
    (0, react_1.useEffect)(function () {
        if (isInView) {
            mainControl.start('visible');
        }
    });
    return (react_2.default.createElement("section", { className: Reveal_module_css_1.default.homesection, ref: ref, style: { position: 'relative', width: width, overflow: 'hidden' } },
        react_2.default.createElement(framer_motion_1.motion.div, { className: Reveal_module_css_1.default.container, variants: {
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
            }, initial: 'hidden', animate: mainControl, transition: {
                duration: 0.5,
                delay: 0.25,
            } }, children)));
}
exports.default = Reveal;