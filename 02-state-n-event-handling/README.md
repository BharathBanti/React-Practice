# React Login/Signup with JSON Server

## Overview

This is a **React-based authentication project** demonstrating a fully functional **Login and Signup system** with form validation, controlled and uncontrolled components, two-way binding, and JSON Server as a fake backend.  

The project is **fully front-end focused**, but simulates a backend API to handle user registration and login, making it very close to real-world applications.

---

## Features

- **Login Form**
  - Controlled components for email and password
  - Client-side validation
  - Error handling for invalid credentials
  - Loading state during API requests

- **Signup Form**
  - Controlled components for email, password, and confirm password
  - Password match validation
  - Email uniqueness check using JSON Server
  - Error handling for signup failures
  - Loading state during API requests

- **Two-Way Binding**
  - All controlled inputs reflect state changes dynamically

- **Toggle Forms**
  - Switch between login and signup forms easily

- **Welcome Screen**
  - Displays logged-in user’s name and email
  - Clean, responsive UI

- **JSON Server Backend**
  - Fake REST API to simulate user registration and authentication
  - Supports GET and POST requests
  - No real database needed

- **Loading Component**
  - Reusable spinner for async actions

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install and start JSON Server
```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

Make sure usersData.json is in the root folder with the following structure:
```bash
{
  "users": []
}
```

### 4. Start the React app
```bash
npm start
```
---

## Future Improvements
- Add password strength validation
- Add proper email format validation
- Use localStorage or cookies for persistent login
- Hash passwords before saving (for security)
- Replace JSON Server with a real backend (Node.js + Express + MongoDB)

---

## Author

Banti – Frontend Developer

## License

This project is open source and free to use for learning purposes.
