const jwt = require('jsonwebtoken')

export class AuthorizationUtil {
    static getJWTKey() {
        return process.env.JWT_SECRET_KEY
    }

    /**
     * Creates a jwt key
     * @function
     * @param {Number} userId - User his id (likely coming from the database)
     * @param {string} email - User his email
     * @param {boolean} isAdmin - Wheather the user is admin or not
     * @returns {string} - The generated jwt token
     */
    static async createJWT(userId: string, email: string): Promise<string> {
        return await jwt.sign({
            userId: userId,
            email: email
        }, this.getJWTKey(), {
            algorithm: 'HS256'
        })
    }

    /**
     * Extracts information from JWT-key
     * @function
     * @param {Number} userId - User his id (likely coming from the database)
     * @returns {Object} - {userId,username,isAdmin} or undefined if the key is not valid
     */
    static extractJWTInformation(jwtToken: string) {
        try {
            const payload = jwt.verify(jwtToken, this.getJWTKey(), {
                algorithm: 'HS256'
            })

            return {
                email: payload.email,
                userId: payload.userId,
            }
        } catch (exception) {
            return undefined
        }
    }
}
