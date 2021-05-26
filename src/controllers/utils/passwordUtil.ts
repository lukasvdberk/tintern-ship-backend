import * as bcrypt from 'bcrypt';


export class PasswordUtil {
    /**
     * Hashes password with sha512.
     * @function
     * @param {string} password - The password you want to hash.
     * @returns {Object} with {salt, passwordHash}
     */
    static async hashPassword(password: string): Promise<string> {
        const randomLength = Math.random() * 16
        const salt = bcrypt.genSaltSync(randomLength)

        return await bcrypt.hash(password, salt)
    }

    /**
     * Checks if a password is valid.
     * @function
     * @param {string} password - The password in plain text
     * @param {string} hash - The hash you want to compare to the password (likely coming from a database)
     * @returns {boolean} Success or not
     */
    static async validPassword(password, hash): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }
}
