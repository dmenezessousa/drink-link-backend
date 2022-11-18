const User = require("../model/user");

async function findOrCreateUser(req, res, next) {
  const { email } = req.user;
  try {
    let foundUser = await User.findOne({ email });
    if (!foundUser) {
      foundUser = await User.create({ email });
    }
    res.status(200).send(foundUser);
  } catch {
    next(error);
  }
}

module.exports = findOrCreateUser;
