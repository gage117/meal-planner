const router = require("express").Router();
const siteRecipeController = require("../../controllers/siteRecipeController");

// Matches with "/api/siterecipes"
router.route("/")
  .get(siteRecipeController.findAll)
  .post(siteRecipeController.create);

// Matches with "/api/siterecipes/:id"
router
  .route("/:id")
  .get(siteRecipeController.findById)
  .put(siteRecipeController.update)
  .delete(siteRecipeController.remove);

module.exports = router;