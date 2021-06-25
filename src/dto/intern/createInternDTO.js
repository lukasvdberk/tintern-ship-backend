"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateInternDTO = void 0;
var class_sanitizer_1 = require("class-sanitizer");
var class_validator_1 = require("class-validator");
var CreateInternDTO = /** @class */ (function () {
    function CreateInternDTO() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_sanitizer_1.Trim()
    ], CreateInternDTO.prototype, "educationId");
    __decorate([
        class_validator_1.IsString()
    ], CreateInternDTO.prototype, "name");
    __decorate([
        class_validator_1.IsNumber()
    ], CreateInternDTO.prototype, "age");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(1, { message: 'Age shoud be a minimum of 1 characters' }),
        class_validator_1.MaxLength(400, { message: 'Age shoud be a maximum of 400 characters' })
    ], CreateInternDTO.prototype, "description");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(8, { message: 'Age shoud be a minimum of 9 characters' }),
        class_validator_1.MaxLength(10, { message: 'Age shoud be a maximum of 9 characters' })
    ], CreateInternDTO.prototype, "phoneNumber");
    return CreateInternDTO;
}());
exports.CreateInternDTO = CreateInternDTO;
