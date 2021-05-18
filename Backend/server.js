const express = require("express");

const router = express();
const cors = require("cors");

// routes

const userRoutes = require("./routes/user");

//bodyParser

const bodyParser = require("body-parser");

//urenconded

router.use(
  express.urlencoded({
    extended: false,
  })
);
//connection mongo
const connectDb = require("./config/db");
connectDb();
const PORT = process.env.PORT;

// cors
router.use(cors());

// enviar imagenes
router.use(bodyParser.json({ limit: "30mb", extended: true }));
router.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// router for front-end
router.use("/users", userRoutes);

// router.post("/user/data", (req, res) => {
//   res.json(req.body);
//   res.json({
//     msg: "user name successfully received!",
//     username: req.body.username,
//   });
// });

//listens

router.listen(PORT, () => {
  console.log("server is running on " + PORT);
});
