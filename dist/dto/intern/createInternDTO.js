"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInternDTO = void 0;
const class_sanitizer_1 = require("class-sanitizer");
const class_validator_1 = require("class-validator");
class CreateInternDTO {
}
__decorate([
    class_validator_1.IsString(),
    class_sanitizer_1.Trim(),
    __metadata("design:type", String)
], CreateInternDTO.prototype, "educationId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateInternDTO.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", String)
], CreateInternDTO.prototype, "age", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(1, { message: 'Age shoud be a minimum of 1 characters' }),
    class_validator_1.MaxLength(400, { message: 'Age shoud be a maximum of 400 characters' }),
    __metadata("design:type", String)
], CreateInternDTO.prototype, "description", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(8, { message: 'Age shoud be a minimum of 9 characters' }),
    class_validator_1.MaxLength(10, { message: 'Age shoud be a maximum of 9 characters' }),
    __metadata("design:type", String)
], CreateInternDTO.prototype, "phoneNumber", void 0);
exports.CreateInternDTO = CreateInternDTO;
//# sourceMappingURL=createInternDTO.js.map