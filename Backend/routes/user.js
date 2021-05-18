const express = require("express");
const router = express.Router();

const getUsers = require("../controllers/usersControllers");
const createUser = require("../controllers/usersControllers");

router.get("/", getUsers);
router.post("/", createUser);

module.exports = router;
