const User = require("../model/UserModel");
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcrypt");

exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Validate fields
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, username });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("LOGIN TRY:", { email, password });

    if (!email || !password) {
      console.log("Missing email or password");
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });
    console.log("User fetched:", user);

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid?", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id);
    console.log("Token created:", token);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, message: "User logged in successfully" });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
