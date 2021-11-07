const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const MONGO_URI =
  'mongodb+srv://hermes:h3rm3sh3rm3s@codesmith.jttpr.mongodb.net/hermes?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'hermes',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, minlength: 8 },
  token: String,
  address: {
    address1: { type: String, required: true },
    address2: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
  },
  trackingNumbers: { type: Number },
});

userSchema.pre('save', function(next) {
  console.log('pre fired!')
  let user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hashedPassword) => {
        if (err) return next(err);
        user.password = hashedPassword;
        return next();
      });
    });
  } else {
    next();
  }
});

// will work on session functionality later
// userSchema.methods.generateToken = (user, callback) => {
//   // const token = jwt.sign({id: user._id, 'jwtsecret'});

//   // user.token = token;

//   user.save()
//     .then(user => {
//       callback(null, user);
//     })
//     .catch(err => callback(err));
// };

const User = mongoose.model('user', userSchema);

module.exports = { User };
