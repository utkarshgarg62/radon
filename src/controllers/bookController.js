const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const PublisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author_id){
        return res.send({
        msg:"author is required"
        })
    }
    if(!book.publisher){
        return res.send({
            msg:"publisher is required"
        })
    }
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated})  
}
// javascript  = sync(line by line )
// node-js = async , we use async and await to make async to sync 


const getBooksData= async function (req, res) {
    let books = await BookModel.find().populate()
    res.send({data: books})
}

const getBooksWithAutPub = async function (req, res) {
    let specificBook = await BookModel.find().populate('author_id',).populate('publisher')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAutPub = getBooksWithAutPub
