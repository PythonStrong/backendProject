const express = require("express");
const router = express.Router();
const { User } = require("../modules/user");

router.post("/create", async (req, res) => {
  let { name, lastName, age, job } = req.body;

  const validData = await User.findOne({
    name,
    lastName,
    age,
    job,
  });

  if (validData)
    return res.json({
      status: false,
      message: "Sz oldin ro'yhatdan o'ting",
    });

  const data = await User({
    name,
    lastName,
    age,
    job,
  });

  await data.save();
  res.json({
    status: true,
    message: "Ma'lumot qoshildi",
  });
});

router.get("/all", async (req, res) => {
  const allData = await User.find();
  // .populate(
  //   "name",
  //   "lastName",
  //   "age",
  //   "job"
  // );
  res.json({
    status: true,
    message: allData,
  });
});

router.get("/:id", async (req, res) => {
  const allData = await User.findById(req.params.id);
  res.json({
    status: true,
    message: allData,
  });
});
module.exports = router;
