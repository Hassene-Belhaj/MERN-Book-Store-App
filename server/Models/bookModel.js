const mongoose = require('mongoose'); 

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    author:{
        type:String,
        required:true,
    },
    publishYear:{
        type:Number,
        required:true,
    },
    // image:{
    //     public_id : {
    //         type : String,
    //         required:true,
    //     },
    //     url : {
    //         type :String ,
    //         required:true,
    //     } 
    // },
},
{timestamps : true}
);

module.exports = mongoose.model('Book', bookSchema);