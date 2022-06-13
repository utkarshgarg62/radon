const { count } = require("console")
const ProductModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data= req.body
    let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}

module.exports.createProduct=createProduct

// const createAuthor= async function (req, res) {
//     let data = req.body
//     let authorId = data.dauthor_id
//     if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

//     let savedData= await authorModel.create(data)
//     res.send({data: savedData})
// }

// module.exports.createAuthor= createAuthor
