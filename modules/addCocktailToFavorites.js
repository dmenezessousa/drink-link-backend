const Cocktail = require("../model/cocktails");
const User = require("../model/user");

async function addCocktailToFavorites(req, res, next) {
  console.log("req.body", req.body);
  try {
      const foundUser = await User.findOne({ email: req.user.email });
      const newCocktail = await Cocktail.create(req.body.cocktail);
      foundUser.favoriteCocktails.push(newCocktail);
      await foundUser.save();
      res.status(200).json({message: "Cocktail added to favorites"});
  } catch {
    next(error);
  }
}

module.exports = addCocktailToFavorites;