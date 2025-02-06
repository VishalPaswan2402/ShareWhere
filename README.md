# Share Images - MERN Application

This is a simple **MERN (MongoDB, Express, React, Node.js)** application that allows users to upload, share, and download images using a **secret code**. After uploading an image, the user gets a secret code to securely download the image.

## Features
- **Upload Image**: Users can select and upload images to the server.
- **Secret Code**: A secret code is generated for each image upload, which is required to download the image.
- **Secure Sharing**: Only users with the correct secret code can download the image.
- **Image Display**: View the uploaded image directly through the generated URL.
  
## Technologies Used
- **MongoDB**: Database to store image metadata (like URL, filename, and secret code).
- **Express.js**: Web framework to handle API routes.
- **React**: Frontend framework to build the user interface.
- **Node.js**: JavaScript runtime to run the server-side code.
- **Multer**: Middleware for handling file uploads.
- **Cloudinary** (or local storage, depending on implementation): For storing the images securely.

## Installation

### Prerequisites

- Node.js installed
- MongoDB running (locally or using a cloud provider like MongoDB Atlas)

### Steps

1 **Clone the repository:**

```bash
git clone https://github.com/yourusername/share-images.git
cd share-images

2 **Navigate to the backend directory:**

cd backend

3 **Install backend dependencies:**

npm install

4 **Set up environment variables:**

Create a .env file in the backend directory and add your credentials:
MONGO_URI=your_mongo_database_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

5 **Start the backend server:**

npm start

6 **Navigate to the frontend directory:**

cd frontend

7 **Install frontend dependencies:**

npm install

8 **.env setup**

Update the API endpoint URL in your frontend to match your backend server. You can configure this in your .env or directly in the API call files.

9 **Start the frontend development server:**

npm start

10 **Running server**

The frontend will be running on http://localhost:5173.
The backend server will be running on http://localhost:5174.

### Usage

1. Open the application in your browser.
2. Click on the "Choose File" button to select an image from your device.
3. Click "Upload & Share" to upload the image to the server.
4. Once the upload is complete, a secret code will be provided.
5. To download the image, enter the secret code on the download image.
