const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Middleware=require("../middleware/auth")

router.post("/createUser", userController.createUser  )
router.post("/userLogin", userController.loginUser)
router.get("/getUserData/:userId",Middleware.validationToken, userController.getUserData)
router.put("/updateUser/:userId",Middleware.validationToken, userController.updateUser)
router.delete("/deleteUser/:userId",Middleware.validationToken, userController.deleteUser)
router.post("/users/:userId/posts",Middleware.validationToken, userController.postMessage)



module.exports = router;