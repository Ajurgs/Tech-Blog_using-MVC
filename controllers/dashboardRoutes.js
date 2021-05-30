const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  try {
    // get user posts
    const userPosts = Post.findAll({
      where: {
        user_id: req.session.userId,
      },
    });
    res.render("dashboard", {
      userPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
