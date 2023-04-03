# CalorieTrakr - Frontend

This is the frontend for our CalorieTrakr App, developed using React, Axios, and date-fns.

## Description

The CalorieTrakr App was designed to be a simple and effective calorie tracking app that allows users to track their daily food intake and monitor their progress towards their fitness goals.

## Installation

To run the app locally, follow these steps:

1. Clone the repository:
    ```
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```
    cd calorietrakr-frontend
    ```
3. Install the required dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm start
    ```

Note: This project requires Node.js and npm to be installed on your machine. If you don't have them installed already, you can download them from https://nodejs.org.

## Features

The CalorieTrakr app provides the following features:

- Search for a specific food item by name using the "SEARCH" function. The matching foods will be displayed, and you can select one to view its nutrition facts.
- Delete a previously selected food item using the "DELETE" function.
- View the nutrition facts for the selected food item per serving.
- Track your daily food intake using a meal tracking table that contains four meal types - breakfast, lunch, dinner, and snacks - each with their respective calorie, carbohydrate, fat, protein, sodium, and sugar values.
- Click the "Add Food" link in each row to open a popup window that allows you to search for and select a food item, which updates the corresponding nutrient values for the selected meal.
- The table calculates and displays the total nutrient values for all meals combined.
- The table is responsive and adjusts its layout for mobile and desktop screens.

## Challenges Faced

Challenges to building the frontend were largely due to data movement, using of state, and saving to the database. The Diary gave us the most challenges as it had multiple moving parts and was basically all the technicality of the main page with its search, with added functionality of having to input the data into a table, and tie it to another collection. Authentication was also a challenge, but we were able to overcome it with the help of a third-party library.

## Contributors

CalorieTrakr was developed by the following contributors:

- Jonny Grobstein - [GitHub](https://github.com/jonnygrobstein) [LinkedIn](https://www.linkedin.com/in/jonny-grobstein/)
- Jose Padilla - [GitHub](https://github.com/jpadilla1) [LinkedIn](https://www.linkedin.com/in/jpadilla1/)
- Nate Leonard - [GitHub](https://github.com/natejleonard) [LinkedIn](https://www.linkedin.com/in/natejleonard/)
- Sharnell Graham - [GitHub](https://github.com/sgraham785) [LinkedIn](https://www.linkedin.com/in/sharnellgraham/)

## Ideas for upcoming feature enhancements

Some of the feature enhancements we would like to see, apart from the standard UX/UI upgrades, are:

- Language options
- Exercise tracking
- Favorite Meals
- Blog
- Community Boards

We hope you enjoy using CalorieTrakr and welcome any feedback or suggestions you may have.
