<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


# Admin Dashboard

## About

## Components

## App.js


### Navbar

### Pages


### Charts


### Apps


### Mode and Themes

### Sidebar
- Icons were imported from React-icons
- Link and NavLink were imported from React-router DOM. Tooltip component was imported from Syncfusion popups.
- The sidebar component was built by rendering a div whose height was the entire viewport height, and the width of the div encapsulating it was 18rem. 

- For the heading, The Shopware Icon was used and a span containing the text was placed alongside. In the same div, a button was created and the content of the button was the cancel icon
- Next was the main contents which was separated from the header with a margin top of 10. The Items in the main section were achieved by looping through an array (links) and and rendering details from each item.
- The links array was created in a separate data file and imported at the top. It is an array of pre-populated objects. 
- For each item returned, the item title property is displayed. Under each of these, another loop is eexecuted. The purpose of this loop is to go through each of the returned items properties to the links property (which is an object) and return the values from each links.
- So underneath every Item, the links under them are created. The details of the links shown are the link names and Icons. The icons are imported into the data file from react icons so they are rendered in the sidebar as components on their own.
- Stylings were applied to the the components using tailwind css. Variables were created and the values assigned to these variables were tailwind css styles stored in strings. That way, styles can be rendered conditionally by rendering each variable conditionally. This is especially seen for the navlinks. 


### NavBar
