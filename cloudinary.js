const cloudinary = require("cloudinary").v2;
console.log('process.env.CLOUD_SECRET: ', process.env.CLOUD_SECRET);
cloudinary.config({
  cloud_name: "dprmq8go0",
  api_key: "279447747466865",
  api_secret: process.env.CLOUD_SECRET,
  
});

module.exports = { cloudinary };
