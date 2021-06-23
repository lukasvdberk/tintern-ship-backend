"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static sendErrorResponse(statusCode, errorMessage, res) {
        return res.status(statusCode).json({
            errorMessage: errorMessage,
        });
    }
    static sendSuccessResponse(content, res) {
        return res.status(200).json(content);
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=apiResponses.js.map