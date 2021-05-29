import { RequestHandler } from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { sanitize } from "class-sanitizer";
import { ApiResponse } from "../../controllers/utils/apiResponses";
import {ParsedUrlQuery} from "querystring";
import * as QueryString from "querystring";

export function dtoValidationMiddleware(
    type: any,
    skipMissingProperties = false
): RequestHandler {
    return (req, res, next) => {
        const dtoObj = plainToClass(type, (req.query as any));
        validate(dtoObj, { skipMissingProperties }).then(
            (errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const dtoErrors = errors
                        .map((error: ValidationError) =>
                            (Object as any).values(error.constraints)
                        )
                        .join(", ");
                    return ApiResponse.sendErrorResponse(403, dtoErrors, res);
                } else {
                    //sanitize the object and call the next middleware
                    sanitize(dtoObj);
                    req.query = dtoObj as any;
                    next();
                }
            }
        );
    };
}
