"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//TODO: POST
const loginHandler = (req, res) => {
    //procesar el request body
    //validacion del body
    //store in database - mongo- mysql -postgresql -etc
    //TODO: TOKEN GENERATOR
    const token = jsonwebtoken_1.default.sign({
        test: "test"
    }, 'secret-key', { expiresIn: 60 * 60 * 24 });
    return res.json({
        token: token
    });
};
exports.loginHandler = loginHandler;
//TODO: GET
const profileHandler = (req, res) => {
    return res.json({
        msg: "here!"
    });
};
exports.profileHandler = profileHandler;
