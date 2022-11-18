const Cocktail = require("../model/cocktails");
const User = require("../model/user");
async function getCocktails(req, res, next) {
  try {
    let foundUser = await User.findOne({ email: req.user.email });
    let foundCocktails = await Cocktail.find({
      _id: { $in: foundUser.favoriteCocktails },
    });
    if (foundCocktails.length === 0) {
      res.status(200).json({ message: "No cocktails found" });
    } else {
      res.status(200).json(foundCocktails);
    }
  } catch (e) {
    next("error message getCocktails" + e);
  }
}

module.exports = getCocktails;
