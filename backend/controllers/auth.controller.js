import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signUpcontroller = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: `User with email ${email} already exists`,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).send({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In SignUP",
      error,
    });
  }
};
