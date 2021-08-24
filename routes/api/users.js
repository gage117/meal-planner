const router = require("express").Router();
const UserController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;