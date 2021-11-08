const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://hermes:h3rm3sh3rm3s@codesmith.jttpr.mongodb.net/hermes?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "hermes",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  address: {
    address1: { type: String, required: true },
    address2: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
  },
  email: { type: String, required: true },
  trackingNumbers: { type: Number },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
