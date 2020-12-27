const mongoose = require('mongoose')

const Schema = mongoose.Schema


const itemsModel  = new Schema({
    name:{
        type:String,
        trim: true,
        required: [true, "Name is required"]
    },
    desc:{
        type:String,
        trim: true,
        required: [true, "Description is required"]
    },
    ownerNumber:{
        type: String,
        trim: true,
        required: [true, "Number is required"]
    },
    ownerEmail:{
        type: String,
        trim: true,
        required: [true, "Email is required"]

    },
    ownerContact:{
        type: String,
        trim: true,
        required: [true, "Contact is required"]
    },
    image:{
        type:String
    }
    }, {
        timestamps: true

})

module.exports = mongoose.model('items', itemsModel)
