const validateHeader= function ( req, res, next) {
    //console.log(req.headers.isFreeAppUser)
    let data=req.headers.isFreeAppUser || req.headers.isfreeappuser
   console.log(data)
    if(data===undefined){
        res.send("The request is missing a mandatory header ")
    }
    else{
        next()
    }
}
module.exports.validateHeader=validateHeader
// Header Validation






const validateUserId=function(req,res,next){
    let demoStr="61951bfa4d9fe0d34da86344"
    let user_id=req.body['userId']
    //let product_id=req.body['productId']
    if(user_id.length===demoStr.length){
        next()
    }
    else{
        res.send("Invalid UserId")
    }
}
module.exports.validateUserId=validateUserId
// UserId Validation







const validateProductId=function(req,res,next){
    let demoStr="61951bfa4d9fe0d34da86344"
    //let user_id=req.body['userId']
    let product_id=req.body['productId']
    if(product_id.length===demoStr.length){
        next()
    }
    else{
        res.send("Invalid ProductId")
    }
}
module.exports.validateProductId=validateProductId
// ProductId Validation