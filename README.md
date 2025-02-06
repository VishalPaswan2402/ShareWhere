# ShareWhere - MERN Application

This is a simple **MERN (MongoDB, Express, React, Node.js)** application that allows users to upload, share, and download images using a **secret code**. After uploading an image, the user gets a secret code to securely download the image.

## Features
- **Upload Image**: Users can select and upload images to the server.
- **Secret Code**: A secret code is generated for each image upload, which is required to download the image.
- **Secure Sharing**: Only users with the correct secret code can download the image.
- **Image Display**: View the uploaded image directly through the generated URL.
- **Responsive**: The application is responsive, ensuring it works well on both desktop and mobile devices.
- **No Credentials Required**: No sign-up or login credentials are required to use the image upload and sharing features.
  
## Technologies Used
- **MongoDB**: Database to store image metadata (like URL, filename, and secret code).
- **Express.js**: Web framework to handle API routes.
- **React**: Frontend framework to build the user interface.
- **Node.js**: JavaScript runtime to run the server-side code.
- **Multer**: Middleware for handling file uploads.
- **Cloudinary** (or local storage, depending on implementation): For storing the images securely.
- **CSS**: Styling the user interface.
- **Font Awesome**: Icon library used to add scalable vector icons.

## Website images

### Home page
![Home page](/readmeImage/Screenshot%202025-02-06%20190125.png)

### Upload page
![Upload page](/readmeImage/Screenshot%202025-02-06%20190148.png)

### Code page
![Code page](/readmeImage/Screenshot%202025-02-06%20190213.png)

### Download page
![Download page](/readmeImage/Screenshot%202025-02-06%20190318.png)


## Installation

### Prerequisites

- Node.js installed
- MongoDB running (locally or using a cloud provider like MongoDB Atlas)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/VishalPaswan2402/ShareWhere.git
    cd share-images
    ```

2. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

3. **Install backend dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**
   - Create a `.env` file in the backend directory and add your credentials:

    ```bash
    DATABASE_URL=your_mongo_database_url
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    FRONTEND_ORIGIN=front_end_url
    ```

5. **Start the backend server:**

    ```bash
    node index.js
    ```

6. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

7. **Install frontend dependencies:**

    ```bash
    npm install
    ```

8. **.env setup:**
   Update the API endpoint URL in your frontend to match your backend server. You can configure this in your `.env` or directly in the API call files.

9. **Start the frontend development server:**

    ```bash
    npm run dev
    ```

10. **Running server:**
    - The frontend will be running on `http://localhost:5173`.
    - The backend server will be running on `http://localhost:5174`.


## Usage
- Open the application in your browser.
- Click on the "Choose File" button to select an image from your device.
- Click "Upload & Share" to upload the image to the server.
- Once the upload is complete, a secret code will be provided.
- To download the image, enter the secret code on the download image.

## Additional features:
- **Simplicity**: Easy to use with minimal steps—just upload, share, and download using a secret code.
- **Security**: Protects image downloads with a secret code, ensuring that only authorized users can access the files.
- **No Account Needed**: Users don't need to create an account, making the process fast and accessible.
- **Mobile-Friendly**: The responsive design ensures the application works seamlessly on mobile devices, enhancing user experience.
- **Cloud Storage**: Using Cloudinary (or similar), images are stored securely in the cloud, reducing the risk of data loss.
- **Fast Sharing**: Share images quickly by generating a secure URL and a secret code for easy access.
