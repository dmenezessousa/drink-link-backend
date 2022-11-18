const Cocktail = require("../model/cocktails");
const User = require("../model/user");
async function deleteCocktailFromFavorites(req, res, next) {
  try {
    const cocktail = await Cocktail.findByIdAndDelete(req.params.id);
    if (!cocktail) {
      res.status(404).send("Drink not found");
    } else {
      let foundUser = await User.findOne({ email: req.user.email });
      let userCocktails = foundUser.favoriteCocktails;
      let filteredCocktails = userCocktails.filter(
        (item) => item._id.toString() != req.params.id
      );
      foundUser.favoriteCocktails = filteredCocktails;
      await foundUser.save();
      res.status(200).json(foundUser);
    }
  } catch (e) {
    next("error: " + e);
  }
}

module.exports = deleteCocktailFromFavorites;
