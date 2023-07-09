const express = require('express');
const router = express.Router();
const usersController = require("../../controller/users.controller")

router.route("/")
    .get(usersController.getUsers)

module.exports = router