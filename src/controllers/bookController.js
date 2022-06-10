const AuthorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const PublisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author_id){
        return res.send({msg:"author data is required"})
    }
    if(!book.publisher){
        return res.send({msg:"publisher data is required"})
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

const updateBookDetails= async function (req, res) {
    //let specificBook = await BookModel.find().populate('author_id').populate('publisher')
    let data= await publisherModel.findOneAndUpdate({
        ObjectId: "62a1c9bbf33fdf8302735854"},
        {$set:{isHardCover:true}},
        {strict:true},
        {upsert:true}
    ) 
    res.send({msg:data})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAutPub = getBooksWithAutPub
module.exports.updateBookDetails=updateBookDetails
