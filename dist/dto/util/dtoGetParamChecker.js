"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoValidationMiddleware = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_sanitizer_1 = require("class-sanitizer");
const apiResponses_1 = require("../../controllers/utils/apiResponses");
function dtoValidationMiddleware(type, skipMissingProperties = false) {
    return (req, res, next) => {
        const dtoObj = class_transformer_1.plainToClass(type, req.query);
        class_validator_1.validate(dtoObj, { skipMissingProperties }).then((errors) => {
            if (errors.length > 0) {
                const dtoErrors = errors
                    .map((error) => Object.values(error.constraints))
                    .join(", ");
                return apiResponses_1.ApiResponse.sendErrorResponse(403, dtoErrors, res);
            }
            else {
                class_sanitizer_1.sanitize(dtoObj);
                req.query = dtoObj;
                next();
            }
        });
    };
}
exports.dtoValidationMiddleware = dtoValidationMiddleware;
//# sourceMappingURL=dtoGetParamChecker.js.map