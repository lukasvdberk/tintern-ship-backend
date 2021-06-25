"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDTO = void 0;
var class_validator_1 = require("class-validator");
var class_sanitizer_1 = require("class-sanitizer");
var CreateUserDTO = /** @class */ (function () {
    function CreateUserDTO() {
    }
    __decorate([
        class_validator_1.IsEmail({}, { message: "Email is not of type email." }),
        class_validator_1.MinLength(4, { message: "Password should be an minimum of 4 characters" }),
        class_sanitizer_1.Trim()
    ], CreateUserDTO.prototype, "email");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(4, { message: "Password should be an minimum of 8 characters" }),
        class_validator_1.MaxLength(16, { message: "Password should be an maximum of 16 characters" }),
        class_sanitizer_1.Trim()
    ], CreateUserDTO.prototype, "password");
    return CreateUserDTO;
}());
exports.CreateUserDTO = CreateUserDTO;
