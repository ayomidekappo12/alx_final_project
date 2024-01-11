
# Sky~Couture

## Overview

**Introduction**

Welcome to `Sky Couture`, where style meets with technology!. This website is a multi-vendor ecommerce website where users can create account, and sellers can create a shop. The team members on this project are, `Ayomide Kappo` a Frontend Developer who took charge in the configuration of the frontend server with react framework and `Odogwu Kelly` Backend Developer who took charge in the configuration of the backend Api with Express server.
   * Here is the video link of the website 
   [sky~Cuture video](https://www.youtube.com/watch?v=xHV7kudKV9c)

## Technologies and Services Used

**Backend Technologies:**

   * Express.js: Chosen for its simplicity and flexibility, Express.js forms the backbone of Sky_Couture's server, seamlessly integrating various features through its middleware system.
   * MongoDB: Our database of choice, MongoDB, brings scalability and flexibility to data storage, aligning perfectly with our project's requirements.

**Frontend Technologies:**

   * React: The heart of our frontend, React component-based architecture streamlines UI development, ensuring a dynamic and responsive user experience.
   * Redux: As our state management solution, Redux provides a centralized store, simplifying the complexities of state interactions.
 
**Others**
   * socketIo: This was used for the configuration of chatting functionalities
   * cloudinary: This was used to implement cloud storage of all pictures  

## Developement Setup
**Install dependencies**
### Clone the Repository.
   * Run `git clone https://github.com/odogwukelly/alx_final_project.git`

Change directory to the respective, install dependencies and start the servers
   * Run `cd Sky_Couture_Alx_Final_Project/` 
   * `Cd` to [frontend/](https://github.com/odogwukelly/alx_final_project/tree/main/Sky_Couture_Alx_Final_Project/frontend)
   * Run `yarn` to install all the dependencies on the frontend server
   * Then Run `npm start` to start the server

   * `Cd` tio [backend/](https://github.com/odogwukelly/alx_final_project/tree/main/Sky_Couture_Alx_Final_Project/backend) 
   * Run `npm install` to install all the dependencies on the backend server
   * Then Run `npm run dev` to start the server

   * `Cd` to [socket/](https://github.com/odogwukelly/alx_final_project/tree/main/Sky_Couture_Alx_Final_Project/socket)
   * Run `npm install` to install all the dependencies on the socketIo sever 
   * Then Run `npm start` to start the server




### Prerequisites

- Node.js and npm installed
- MongoDB installed locally or a MongoDB Atlas account

### Installation

1. Install dependencies:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

2. Configuration:

   - Created a `.env` file in the `backend` folder and set the necessary environment variables (database connection, secret key, etc.).

3. Run the application:

   ```bash
   # Run backend server
   cd backend
   npm start

   # Run frontend
   cd ../frontend
   npm start
   ```

   Access the application at `http://localhost:3000` in your browser.

## Folder Structure

- **backend:**

  - `Express Server (server.js):` This file contains the main configuration and setup for the Express server.

  - `Database Connection (Database.js):` Manages the connection to the MongoDB database.

  - `Controller Files (user.js, shop.js, product.js, etc.):` These files handle the application's business logic and interact with models.

  - `Model Files (User, Shop, Product, etc.):` Define the structure of MongoDB documents and handle database interactions.

  - `Middleware and Utility Files (ErrorHandler.js, catchAsyncErrors.js, sendToken.js, etc.):` These files include middleware functions and utility methods for error handling, authentication, etc.

  - `Additional Backend Files:` [List any other relevant backend files you've created and provide brief descriptions.]

  - ... [any other relevant backend files]

- **frontend:**

  - `JavaScript (React) Code:` Contains the main React components and application logic.

  - `Styles:` Includes stylesheets for styling the frontend components.

  - `Export Statements:` Exports components or functions to be used in other parts of the application.

## Tools, Software, and Frameworks Used

- **Backend:**

  - **Express.js:** We chose Express.js due to its simplicity and flexibility in building robust and scalable web applications. Its middleware system allows for easy integration of additional features.
  - **MongoDB:** MongoDB was selected as our database to leverage its NoSQL capabilities, providing a scalable and flexible data storage solution.

- **Frontend:**

  - **React:** React was chosen for its component-based architecture, making it easier to manage and update UI components efficiently.

- **Redux:** Redux, a predictable state container for JavaScript applications, was incorporated to manage the application's global state. It provides a centralized store for state management, making it easier to handle complex state interactions.

  **Redux Files:**

  - `actions:` This folder contains action creators, functions that return objects describing the type and payload of an action.

  - `reducers:` Reducers specify how the application's state changes in response to actions. This folder includes various reducers for different parts of the application.

  - `store.js:` The Redux store holds the complete state tree of the application. It is created by passing the root reducer and an initial state, allowing components to access the global state.
