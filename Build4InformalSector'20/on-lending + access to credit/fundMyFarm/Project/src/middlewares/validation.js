// hapi/joi is to validate inputs
const joi = require("@hapi/joi"); 


const signUp = (data) =>{
    const validationSchema = joi.object({

        title:joi.string().required(),
        address:joi.string().min(4).required(),
        town:joi.string().required(),
        state:joi.string().required(),
        farmSize:joi.string().required(),
        farmAddress:joi.string().min(4).required(),
        crops:joi.string().required(),
        fullName:joi.string().min(4).required(),
        email:joi.string().min(4).required().email(),
        password:joi.string().min(4).required(), 
        gender:joi.string().min(4).required(),
        country:joi.string().min(4).required(),
        phone:joi.string().min(4).required(),
      
    })
    return validationSchema.validate(data)
}

const signIn = (data) => {
    const validationSchema = joi.object({
        email:joi.string().min(4).required().email(),
        password:joi.string().min(4).required()
    })
    return validationSchema.validate(data)
}


// to export signup validation: username, email and password
module.exports.signUp = signUp; 
module.exports.signIn = signIn; 