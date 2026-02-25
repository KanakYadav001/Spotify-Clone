const {ImageKit}  = require('@imagekit/nodejs');


const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});



async function UploadSongs(music,title){

const response = await client.files.upload({
  file: music.buffer.toString('base64'),
  fileName: title,
  folder : "yt-music/songs"
});

 return response;
}



module.exports=UploadSongs