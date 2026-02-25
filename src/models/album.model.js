const mongoo = require("mongoose");

const AlbumScema = new mongoo.Schema({
  title: {
    type: String,
    required : true
  },
  songs: [
    {
      type: mongoo.Schema.Types.ObjectId,
      ref: "musics",
    },
  ],
  artist: {
    type: mongoo.Schema.Types.ObjectId,
    ref: "users",
  },
});


const AlbumModel = mongoo.model('album',AlbumScema)



module.exports=AlbumModel
