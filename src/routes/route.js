const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


router.post("/createAuthor", BookController.createAuthor  )
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData  )
router.get("/getAuthor", BookController.getAuthor  )
router.get("/getBook", BookController.getBook  )
router.get("/booksByAuthorId/:key", BookController.booksByAuthorId  )
router.get("/authorByRating", BookController.authorByRating  )




module.exports = router;