// const express = require("express");
// const router = express.Router();
// const User = require("../schemas/user.js");


// // router.get("/signup",(req,res)=>{
// //     res.render("../frontend/src.landing_page/signup/signup.js");
// // });

// router.post("/signup",async(req,res)=>{
//    let{username,email,password}=req.body;
//     const newUser= new User({email,username});
//       const registeredUser = await User.ragister(newUser,password);
//       console.log(registeredUser);
//     res.redirect("/products");
//     });

// module.exports=router;




// const express = require('express');
// const router = express.Router();
// const User = require('../schemas/user');

// router.post('/signup', async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const user = new User({ username, email });
//     await User.register(user, password);
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Signup failed', error: err.message });
//   }
// });

// module.exports = router;













const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const User = require("../schemas/user");

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "User registered successfully" });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = crypto.randomBytes(30).toString("hex");
    user.token = token;
    await user.save();

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username
      }
    });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
