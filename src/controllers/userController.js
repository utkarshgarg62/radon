const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// CREATE USER API---------------------------------------------
const createUser = async function (req, res) {
try{
  let data = req.body;
  if(Object.keys(data).length!=0){
    let savedData = await userModel.create(data);
    console.log(req.newAtribute);
    res.status(201).send({ msg: savedData });
  }
  else{
    res.status(400).send({msg:"No data Entered, BAD REQUEST"})
  }

}
catch(err){
  console.log("This is the error", err)
  res.status(500).send({msg:"server error", error:err})
}
};


// USER LOGIN API----------------------------------------------
const loginUser = async function (req, res) {
  try{
  let data=req.body
    if(Object.keys(data).length!=0){
      let userName = req.body.emailId;
    let password = req.body.password;
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user)
        return res.send({
          status: false,
          msg: "username or the password is not corerct",
        });
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "thorium",
          organisation: "FunctionUp",
        },
        "functionup-radon"
      );
      res.setHeader("x-auth-token", token);
      //console.log(res)
      res.send({ status: true, token: token });
    }
    else{
      res.status(400).send({msg:"No data Entered, BAD REQUEST"})
    }
  
  }
  catch(err){
    console.log("This is the error", err)
    res.status(500).send({msg:"server error", error:err})
  }
};


// GET USER DATA API----------------------------------------------------
const getUserData = async function (req, res) {
  try{
    
    
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });
      res.status(201).send({ status: true, data: userDetails });
  
  }
  catch(err){
    console.log("This is the error", err)
    res.status(500).send({msg:"server error", error:err})
  }


  
};




// UPDATE USER DETAILS API------------------------------------------------
const updateUser = async function (req, res) {

  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: true, msg:"Data Updated" });

}
catch(err){
  console.log("This is the error", err)
  res.status(500).send({msg:"server error", error:err})
}
};





// DELETE USER API----------------------------------------------------
const deleteUser = async function (req, res) {


  try{
    
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId },
      { $set: { isDeleted:true } }
   ,user);
    res.status(201).send({ status: true, msg:"User Delete (isDeleted is set as True)"});

}
catch(err){
  console.log("This is the error", err)
  res.status(500).send({msg:"server error", error:err})
}
};



// UPDATED POST MESSAGE---------------------------------------------

const postMessage = async function (req, res) {
  
  try{
   
  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})

  let message = req.body.message
  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
  //return the updated user document
  return res.status(201).send({status: true, data: updatedUser})
  
  }
  catch(err){
    console.log("This is the error", err)
    res.status(500).send({msg:"server error", error:err})
  }



}


module.exports.createUser = createUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.loginUser = loginUser
module.exports.deleteUser=deleteUser
module.exports.postMessage = postMessage