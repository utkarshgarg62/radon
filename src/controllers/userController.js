const UserModel= require("../models/userModel")

const createNewBooks= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getNewBooksList= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks , status:'done'})
}

module.exports.createNewBooks= createNewBooks
module.exports.getNewBooksList= getNewBooksList