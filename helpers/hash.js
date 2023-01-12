const bycrypt = require('bcrypt');

const hashPassword = function (password) { return bycrypt.hashSync(password, 6) };
const comparePassword = function (password, hash) { return bycrypt.compareSync(password, hash) };

module.exports = { hashPassword, comparePassword };