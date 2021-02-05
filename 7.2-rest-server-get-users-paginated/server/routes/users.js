const express = require("express");
const router = express.Router();

const R = require("ramda");

const User = require("../models/user");

router.get("/", (req, res) => {
  let from = req.query.from || 0;
  from = Number(from);

  let limit = req.query.limit || 5;
  limit = Number(limit);

  User.find({ state: true }, "username email role state google img")
    .skip(from)
    .limit(limit)
    .exec((err, users) => {
      if (err) {
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        res.json({
          ok: true,
          users,
        });
      }
    });
});

router.post("/", (req, res) => {
  let body = req.body;

  let user = new User({
    username: body.username,
    email: body.email,
    password: body.password,
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
  let body = R.pick(["username", "email", "img", "role", "state"], req.body);

  User.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, userDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        user: userDB,
      });
    }
  );
});

router.delete("/", (req, res) => {
  res.json("DELETE User");
});

module.exports = router;
