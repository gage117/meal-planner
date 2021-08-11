const router = require("express").Router();
const siteRecipeController = require("../../controllers/siteRecipeController");

// Matches with "/api/siteRecipes"
router.route("/")
  .get(siteRecipeController.findAll)
  .post(siteRecipeController.create);

// Matches with "/api/siteRecipes/:id"
router
  .route("/:id")
  .get(siteRecipeController.findById)
  .put(siteRecipeController.update)
  .delete(siteRecipeController.remove);

module.exports = router;