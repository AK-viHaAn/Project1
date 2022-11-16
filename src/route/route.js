
const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController.js")
const blogController = require("../controller/blogController.js")


router.post("/authors", authorController.createAuthor)
router.post("/blogs", blogController.createBlog)
router.get("/blogs", blogController.getFilteredBlog)
router.delete("/blogs/:blogId", blogController.deleteBlogById)
// router.delete("/blogs/:blogId", blogController.deleteBlog)
router.delete("/blogs/", blogController.DeleteBlog)
router.put("/blogs/:blogId", blogController.putBlog)
router.post("/login", authorController.loginAuthor)



module.exports = router