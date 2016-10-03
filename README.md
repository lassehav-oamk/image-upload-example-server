# Image upload example with Express, Heroku and Cloudinary
This project demonstrates how to implement image uploading by using Express web framework,
Heroku app hosting and Cloudinary image hosting.

Project uses the multer middleware to receive images in a POST request. Additionally multer-storage-cloudinary package is used to automate the process of connecting and uploading the recieved image to the Cloudinary hosting.

The project assumes that you have a Heroku app with Cloudinary add-on configured for the app.

Notice that this example also has a client counterpart.

## Installation

-Create new heroku app
-Add "Cloudinary" addon to your app
-Clone this project example
-Load the npm dependencies with 
  -'npm install' command
-Use Heroku CLI to login to the app with
  -'heroku login' command
-Follow the deploy instructions in your Heroku app to how to deploy the app. 
  -For example: 'heroku git:remote -a image-upload-example-server' and 'git push heroku master'

    