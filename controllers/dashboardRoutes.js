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

    const posts = userPosts.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, (req, res) => {
  try {
    const findPost = Post.findByPk(req.params.id);
    if (findPost) {
      const post = findPost.get({ plain: true });

      res.render("editpost", {
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("homepage");
  }
});
module.exports = router;
