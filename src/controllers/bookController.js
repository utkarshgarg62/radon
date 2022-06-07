const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData = async function (req, res) {
    let requiredAuthor = await AuthorModel.find({
        author_name:"Chetan Bhagat"
    }).select({author_id:1, _id:0})
    let requiredBook = await BookModel.find({
    author_id: requiredAuthor[0].author_id
    })
    res.send({msg:requiredBook})
}


const getAuthor = async function (req, res) {
    let getBookAndUpdate= await BookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set:{price:100}},
        { new: true}
    )
    //res.send({msg:getBookAndUpdate})

    let authorData= await AuthorModel.find({
        author_id:getBookAndUpdate.author_id
    }).select("author_name")
    res.send({msg:authorData})

}


const getBook = async function (req, res) {
    let data= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    res.send({msg : data})
    
    // let authorNewData = AuthorModel.find({  })
    // res.send({msg : authorNewData})
}



module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getAuthor=getAuthor
module.exports.getBook=getBook
