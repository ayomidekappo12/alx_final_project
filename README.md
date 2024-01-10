# Project Title

    # Sky_Couture

## Author and Contributors

- **Author:**

  - Ayomide Kappo (Frontend Developer)
    - **Field:** Frontend Development
    - **Impact:** Ayomide contributed to the design and implementation of the user interface, focusing on creating a seamless and intuitive experience for users.
    - **Contribution:** Ayomide played a key role in developing the React components, styling the application, and integrating Redux for state management.
  - Odogwu Kelly (Backend Developer)
    - **Field:** Backend Development
    - **Impact:** Odogwu contributed to building the backend infrastructure, implementing server logic, and establishing the database connection.
    - **Contribution:** Odogwu worked on Express server setup, database design, and created controllers and models for user, shop, and product functionalities. He also implemented middleware and utility functions for error handling and asynchronous operations.

...

## Overview

 [Sky~Couture](https://www.youtube.com/watch?v=xHV7kudKV9c)

**Introduction**

Welcome to Sky_Couture, where style meets technology! Our team members, Ayomide Kappo (Frontend Developer) and Odogwu Kelly (Backend Developer), have collaborated to bring you an exceptional web application that seamlessly integrates fashion and e-commerce.

Ayomide, with expertise in frontend development, has crafted a visually appealing and intuitive user interface. His contributions to React components, styling, and Redux integration ensure a delightful user experience.

Odogwu, our backend maestro, has laid the foundation for Sky_Couture. From Express server setup to MongoDB database management, his work ensures a robust backend, providing the necessary support for the frontend magic.

## Architecture Details

Sky_Couture's architecture is a synergy of frontend and backend brilliance. On the backend, Express.js powers our server, providing a flexible and scalable foundation. MongoDB, with its NoSQL capabilities, serves as the database, offering adaptability and efficiency.

The frontend, built with React, embraces a component-based approach, enhancing manageability and responsiveness. The integration of Redux for state management ensures a cohesive and efficient handling of complex state interactions.

## Technologies and Services Used

**Backend Technologies:**

Express.js: Chosen for its simplicity and flexibility, Express.js forms the backbone of Sky_Couture's server, seamlessly integrating various features through its middleware system.
MongoDB: Our database of choice, MongoDB, brings scalability and flexibility to data storage, aligning perfectly with our project's requirements.

**Frontend Technologies:**

React: The heart of our frontend, React component-based architecture streamlines UI development, ensuring a dynamic and responsive user experience.
Redux: As our state management solution, Redux provides a centralized store, simplifying the complexities of state interactions.

## Local Setup

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
