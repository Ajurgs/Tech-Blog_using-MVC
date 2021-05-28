const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newUserData = await User.create(req.body);
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(newUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      // err 400
      res.status(400).json("Incorrect Email or Password. Please try again!");
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      // err 400
      res.status(400).json("Incorrect Email or Password. Please try again!");
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({
        user: userData,
        message: "You are now logged in!",
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
