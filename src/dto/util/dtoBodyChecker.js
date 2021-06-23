"use strict";
exports.__esModule = true;
exports.dtoValidationMiddleware = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var class_sanitizer_1 = require("class-sanitizer");
var apiResponses_1 = require("../../controllers/utils/apiResponses");
function dtoValidationMiddleware(type, skipMissingProperties) {
    if (skipMissingProperties === void 0) { skipMissingProperties = false; }
    return function (req, res, next) {
        var dtoObj = class_transformer_1.plainToClass(type, req.body);
        class_validator_1.validate(dtoObj, { skipMissingProperties: skipMissingProperties }).then(function (errors) {
            if (errors.length > 0) {
                var dtoErrors = errors
                    .map(function (error) {
                    return Object.values(error.constraints);
                })
                    .join(", ");
                return apiResponses_1.ApiResponse.sendErrorResponse(403, dtoErrors, res);
            }
            else {
                //sanitize the object and call the next middleware
                class_sanitizer_1.sanitize(dtoObj);
                req.body = dtoObj;
                next();
            }
        });
    };
}
exports.dtoValidationMiddleware = dtoValidationMiddleware;
