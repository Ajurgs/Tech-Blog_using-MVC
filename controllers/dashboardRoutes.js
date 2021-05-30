const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // get user posts
    const userPosts = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    const posts = userPosts.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const findPost = await Post.findByPk(req.params.id);
    if (findPost) {
      const post = findPost.get({ plain: true });

      res.render("editpost", {
        post,
        loggedIn: req.session.loggedIn,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("homepage");
  }
});

router.get("/new", withAuth, async (req, res) => {
  try {
    res.render("newpost", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.redirect("dashboard");
  }
});
module.exports = router;
