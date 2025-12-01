import User from "../Models/user.schema.js";
import bcrypt from "bcrypt";

//Register a new User || Signup the new user

export const registerUser = async (req, res) => {
  try {
    // Method 1
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    //console.log(hashPassword);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res
      .status(200)
      .json({ message: "User Registered Successfully", data: newUser });

    /*Method 2
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .json({ message: "User Registered Successfully", data: newUser });
      */
  } catch (error) {
    res
      .status(500)
      .json({ message: "User Not Registered Error in register user" });
  }
};


//Login the user || signin user

