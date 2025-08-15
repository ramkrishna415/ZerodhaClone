const express = require("express");
const router = express.Router();
const User = require("../schemas/user.js");


// router.get("/signup",(req,res)=>{
//     res.render("../frontend/src.landing_page/signup/signup.js");
// });

router.post("/signup",async(req,res)=>{
   let{username,email,password}=req.body;
    const newUser= new User({email,username});
      const registeredUser = await User.ragister(newUser,password);
      console.log(registeredUser);
    res.redirect("/products");
    });




module.exports=router;




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
