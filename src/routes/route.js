const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


router.post("/createAuthor", BookController.createAuthor  )
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData  )
router.get("/getAuthor", BookController.getAuthor  )
router.get("/getBook", BookController.getBook  )


module.exports = router;