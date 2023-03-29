# miniE-commerce-App

AzubiShop is an ecommerce site that allow customers to buy products of their choice.
miniE-commerce-App
AzubiShop is an ecommerce site that allow customers to buy products of their choice. As a front-end developer your task is to build Azubishop to look close to what the UI/UX team designed.

Click the link(https://www.figma.com/file/XTtfboF1Hha4z2h3SkwTZ4/L2_5_weeklyProject?node-id=0%3A1&t=DFqCgOeedNWgesqp-1) to view the high fidelity wire-frames.(Figma)

Azubi Africa requested the front-end should be implemented using React.

#Step One

-Upon launch the homepage should display to allow customers to navigate through the available products

--First Page (Home Page) page page-1 page-2
![page](https://user-images.githubusercontent.com/71855200/227193511-86010942-8af3-49f1-9aed-904ef1661e33.png)
![page-1](https://user-images.githubusercontent.com/71855200/227193595-b4d0fdb7-1b7f-4fb0-9cf5-ea818f14a9b9.png)
![page-2](https://user-images.githubusercontent.com/71855200/227193680-cbbed77a-9ea1-45d2-8904-29d7b961bdf3.png)

-Customers without login credentials should be redirected to the login page when they try to place an order.

--Second page (Login Page) Page
-User login page should provide an option to login or create an accounts.
![Page](https://user-images.githubusercontent.com/71855200/227194459-ac6b56c2-f953-40ec-a6d1-e02b4c35894d.png)
![Page](https://user-images.githubusercontent.com/71855200/227194865-f639fb5a-bfc2-4bc9-91df-d4c1b92af77e.png)

-User data should be validated to ensure valid data is submitted. Hint(use controlled components) Page

#Step Two

-After logging in, Users should be able to purchase products. Details
![Details](https://user-images.githubusercontent.com/71855200/227195287-776ccf2e-c3cb-4710-b30e-8fac048d2d72.png)
Fourth Page (details page ==> checkout page) Details-1
![Details-1](https://user-images.githubusercontent.com/71855200/227195226-32c7a7f8-c640-4073-92b3-5c3c5c94673b.png)

#Step three

-To persist user data, the data should be store in a local storage which serve as demo database.

-The cart data should also be store in local storage.

#Hint

Hooks to look for

useState (To manage local state),

useEffect (Handle Side effects),

useContext (To manage global state)

useReducer (combine useContext and useReducer to manage your global state)

Routing is required (npm install react-router-dom)

# Getting Started with Create React App

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
