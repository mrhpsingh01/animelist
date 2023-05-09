const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    Title: {
      type: String,
    },
    Synonyms: {
      type: String,
    },
    English: {
      type: String,
    },
    Synopsis: {
      type: String,
    },
    Episodes: {
      type: Number,
    },
    Source: {
      type: String,
    },
    Genres: {
      type: String,
    },
    Themes: {
      type: String,
    },
    Rating: {
      type: String,
    },
    Score: {
      type: Number,
    },
    Scored_Users: {
      type: Number,
    },
    Ranked: {
      type: Number,
    },
    Popularity: {
      type: Number,
    },
    Members: {
      type: Number,
    },
    Favorites: {
      type: Number,
    },
  },
  { collection: "anime-shows" }
);

const AnimeData = mongoose.model("AnimeData", AnimeSchema);

module.exports = AnimeData;
