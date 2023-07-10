const express = require("express");
const router = express.Router();
const toolsController = require("../../controller/tools.controller");
const viewCount = require("../../middleware/viewCount");
const limiter = require("../../middleware/limiter")


router.route("/")
    .get(toolsController.getAllTools)
    .post(toolsController.postAllTools)

router.route("/:id")
    .get(viewCount, limiter, toolsController.getATools)
    .patch(toolsController.updateTool)

module.exports = router;