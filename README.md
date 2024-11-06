# Share Trip Assessment - E-commerce UI

[Live Demo](https://st-commerce.netlify.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [Core Features](#core-features)
  - [Enhancements](#enhancements)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

## Project Overview

This project is a front-end assessment for Share Trip. It is a React-based e-commerce UI that displays products fetched from an API and includes add-to-cart functionality with a persistent cart state. Additional features, such as a wishlist and quick view functionality, have been added to enhance user experience.

## Features

### Core Features

1. **Fetch and Display Products**

   - Products are retrieved from the [DummyJSON Products API](https://dummyjson.com/docs/products) and displayed in a list format, matching the Figma design.
   - Product details, including images, names, prices, and descriptions, are displayed.

2. **Add to Cart**

   - Users can add items to their cart. Once added, the product displays an "Added in Cart" message to indicate its status.
   - Cart contents are accessible on a dedicated Cart page, where users can view all items added to their cart.

3. **State Management**
   - The application leverages Redux Toolkit for managing cart and wishlist states, ensuring a seamless experience across pages.
   - Cart and wishlist states persist across sessions via local storage, enhancing the usability of the app.

### Enhancements

1. **Quick View Pop-up**

   - A quick view option is available for each product, allowing users to view details of a product in a modal without leaving the main product listing page.

2. **Wishlist Feature**

   - Users can add products to a wishlist for later consideration.
   - The wishlist is accessible on a dedicated Wishlist page, where users can view and manage all items they have saved.

3. **Separate Pages for Cart and Wishlist**
   - The cart and wishlist each have their own pages, providing users a clear overview of items they are interested in purchasing or revisiting.

## Technologies Used

- **React (v19.0.0-rc-02c0e824-20241028)**: JavaScript library for building user interfaces.
- **Next.js (v15.0.2)**: Framework for server-rendered React applications, used for fast rendering and SEO optimization.
- **Redux Toolkit (v2.3.0)**: State management library used for handling global state for product, cart and wishlist functionality.
- **React Query (v5.59.19)**: Used for efficient server-state management, specifically to handle fetching and caching product data from the API.
- **Axios (v1.7.7)**: Promise-based HTTP client for making API requests.
- **React Icons (v5.3.0)**: Provides a library of icons for the UI.
- **Prop Types**: Helps ensure the right type of props are passed to components.

## Setup Instructions

To get this project running locally:

1. **Clone the repository**

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the application**
   ```bash
   npm run dev
   ```
4. **Open the application in your browser**
   - Once the development server is running, open [http://localhost:3000](http://localhost:3000) to view the application.
