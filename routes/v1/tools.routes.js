const router = express.Router();
const toolsController = require("../../controller/tools.controller");


router.route
    .get(toolsController.getAllTools)
    .post(toolsController.postAllTools)

export default router;