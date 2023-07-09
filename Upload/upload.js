require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



// //single image upload
// const image = "./public/img/sweater.jpg";
// (async function run(){
//     const result =  await cloudinary.uploader.upload(image)
//     console.log(result);
//   })();




// multiple file upload
// const images =[
//     './public/img/mittens.jpg',
//     './public/img/sweater.jpg'
// ]
// const upload = async() => {
// for (const image of images){
//     const result =await cloudinary.uploader.upload(image);
//     console.log(result);
// }
// };

// upload()