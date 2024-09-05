# Simpsons Quotes App
This is my first time ever creating a JavaScript web application using React and AWS Amplify. I'm very excited to kick off this project.

## App Url (Vercel):
https://My-Simpsons-Quotes-App.vercel.app/

## Technologies Used
[![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB)
[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](https://vercel.com)
[![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-%23FF9900.svg?logo=Amazon%20AWS&logoColor=white)](https://aws.amazon.com/amplify/)

- **Styling**: JavaScript Inbuilt Library and some additional libraries from React

## Getting Started

1. **Install dependencies:**

    ```bash
    cd My-Simpsons-Quotes-App
    npm install -g @aws-amplify/cli
    npx create-react-app my-simpsons-app
    ```

2. **Simpson API Used**
   https://thesimpsonsquoteapi.glitch.me/quotes?count=24
   24 Quotes max. Displayed

4. **Run the development server:**

    ```bash
   ? Enter a name for the environment start
   Using default provider  awscloudformation
   ? Select the authentication method you want to use: AWS profile
   ```

5. **Run the Application:**

    ```bash
    npm build
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser via node.js to see the application.

6. **Database Management**
   I wanted to implement a database to handle different users and login credentials but due to the duration of the project i could not. 


## Folder Structure 
I squeezed everything to fit in one source file. I know that this is not the best practice and it is a bad coding Style!!
```
- build
  - index.html
- src
  - App.js: Main routes of the application, Contains Constants and configurations, Contains Utility functions and libraries..
  - App.css
- package.json
```

