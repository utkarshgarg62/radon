
const validateHeader= function ( req, res, next) {
    let header=req.header['isFreeAppUser']
    if(!header){
        res.send({msg:"Header is not Present"})
    }
    else{
        next();
    }
}
module.exports.validateHeader= validateHeader


const isFreeAppUser= function ( req, res, next) {
    let str=req.header['isFreeAppUser']
    console.log(str)
    if(!str){
       return res.send({msg: "isFreeAppUser is missing in header"})
    }
    else{
       next()
    }
}
module.exports.isFreeAppUser=isFreeAppUser

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
