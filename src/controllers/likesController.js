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
exports.LikesController = void 0;
var like_model_1 = require("../models/like.model");
var apiResponses_1 = require("./utils/apiResponses");
var user_model_1 = require("../models/user.model");
var LikesController = /** @class */ (function () {
    function LikesController() {
    }
    /**
     * Save a like for a user to another user.
     * @param req
     * @param res
     * @param next
     */
    LikesController.saveLike = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var likesUserDTO, bothUsersExists, userDocument, ignored_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        likesUserDTO = req.body;
                        console.log(likesUserDTO.fromUserId);
                        return [4 /*yield*/, user_model_1.User.findById(likesUserDTO.fromUserId)];
                    case 1:
                        if (_a.sent()) {
                            console.log(true);
                        }
                        return [4 /*yield*/, user_model_1.User.find().where('_id')["in"]([likesUserDTO.fromUserId, likesUserDTO.toUserId]).exec()];
                    case 2:
                        bothUsersExists = (_a.sent()).length == 2;
                        if (!bothUsersExists)
                            return [2 /*return*/, apiResponses_1.ApiResponse.sendErrorResponse(404, 'One of the users could not be found', res)];
                        userDocument = new like_model_1.Like({
                            fromUserId: likesUserDTO.fromUserId,
                            toUserId: likesUserDTO.toUserId,
                            hasLiked: likesUserDTO.hasLiked
                        });
                        return [4 /*yield*/, userDocument.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse({
                                message: 'Saved'
                            }, res)];
                    case 4:
                        ignored_1 = _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LikesController.getLikes = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, likesOfUser, ignored_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.params.userId;
                        // not the same user who wants to request
                        if (userId !== req.user._id) {
                            return [2 /*return*/, apiResponses_1.ApiResponse.sendErrorResponse(403, 'Not allowed', res)];
                        }
                        return [4 /*yield*/, like_model_1.Like.find({
                                toUserId: userId,
                                hasLiked: true
                            })];
                    case 1:
                        likesOfUser = _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse(likesOfUser, res)];
                    case 2:
                        ignored_2 = _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LikesController.getLikesByUserId = function (userId, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var likesOfUser, ignored_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, like_model_1.Like.find({
                                fromUserId: userId,
                                hasLiked: true
                            })];
                    case 1:
                        likesOfUser = _a.sent();
                        return [2 /*return*/, likesOfUser];
                    case 2:
                        ignored_3 = _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LikesController.deleteLike = function (likeId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, like_model_1.Like.deleteOne({ _id: likeId })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LikesController;
}());
exports.LikesController = LikesController;
