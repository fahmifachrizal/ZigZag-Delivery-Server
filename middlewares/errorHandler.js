const errorHandler = (error, req, res, next) => {
  let status = 500
  let message = 'Internal Server Error'
  console.log(error)

  if (error.name.includes('Sequelize')){
    status =  400
    message = err.errors[0].message
  }

  if (error.name.includes('required')){
    status =  400
    message = err.name
  }

  if (error.name.includes('Invalid')){
    status =  401
    message = err.name
  }

  if (error.name.includes('Existed')){
    status =  400
    message = err.name
  }

  if (error.name.includes('found')){
    status =  404
    message = err.name
  }

  if (error.name.includes('JsonWebTokenError')){
    status=401
    message='Invalid token'
  }

  if (error.name.includes('Forbidden')){
    status=404
    message='You are not authorized'
  }
  
  // if (error.name.includes('Sequelize')) {
  //     const errorValidation = {}
  //     console.log(error)
  //     error.errors.forEach(el => { errorValidation[el.path] = el.message })
  //     status = 400; message = errorValidation
  // } else {

  // switch(error.name){
  //   case 'Existed':
  //     status = 400; message = 'Record already existed'; break
  //   case 'InvalidCredentials':
  //     status = 400; message = 'Email or password invalid'; break
  //   case 'EmailOrPasswordRequired':
  //     status = 400; message = 'Email and password is required'; break
  //   case 'JsonWebTokenError':
  //     status = 401; message = 'Token not verified or no longer has access'; break
  //   case 'Unauthenticated':
  //     status = 401; message = 'Unauthenticated'; break 
  //   case 'ReferenceError':
  //   case 'Forbidden':
  //     status = 403; message = 'Access unauthorized or forbidden'; break
  //   case 'RecordNotFound':
  //     status = 404; message = 'Error not found'; break
  //   }

  // }
      
  res.status(status).json({status, message})
} 

module.exports = { errorHandler }