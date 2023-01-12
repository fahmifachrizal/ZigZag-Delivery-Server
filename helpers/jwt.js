const jwt = require('jsonwebtoken')
const secret = process.env.TOKEN_SECRET

const signToken = function (payload) { return jwt.sign(payload, secret) };
const verifyToken = function (token) { return jwt.verify(token, secret) };

module.exports = { signToken, verifyToken };