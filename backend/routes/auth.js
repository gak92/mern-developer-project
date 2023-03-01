const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello World from the auth.js`);
});

// ============================================================================
// Promise Version to register user
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
//Async Await version to Register User
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
    }

    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();
    res.status(201).json({
      message: "User Registered successfully",
    });
   
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
