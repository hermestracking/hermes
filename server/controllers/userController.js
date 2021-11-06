const model = require('../models/userModel.js');

const userController = {};

userController.addUser = (req, res, next) => {
  try {
    const { name, address, email } = req.body;
    model.User.create(
      {
        name: name,
        address: {
          address1: address.address1,
          address2: address.address2,
          city: address.city,
          state: address.state,
          zip: address.zip,
        },
        email: email,
      },
      (err, user) => {
        res.locals.newUser = user;
        return next();
      }
    );
  } catch (err) {
    return next(err);
  }
};

userController.getUsers = (req, res, next) => {
  try {
    model.User.find({}, (err, users) => {
      res.locals.users = users;
      return next();
    })
  } catch (err) {
    return next(err);
  }
}

module.exports = userController;
