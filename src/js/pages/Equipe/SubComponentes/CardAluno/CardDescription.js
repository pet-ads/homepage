"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardAluno_module_css_1 = __importDefault(require("./CardAluno.module.css"));
function CardDescription(_a) {
    var nome = _a.nome, tipo = _a.tipo;
    return (react_1.default.createElement("div", { className: CardAluno_module_css_1.default.descricao },
        react_1.default.createElement("strong", null,
            react_1.default.createElement("p", { className: CardAluno_module_css_1.default.p }, nome)),
        react_1.default.createElement("strong", null,
            react_1.default.createElement("p", { className: CardAluno_module_css_1.default.p }, tipo))));
}
exports.default = CardDescription;
