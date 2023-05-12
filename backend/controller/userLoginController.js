const User = require("../models/User");
const { comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

// Controller function for user login
exports.loginUser = async (req, res) => {
  try {
    // Find the user in the database based on the provided email
    const user = await User.findOne({ email: req.body.email });

    // If the user does not exist, return an error response
    if (!user) {
      return res.json({ status: "error", error: "Invalid email or password" });
    }

    // Compare the provided password with the user's hashed password
    const passwordMatch = await comparePassword(
      req.body.password,
      user.password
    );

    // If the passwords do not match, return an error response
    if (!passwordMatch) {
      return res.json({ status: "error", error: "Invalid email or password" });
    }

    // Generate a token for the authenticated user
    const token = generateToken(user);

    // Return a success response with the generated token
    res.json({ status: "ok", user: token });
  } catch (err) {
    // Log any errors that occur during the process
    console.log(err);

    // Send an error response if there's a server error
    res.json({ status: "error", error: "Server error" });
  }
};

// In the above code:

// The User module and necessary utility functions (comparePassword and generateToken) are imported.
// The loginUser function is an asynchronous function that serves as the controller for user login functionality.
// Inside the function, the code attempts to find a user in the database based on the provided email using User.findOne().
// If the user does not exist, an error response is returned.
// The code then compares the provided password with the user's hashed password using the comparePassword function.
// If the passwords do not match, an error response is returned.
// If the passwords match, a token is generated for the authenticated user using the generateToken function.
// Finally, a success response is returned with the generated token.
// Any errors that occur during the process are logged to the console, and a generic error response is sent if there's a server error.
