const mongo = require("mongoose");

const MusicScema = new mongo.Schema({
  url: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongo.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const MusicModel = mongo.model("music", MusicScema);

module.exports = MusicModel;
