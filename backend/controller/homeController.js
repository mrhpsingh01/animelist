// Router handler for the home route
exports.homeRouter = (req, res) => {
  // Extract the token from the request headers
  const token = req.headers["x-access-token"];

  // Log the token to the console
  console.log(token);

  // Check if the token is "null"
  if (token === "null") {
    // If the token is "null", return a 401 Unauthorized response with an error message
    return res.status(401).json({ message: "Invalid" });
  }

  // If the token is not "null", send a response indicating that it is valid
  res.json({ message: "valid" });
};

// In the above code:

// The homeRouter function serves as the handler for the home route.
// The code extracts the token from the request headers using req.headers["x-access-token"].
// The token is logged to the console using console.log(token).
// The code then checks if the token is equal to the string "null".
// If the token is "null", the code returns a 401 Unauthorized response with a JSON object containing an error message.
// If the token is not "null", the code sends a JSON response indicating that the token is valid.
