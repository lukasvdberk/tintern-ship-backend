"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordUtil = void 0;
const bcrypt = require("bcrypt");
class PasswordUtil {
    static async hashPassword(password) {
        const randomLength = Math.random() * 16;
        const salt = bcrypt.genSaltSync(randomLength);
        return await bcrypt.hash(password, salt);
    }
    static async validPassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}
exports.PasswordUtil = PasswordUtil;
//# sourceMappingURL=passwordUtil.js.map