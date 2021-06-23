"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthController = void 0;
var apiResponses_1 = require("./utils/apiResponses");
var user_model_1 = require("../models/user.model");
var passwordUtil_1 = require("./utils/passwordUtil");
var authorizationUtil_1 = require("./utils/authorizationUtil");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    /**
     * Register endpoint
     * @param req
     * @param res
     * @param next
     */
    AuthController.register = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user, existingUser, userDocument, _a, jwtToken;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        user = req.body;
                        return [4 /*yield*/, user_model_1.User.findOne({
                                email: user.email
                            })];
                    case 1:
                        existingUser = _c.sent();
                        if (existingUser) {
                            return [2 /*return*/, apiResponses_1.ApiResponse.sendErrorResponse(403, "User already exists", res)];
                        }
                        _a = user_model_1.User.bind;
                        _b = {
                            email: user.email
                        };
                        return [4 /*yield*/, passwordUtil_1.PasswordUtil.hashPassword(user.password)];
                    case 2:
                        userDocument = new (_a.apply(user_model_1.User, [void 0, (_b.password = _c.sent(),
                                _b)]))();
                        return [4 /*yield*/, userDocument.save()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, authorizationUtil_1.AuthorizationUtil.createJWT(userDocument._id, user.email)];
                    case 4:
                        jwtToken = _c.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse({
                                token: jwtToken
                            }, res)];
                }
            });
        });
    };
    /**
     * Login endpoint
     * @param req
     * @param res
     * @param next
     */
    AuthController.login = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user, existingUser, jwtToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = req.body;
                        return [4 /*yield*/, user_model_1.User.findOne({
                                email: user.email
                            })];
                    case 1:
                        existingUser = _a.sent();
                        if (!existingUser) return [3 /*break*/, 4];
                        // validate password
                        // @ts-ignore
                        return [4 /*yield*/, passwordUtil_1.PasswordUtil.validPassword(user.password, existingUser.password)];
                    case 2:
                        if (!
                        // validate password
                        // @ts-ignore
                        _a.sent()) 
                        // validate password
                        // @ts-ignore
                        return [3 /*break*/, 4];
                        return [4 /*yield*/, authorizationUtil_1.AuthorizationUtil.createJWT(existingUser._id, user.email)];
                    case 3:
                        jwtToken = _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse({
                                token: jwtToken
                            }, res)];
                    case 4: return [2 /*return*/, apiResponses_1.ApiResponse.sendErrorResponse(404, "No valid credentials given for user", res)];
                }
            });
        });
    };
    return AuthController;
}());
exports.AuthController = AuthController;
