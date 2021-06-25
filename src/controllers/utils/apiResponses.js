"use strict";
exports.__esModule = true;
exports.ApiResponse = void 0;
var ApiResponse = /** @class */ (function () {
    function ApiResponse() {
    }
    /**
     * Sends a response as a error message.
     * @function
     * @param {Number} statusCode - The http status code.
     * @param {Object} errorMessage - The error message.
     * @param {ExpressRes} res - A valid express response object to send the response with.
     */
    ApiResponse.sendErrorResponse = function (statusCode, errorMessage, res) {
        return res.status(statusCode).json({
            errorMessage: errorMessage
        });
    };
    /**
     * Sends a response with a success message
     * @function
     * @param {Object|String} content - Extra content you want to send. Can be anything from a object to a string
     * @param {ExpressRes} res - A valid express response object to send the response with.
     */
    ApiResponse.sendSuccessResponse = function (content, res) {
        return res.status(200).json(content);
    };
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
