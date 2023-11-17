const { sign, verify } = require("jsonwebtoken");
const secret = process.env.JWTSECRET;

module.exports = {
  createToken(payload) {
    const token = sign(payload, secret);
    return token;
  },
  verifyToken(token) {
    return verify(token, secret);
  },
};
