import cloudinary from 'cloudinary'

export const uploadImage = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result, "Data");
        return result.public_id;
    } catch (error) {
        console.error(error);
    }
};

export const uploadFile = async () => {
    const imagePath = 'https://i.pinimg.com/originals/e2/5d/fd/e25dfd426d73449a2d28e840aa1ee4ce.jpg';
    const publicId = await uploadImage(imagePath);
    // Get the colors in the image
    // const colors = await getAssetInfo(publicId);
}


// export const getAssetInfo = async (publicId) => {

//     const options = {
//         colors: true,
//     };

//     try {
//         const result = await cloudinary.api.resource(publicId, options);
//         console.log(result,"color");
//         return result.colors;
//     } catch (error) {
//         console.error(error);
//     }
// };