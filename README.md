# Employee Task Dashboard (Demo)
# 📌Overview
This is a simple full-stack demo application built to showcase my ability to design and implement a React frontend with a .NET 8 Web API backend.
The system allows users to:
- Create tasks
- View tasks
- Search tasks
- See task status (e.g., Approved / Rejected)
- Delete tasks

This project demonstrates clean separation of concerns, RESTful API design, and basic UI/UX handling.

# Tech Stack
Frontend
- React (Vite)
- JavaScript (JSX)
- CSS

Backend
- .NET 8 Web API
- Entity Framework Core
- SQL Database (Code First)

# Getting Started
1. Clone the Repository
- git clone <your-repo-link>
- cd EmployeeDemo

2. Run Backend (.NET 8 API)
- cd EmployeeDemo.Server
- dotnet restore
- dotnet run
- Default API URL: https://localhost:<port>
- Swagger UI available for testing endpoints
  
3. Run Frontend (React)
- cd employeedemo.client
- npm install
- npm run dev
- Default frontend URL: http://localhost:5173

# Features
- Add new tasks
- Display task list with status
- Search/filter tasks
- Delete tasks
- Basic status visualization (Approved / Rejected)

# Notes
- This is a demo project for showcasing development skills.
- Sensitive or proprietary logic from previous projects has been excluded.
- Naming has been generalized for demonstration purposes.

# Possible Improvements

If extended further, I would:
- Add authentication & authorization (JWT)
- Implement role-based task approval workflow
- Add pagination and sorting
- Improve UI/UX with a component library (e.g., Material UI)
- Add unit and integration tests
- Deploy via Docker / cloud platform
  
👨‍💻 Author
Developed by Haziq (MHA)

<img width="891" height="941" alt="image" src="https://github.com/user-attachments/assets/f5306610-b9fe-448e-92f4-6fd473fa1c11" />

