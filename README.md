## About

**MeetJohn** is a web application which lets you process images and identify their contents. This is a full-stack project created with NodeJS, Express, React and Google Cloud's tools Storage, Vision API and Firestore API.

## Features

- Application deployed to Google Cloud;
- Ability to view previously processed images and data;
- Ability to delete images and data.

## Prerequisites

To run this application you must have [NodeJS](https://nodejs.org/en/download/) and **npm** (comes with NodeJS) installed on your machine.

## Installation

1. Clone this repository;
2. `cd` into the `client` and `server` folders and run `npm install` to retrieve dependencies;
3. Create a new project at <https://console.cloud.google.com/projectcreate>;

### Setting up Vision API

1. Instructions are at <https://cloud.google.com/vision/docs/setup>;
2. Download the private key file and move it to the `/server/config/` directory;
3. Open `/server/config/config.env` with a text editor and change `<VISION-CREDENTIALS-FILENAME>` to your private key file name.

### Setting up Storage

1. Create a new bucket at <https://console.cloud.google.com/storage>;
2. Uncheck _Enforce public access prevention on this bucket_ in section _Choose how to control access to objects_;
3. After creating the bucket, go to **Permissions** and click **Add**;
4. In the **New members** field write `allUsers` and select role `Cloud Storage -> Storage Object Viewer`. This will give public access to the files;
5. Click **Save** and **Allow public access**;
6. Open `/server/config/config.env` with a text editor and change `<STORAGE-BUCKET-NAME>` to your bucket name.

#### Don't give up, we're almost there <3

### Setting up Firestore

1. Create a **Native mode** database at <https://console.cloud.google.com/firestore>.

## Deployment

1. `cd` to `client` folder and run `npm start` to start the React app;
2. `cd` to `server` folder and run `npm start` to start the Express app;
3. Go to <http://localhost:3000>.

## Screenshots

![Home](https://github.com/aauga/meetjohn/blob/main/images/1.png?raw=true)
![Details](https://github.com/aauga/meetjohn/blob/main/images/2.png?raw=true)
![History](https://github.com/aauga/meetjohn/blob/main/images/3.png?raw=true)
