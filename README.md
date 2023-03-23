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
