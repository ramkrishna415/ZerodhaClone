// const mongoose= require("mongoose");
// const Schema =mongoose.Schema;
// const passportLocalMongoosw = require("passport-local-mongoose");


// const userSchema = new Schema({
//     email:{
//         type:String,
//         required:true,
//     },
// });
// User.plugin(passportLocalMongoosw);
// module.exports = mongoose.model("User",userSchema);


// const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

// const userSchema = new mongoose.Schema({
//   email: String,
//   username: String,
// });

// userSchema.plugin(passportLocalMongoose); // Adds password hashing

// module.exports = mongoose.model('User', userSchema);



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  email: String,
  password: String,
  token: String
});

module.exports = mongoose.model("User", userSchema);

