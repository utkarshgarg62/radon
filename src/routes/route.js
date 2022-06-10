const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")


router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher", publisherController.createPublisher  )
router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.get("/getBooksWithAutPub", bookController.getBooksWithAutPub)
router.put("/updateBookDetails", bookController.updateBookDetails)




// router.get("/getAuthorsData", authorController.getAuthorsData)
// router.post("/createBook", bookController.createBook  )

module.exports = router;