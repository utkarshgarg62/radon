const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")


router.post("/createBook", bookController.createBook  )

router.get("/bookList", bookController.bookList)

router.get("/getBookInYear", bookController.getBookInYear  )

router.get("/getParticularBooks/:key", bookController.getParticularBooks)

router.get("/getXINRBooks", bookController.getXINRBooks)

router.get("/getRandomBooks", bookController.getRandomBooks)


module.exports = router;