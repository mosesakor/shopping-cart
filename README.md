# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


    display: grid;
    grid: auto / repeat(4, 1fr);
    grid-template-areas:
         "header header header header"
         "sidebar products products products"
         "sidebar products products products"
         "sidebar products products products"
         "footer footer footer footer";
    grid-gap: 20px;


    style={{transform: open ? "translateX(0px)" : "translateX(-1000px"}}

/*

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding: 20px;
}

li {
    list-style-type: none;
}ds

a {
    text-decoration: none;
    cursor: pointer;
}


.nav-wrapper {
}

nav {
    display: grid;
    overflow: hidden;
    position: fixed;
    top: 0; /* Set the navbar to fixed position */
     /* Position the navbar at the top of the page */
    width: 95%; /* Full width */
    background: green;
    padding: 7px;
}

.burger {
    font-size: 20px;
}

.logo {
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    transition: 2000s ease-in-out;
}

nav .nav-links {
    font-size: 15px;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    background: blue;
}

.nav-links li {
    padding: 0px 2px;
    width: 100%;
}

nav .nav-links a {
    color: black;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
    width: 100%;
    border-bottom: 1px solid grey;
}

nav .nav-links a:hover {
    border-bottom: 1px solid black;
}


/*
@media all and (max-width: 768px) {
    .logo {
        margin: auto;
    }

    nav .burger {
        font-size: 20px;
        display: block;
    }

    nav {
        padding: 10px;
        padding-left: 30px;
    background: yellow;
  
    }

    nav .nav-links {
        position: fixed;
        display: block;
        top: 10%;
        height: 28vh;
        width: 98%;
        transform: translateY(-1000px);
        transition: 60ms ease;
    }

}
 
*/

/*

*/

/* Clothing.css */

.clothing {

}

.clothing__aside {
    display: none;
}

.products {
    margin-top: 20px;
    display: grid;
    grid-auto-rows: mixmax(125px, auto);
    grid-gap: .5rem;
}

.a__product, .a__product img {
    margin: 0 auto;
}


.clothing__header {
    grid-area: header;
}

.clothing__aside {
    grid-area: sidebar;
}

.clothing__footer {
    grid-area: footer
}

link:hover {
    text-decoration: none;
}

.products div {
    /*background: yellow;*/
}

.img {
    height: 289px;
    width: 289px;
}

link:hover {
    text-decoration: none;

}

/*
@media (min-width: 300px) {
    .products { grid: auto / repeat( 1fr); }
}

@media (min-width: 900px) {
    .products { grid: auto / repeat(2, 1fr);
    grid-template-aeas: }
}

@media (min-width: 1200px) {
    .products { grid: auto / repeat(2, 1fr); }
}
*/

/*
.products {
    max-width: 90%;
    grid-area: products;
    display: grid;
    grid: 400px 400px 400px  auto / repeat(3, 1fr);
    grid-template-areas:
        "products products products"
        "products products products"
        "products products products";
    grid-gap: 20px;
} 
*/

/*
.clothing {
    display: grid;
    grid: auto / repeat(4, 1fr);
    grid-template-areas:
         "header header header header"
         "sidebar products products products"
         "sidebar products products products"
         "sidebar products products products"
         "footer footer footer footer";
    grid-gap: 20px;
}
*/


style={{display: open ? "none" : "block"}