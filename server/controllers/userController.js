const model = require('../models/userModel');

const userController = {};

userController.addUser = (req, res, next) => {
  try {
    const { name, email, password, address } = req.body;
    const newUser = new model.User(
      {
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
      })
      newUser.save((err, user) => {
        console.log(user);
        if (err) return next(err);
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
    });
  } catch (err) {
    return next(err);
  }
};

userController.findUser = (req, res, next) => {
  const { email, password } = req.body
  try {
    model.User.findOne ({ email })
      .then(user => {
        user.validatePassword(user.password, password, (err, isAMatch) => {
          if (err) return next(err);
          // user.generateToken(user, (err, user) => {
          //   if (err) return next(err);
          //   res.cookie('hermes', user.token, {
          //     maxAge: 1800000,
          //     httpOnly: true
          //   });

          //   return next();
          // });
        });
      });
  } catch (err) {
    return next(err);
  };
};

module.exports = userController;
