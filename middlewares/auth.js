// const { tokenDecoder } = require("../helpers/tokenGenerator")
// const { User, Food } = require("../models/index")

const authentication = async (req, res, next) => {
    try {
        let access_token = req.headers.access_token
        if (!access_token) { next({name: 'Unauthenticated'}) } 
        
        payload = tokenDecoder(access_token)
        const data = await User.findByPk(payload.authorId)

        if (!data) { { next({name: 'Unauthenticated'}) } }
    
        req.user = {
            id: payload.authorId,
            email: payload.email,
            username: payload.username,
        }
        next()
    } catch(error) {
        next(error)
    }
}

const authorization = async (req, res, next) => {
    try{
        const userId = +req.user.id
        const role = req.user.role
        const foodId = +req.params.id
        const data =  await Food.findByPk(foodId)
        if (!data) { throw {name: 'RecordNotFound'} }
        if (role !== 'admin'){
            if (data.authorId === userId){
                next()
            } else {
                throw {name: 'Forbidden'}
            }
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { authentication, authorization }