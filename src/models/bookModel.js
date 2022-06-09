const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:String,
	author_id:{
        type:ObjectId,
        required: [true, 'author is not present'],
        ref: "newAuthor",
        unique:false
    },
	price:Number,
	ratings:Number,
	publisher:{
        type:ObjectId,
        ref:"newPublisher",
        required: [true, 'publisher is not present']
    } 
}, { timestamps: true });
module.exports = mongoose.model('newBook3', bookSchema)
// Line number 20, we ar basically doing two things:
//  1> We are converting schema to model , so that we can export and import .
//  2> After converting into model , we can export this model using module.exports .
                                                    