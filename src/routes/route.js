const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewBooks", UserController.createNewBooks  )

router.get("/getNewBooksList", UserController.getNewBooksList)

module.exports = router;