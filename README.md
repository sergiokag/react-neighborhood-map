# My Neighborhood Map Project

This is a react application for finding places to visit in my neighborhood, Athens, Greece.
You can search for places to eat, drink and more.
Using the Foursquare platform you can read comments from other people who have visited those places.

## Attention

If you don't get any data from the Foursquare api, and you the errortype 429,
then the daily call quota exceeded. Try next day. Sorry :(

## TL;DR

To get started:

* download NodeJS if you haven't do so from [NodeJS](https://nodejs.org/en/)
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── index.html # DO NOT MODIFY
│   └── manifest.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── api
    │   ├── index.js # Provides functions that get data from the Foursquare API.
    │   ├── components
    │   │   ├── Header.js # This is the component that contains the header element and the button that opens the menu.
    │   │   ├── Main.js # This is the component contains that contains the main content of the page like the map etc.
    │   │   ├── Map.js # This is the component that contains the Google map
    │   │   ├── PinMarker.js # This is the component that refers to the markers of the map
    │   │   └── SideMenu.js # This is the component that contains the input search field and the list of the results coming from the Foursquare
    ├── data # A folder for the static data
    │   └── location-list.js # Here are the five default locations
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── registerServiceWorker.js # This is for caching assets and make the app accessable when there is no net or slow net. Dont modify it.
    └── .gitignore # This is for exclude thins to be saved on the repo.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Using Service Workers

We are using the React default service worker, that works only in production mode.

In order to take benefit of the service worker you need to:

    1.Build the application, using npm run build
    2.Run a simple http server from your **build directory**.