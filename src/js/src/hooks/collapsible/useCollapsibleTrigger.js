"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../../components/interactive/Arrow/Arrow.css");
var ai_1 = require("react-icons/ai");
var md_1 = require("react-icons/md");
var CollapsibleTrigger = function (_a) {
    var text = _a.text, page = _a.page;
    return (react_1.default.createElement("div", { className: 'conteiner' },
        react_1.default.createElement("div", null,
            page === 'Equipe' && react_1.default.createElement(md_1.MdKeyboardArrowDown, { className: 'collapsible-arrow' }),
            page === 'FAQ' && react_1.default.createElement(ai_1.AiFillCaretDown, null)),
        react_1.default.createElement("div", { className: 'CollapsibleTriggerContainer' },
            react_1.default.createElement("span", { className: 'spanText' }, text))));
};
exports.default = CollapsibleTrigger;
