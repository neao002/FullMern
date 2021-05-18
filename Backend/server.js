const express = require("express");
const router = express();
var cors = require("cors");
const PORT = 5000;

router.use(cors());
// router for front-end
router.get("/user/data", (req, res) => {
  res.json("it works");
});

router.post("/user/data", (req, res) => {
  res.json(req.body);
  res.json("user name successfully received!");
});

router.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
