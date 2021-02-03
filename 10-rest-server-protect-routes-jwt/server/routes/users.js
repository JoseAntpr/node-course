const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const User = require("../models/user");
const { verifyToken } = require("../middlewares/auth");

router.get("/", verifyToken, (req, res) => {
  User.find({ state: true }, "username email role google img", (err, users) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      users,
    });
  });
});

router.post("/", (req, res) => {
  let body = req.body;

  let user = new User({
    username: body.username,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  user.save((err, userDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    } else {
      res.json({
        ok: true,
        user: userDB,
      });
    }
  });
});

router.put("/:id", (req, res) => {
  let id = req.params.id;

  res.json({
    id,
  });
});

router.delete("/", (req, res) => {
  res.json("DELETE User");
});

module.exports = router;
