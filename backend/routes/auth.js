const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello World from the auth.js`);
});

// ============================================================================
//                      Promise Version to register user
// ============================================================================
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({
//       error: "please fill all fields",
//     });
//   }

//   User.findOne({ email:email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({
//           error: "User already exist",
//         });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({
//             message: "User Registered successfully",
//           });
//         })
//         .catch((err) =>
//           res.status(500).json({
//             error: "Failed to register",
//           })
//         );
//     })
//     .catch((err) => console.log(err));

// });

// ============================================================================
//                  Async Await version to Register User
// ============================================================================
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({
      error: "please fill all fields",
    });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({
        error: "User already exist",
      });
    } else if (password !== cpassword) {
      return res.status(422).json({
        error: "Password does not match",
      });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({
        message: "User Registered successfully",
      });
    }   
   
  } catch (err) {
    console.log(err);
  }
});

// ============================================================================
//                Async Await version to Lgin User
// ============================================================================
router.post("/signin", async (req, res) => {
  try {
    const {email, password} = req.body;
    if(!email || !password) {
      return res.status(400).json({
        error: "Please fill all fields"
      });
    }

    const userExist = await User.findOne({email:email});
    if(userExist) {
      const isPasswordMatch = await bcrypt.compare(password, userExist.password);

      const token = await userExist.generateAuthToken();
      console.log(token);
      res.cookie('jwtToken', token, {
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true,
      });

      if(!isPasswordMatch) {
        return res.status(400).json({error: "Invalid Credenials"});
      }
      else {
        return res.json({message: "User sign in successfully."});
      }
    }
    else {
      return res.status(400).json({error: "Invalid Credenials"});
    }
  }
  catch(err) {
    console.log(err);
  }
});



module.exports = router;
