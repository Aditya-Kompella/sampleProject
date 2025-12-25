import { userModel } from "../../models/user.js";
import bcrypt from "bcrypt";

export class userController {
  constructor() {
    // console.log("inside login controller");
  }

  signIn(req, res) {
    console.log("signIn Function");
    try {
      const { email, password } = req.body;

      // Add your authentication logic here
      // Example: verify credentials against database

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      // Placeholder response
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: { email },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error during login",
      });
    }
  }
  async getUser(req, res) {
    try {
      const email = req.params.email;
      let usersList;
      if (email) {
        usersList = await userModel.find({ email: email });
        if (!usersList || usersList.length === 0) {
          return res.status(404).send({
            error: "Email is incorrect",
            message: `No user found with email: ${email}`,
          });
        }
      } else {
        usersList = await userModel.find({});
      }

      console.log(
        "body/query: ",
        email ? { email } : "find all with limit 1, skip 1"
      );
      return res.status(200).send(usersList);
    } catch (err) {
      return res.status(500).send({ err: err.message });
    }
  }
  async signUp(req, res) {
    try {
      console.log("Request body:", req.body);
      const { email, password, firstName, lastName } = req.body;
      if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }
      // Add your user creation logic here
      const existingUser = await userModel.findOne({
        email: email.toLowerCase(),
      });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }
      console.log("parseInt(process.env.BcryptKey)");
      const hashedPassword = await bcrypt.hash(
        password,
        parseInt(process.env.Bcryptsalt)
      );
      const newUser = await userModel.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: { email, firstName, lastName },
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "User already exists with this email",
        });
      }

      console.error("Signup error:", error);
      res.status(500).json({
        success: false,
        message: "Server error during signup",
      });
    }
  }

  logout(req, res) {
    try {
      // Add your logout logic here
      // Example: clear session, invalidate token, etc.

      res.status(200).json({
        success: true,
        message: "Logout successful",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error during logout",
      });
    }
  }

  async deleteUser(req, res) {
    try {
      let userId = req.params.id;
      if (userId) {
        let userDetails = await userModel.findByIdAndDelete(userId);
        console.log("userDetails: ", userDetails);
        if (userDetails) {
          return res.status(201).send({ message: "user deleted succesfully" });
        } else {
          throw new Error("User Details are Invalid");
        }
      } else {
        throw new Error("send user id");
      }
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
}
