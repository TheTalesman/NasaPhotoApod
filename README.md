# NasaPhotoApod
Based on Michael Zaletskyi tutorial Make a Stellar React + NASA API App
https://insta.zaletskyi.com/make-a-stellar-react-nasa-api-app/
This project uses Nasa APOD (Astronomy Picture Of The Day) API to fetch an image with some data and show to the user.


## Demo
http://nasaphotoapod.s3-website-sa-east-1.amazonaws.com


## Instalation
Go to https://api.nasa.gov/#signUp and generate an API KEY. 
Create a .env file in the root folder and
put your api key inside a variable REACT_APP_NASA_KEY="YOUR_API_KEY_HERE". Don't forget to add .env to .gitingore so your api key doesn't go public.

## Deploy 
This project is using s3 as platform for deploy, to make this work, you need to have aws cli installed in your machine and setup with your credentials. Create a bucket in s3 and edit deploy.sh. In s3://nasaphotoapod change to s3://{{yourBucketNameHere!}}
Run this command to run a production build and upload to your s3 bucket.
`npm run deploy`

### TODO
- [X] Insert an input to use date parameter
- [ ] UI improvements
- [ ] Have new ideas
