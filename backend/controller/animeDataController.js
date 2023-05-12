const AnimeData = require("../models/AnimeData");

// Controller function to fetch anime data
exports.animeData = async (req, res) => {
  try {
    // Fetch all anime data from the database
    const result = await AnimeData.find();

    // Send the result as a response
    res.send({ result });
  } catch (err) {
    // Log any errors that occur during the process
    console.log(err);

    // Send an error response if there's a server error
    res.json({ status: "error", error: "Server error" });
  }
};

// In the above code:

// The AnimeData module is imported using require("../models/AnimeData").
// The animeData function is an asynchronous function that serves as the controller for handling requests related to anime data.
// Inside the try block, the code calls the find() method on the AnimeData model to fetch all anime data from the database.
// The fetched data is then sent as a response using res.send({ result }).
// In case an error occurs during the execution of the try block, the error is logged using console.log(err).
// If there's a server error, an error response is sent back with res.json({ status: "error", error: "Server error" }).
