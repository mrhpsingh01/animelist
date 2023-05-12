const User = require("../models/User");
const { hashPassword } = require("../utils/bcrypt");

// Controller function for user registration
exports.registerUser = async (req, res) => {
  try {
    // Destructure the required fields from the request body
    const { name, email, gender, age, phone, country, password } = req.body;

    // Regular expressions for field validation
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const genderRegex = /^(male|female|other)$/i;
    const ageRegex = /^[1-9][0-9]?$/;
    const phoneRegex = /^\+\d{1,3}\d{9}$/;
    const countryRegex = /^[a-zA-Z\s]*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Check name format
    if (!nameRegex.test(name)) {
      return res.json({ status: "error", error: "Invalid name format" });
    }

    // Check email format
    if (!emailRegex.test(email)) {
      return res.json({ status: "error", error: "Invalid email format" });
    }

    // Check gender format
    if (!genderRegex.test(gender)) {
      return res.json({ status: "error", error: "Invalid gender" });
    }

    // Check age format
    if (!ageRegex.test(age)) {
      return res.json({ status: "error", error: "Invalid age" });
    }

    // Check phone format
    if (!phoneRegex.test(phone)) {
      return res.json({ status: "error", error: "Invalid phone number" });
    }

    // Check country format
    if (!countryRegex.test(country)) {
      return res.json({ status: "error", error: "Invalid country format" });
    }

    // Check password format
    if (!passwordRegex.test(password)) {
      return res.json({
        status: "error",
        error:
          "Invalid password format: A valid password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
      });
    }

    // Check if the user already exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({ status: "error", error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await hashPassword(req.body.password);

    // Create a new user instance
    const newUser = new User({
      name: name,
      email: email,
      gender: gender,
      age: age,
      phone: phone,
      country: country,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    res.json({ status: "ok" });
  } catch (err) {
    // Log any errors that occur during the process
    console.log(err);

    // Send an error response if there's a server error
    res.json({ status: "error", error: "Server error" });
  }
};

// In this code block
// the required fields (name, email, gender, age, phone, country, password) are destructured from the req.body object. These fields are assumed to be present in the request body.

// Regular expressions are used to define patterns for field validation. Each regular expression corresponds to a specific field and ensures that the input matches the desired format.

// Here's an explanation of each regular expression:

// nameRegex: Allows only alphabetical characters and spaces.
// emailRegex: Validates the email format.
// genderRegex: Validates the gender value as "male", "female", or "other" (case-insensitive).
// ageRegex: Validates the age as a positive integer with a maximum of 99.
// phoneRegex: Validates the phone number format with a country code (+) and 10 digits.
// countryRegex: Allows only alphabetical characters and spaces for the country name.
// passwordRegex: Validates the password format. It requires at least one lowercase letter, one uppercase letter, one digit, and a minimum length of 8 characters.
// The code then checks each field against its corresponding regular expression using the test() method. If a field does not match the expected format, an error response is sent with an appropriate error message.

// For example, if the name format is invalid, the code block returns a JSON response with the status "error" and an error message: "Invalid name format".

// This field validation ensures that the provided user data meets the required format before proceeding with user registration.
// This code block checks if a user with the same email already exists in the database. It uses the findOne() method of the User model to search for a user with the specified email. If a user is found, it means that the email is already registered, and an error response is sent with the message "User already exists".
// This code block uses the hashPassword() function to hash the user's password obtained from the request body. The hashPassword() function takes the password as input and returns a hashed version of the password. The hashed password is stored in the hashedPassword variable.
// This code block creates a new instance of the User model using the new keyword. The instance is assigned to the newUser variable and initialized with the user's details, including the hashed password.
// This code block saves the newly created user to the database using the save() method. The await keyword ensures that the saving process is completed before moving to the next line of code.
// If the user registration process is successful without any errors, this code block sends a JSON response with the status "ok" indicating a successful registration.
// This code block is the catch block for handling any errors that may occur during the user registration process. If an error occurs, it is logged to the console for debugging purposes. Additionally, an error response is sent with the message "Server error" to inform the client about the encountered server error.

// Overall, this code handles the user registration process by checking for existing users, hashing the password, creating a new user instance, saving it to the database, and sending appropriate responses based on the success or failure of the registration process.
