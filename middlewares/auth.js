// const { tokenDecoder } = require("../helpers/tokenGenerator")
// const { User, Food } = require("../models/index")

const authentication = async (req, res, next) => {
  try {
    let access_token =  req.headers.access_token
    if (!access_token) throw {name: 'Invalid token'}
    const id = verifyToken(access_token)
    req.user = {id}
    next()
  } catch (error) {
    next(error)
  }
}

const authorization = async (req, res, next) => {
  try {
    const UserId = req.user.id
    const MyCourseId = req.params.id

    const data = await MyCourse.findOne({where:{id:MyCourseId}})
    if (data.UserId !== UserId.id) throw {name:'Forbidden'}
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = { authentication, authorization }