const model = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { connect } = require('mongoose');
const userController = {};

userController.addUser = (req, res, next) => {
  try {
    const { name, email, password, address } = req.body;
    const newUser = new model.User({
      name: name,
      email: email,
      password: password,
      address: {
        address1: address.address1,
        address2: address.address2,
        city: address.city,
        state: address.state,
        zip: address.zip,
      },
    });
    newUser.save((err, user) => {
      console.log(user);
      if (err) return next(err);
      res.locals.newUser = user;
      return next();
    });
  } catch (err) {
    return next(err);
  }
};

userController.getUsers = (req, res, next) => {
  try {
    model.User.find({}, (err, users) => {
      res.locals.users = users;
      return next();
    });
  } catch (err) {
    return next(err);
  }
};

userController.findUser = (req, res, next) => {
  try {
    const { email, password } = req.body;
    model.User.findOne({ email: email }).then((user) => {
      res.locals.user = null;

      if (!user) {
        res.locals.userFound = false;
        return next();
      } else res.locals.userFound = true;

      bcrypt.compare(password, user.password, (err, result) => {
        res.locals.userVerified = result;
        console.log(res.locals.userVerified);
        if (err) return next(err);
        if (res.locals.userVerified) res.locals.user = user;
        return next();
      });

    });
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
