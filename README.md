# Multi-Tenant Sales Dashboard

## Overview

This project is a **Multi-Tenant Sales Dashboard** developed as part of a frontend-focused assignment.  
The objective of the assignment is to demonstrate **application structure, modularity, role-based access control, tenancy handling, and frontend optimization awareness**.

Although backend APIs were not mandatory for the assignment, both **client and server were developed from scratch** to better showcase real-world architecture and application behavior.

---

## Tech Stack

### Client

- React.js
- Vite
- Axios
- Tailwind CSS
- Docker

### Server

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt
- MVC Architecture

---

## Client (Frontend)

The client application was developed **from scratch** using **React.js with Vite** for faster development and optimized builds.

### Features

- Implemented **Agent login and registration**
- Implemented **Tenant (Admin) login and registration**
- Client-side **role-based and conditional rendering**
- Used `useEffect` hook with **Axios** to fetch data from the server
- Created a reusable and responsive **Navbar**
- Proper loading and empty states for better user experience
- Clear tenant and role visibility across the application
- Styling is done using Tailwind Css **( I have used AI for fast development al though styling was not mandatory )**
- Containarized react-client using docker 

### Role-Based Access

**Admin (Tenant User)**

- Can view call logs and leads belonging **only to their own organization / tenant**
- Can add new call logs and leads
- Can update existing call logs and leads

**Agent**

- Can view **call logs and leads across all organizations / tenants**
- View-only access where applicable

### Possible Improvements (Client Side)

- **The following optimizations can be added if the project is extended further:**
- Implement lazy loading for route-based component loading
- Use useMemo to memoize large computed values (e.g., number of records)
- Introduce centralized state management if application scale increases
- Improve error handling and API retry mechanisms
- Add pagination and search for large datasets
- Use Axios interceptor to centralized auth logic

---

## Server (Backend)

The backend APIs were developed **from scratch** to support call logs and leads management.

### Features

- APIs to **add, view, and update** call logs and leads
- Implemented **authentication and role-based authorization** (Admin / Agent)
- Used **JWT tokens** for secure authentication
- Used **bcrypt** for password salting and hashing
- Followed **MVC architecture** for clean separation of concerns
- Used **MongoDB** as the database
- Containarized express-server using docker 

---

## Multi-Tenancy Handling

- Each user belongs to **one tenant (organization)**
- Admin access is strictly restricted to **tenant-specific data**
- Agent access can view data across tenants as per requirements
- Switching tenant updates the visible data accordingly
- Tenancy rules are enforced at both **API and client levels**

---

## Project Setup

### Prerequisites

- Node.js **version 20 or later**
- MongoDB (local or cloud)
- Add .env file in server directory
```bash
    JWT_SECRET = 123456 || secret
    MONGO_URL= mongo-db url
    PORT=3000
```

### Setup Commands

```bash
# Clone the repository
git clone <repository-url>

# Client setup
cd client
npm install
npm run dev

# Server setup
cd server
npm install
npm run dev
```

- Thank you