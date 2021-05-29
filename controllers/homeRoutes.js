const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    console.log(posts);
    res.render("homepage"),
      {
        posts,
        loggedIn: req.session.loggedIn,
      };
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/dashboard", withAuth, (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
