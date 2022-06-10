const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:String,
	author_id:{
        type:ObjectId,
        ref:"newAuthor",
        required: true,
    },
	price:Number,
	ratings:Number,
	publisher:{
        type:ObjectId,
        ref:"newPublisher",
        required: true
    } 
}, { timestamps: true });
module.exports = mongoose.model('newBook3', bookSchema)
// Line number 20, we ar basically doing two things:
//  1> We are converting schema to model , so that we can export and import .
//  2> After converting into model , we can export this model using module.exports .
                                                    