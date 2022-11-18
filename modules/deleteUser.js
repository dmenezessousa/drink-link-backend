const User = require("../model/user");

async function deleteUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ user });
  } catch {
    next(error);
  }
}

module.exports = deleteUser;
