# Multi-Tenant Sales Dashboard

## Overview

This project is a full-stack, multi-tenant sales dashboard built from scratch to demonstrate secure authentication, role-based access control, and tenant-aware data handling. The application supports **multiple organizations** (tenants) with clearly defined user roles and strict data isolation rules.

The system is designed with scalability and maintainability in mind, using modern frontend and backend technologies, clean architecture patterns, and containerization.

---

## Tech Stack

### Client

- React.js (Vite)
- Axios
- React Query (TanStack) for efficient data fetching and caching
- Tailwind CSS
- Docker

### Server

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt
- Cors
- MVC Architecture
- Docker

---

## Client (Frontend)

The frontend application is built using React with Vite to ensure fast development and optimized builds.

### Features

- Implemented **Agent login and registration**
- Implemented **Tenant (Admin) login and registration**
- Client-side **role-based and conditional rendering**
- API communication handled via Axios
- Optimized server state management using React Query, including caching, loading states, and error handling
- Created a reusable and responsive **Navbar**
- Proper loading and empty states for better user experience
- Clear tenant and role visibility across the application
- Styling is done using Tailwind Css **( I have used AI for fast development al though styling was not mandatory )**
- Containarized react-client app using docker

### Role-Based Access

**Admin (Tenant User)**

- Can view call logs and leads belonging **only to their own organization / tenant**
- Can add new call logs and leads
- Can update existing call logs and leads

**Agent**

- Can view **call logs and leads across all organizations / tenants**
- View-only access where applicable

---

## Server (Backend)

The backend is built from scratch using Node.js and Express, following a clean MVC architecture.

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
- Tenancy rules are enforced on both backend APIs and frontend logic

---

## Project Setup using **Docker**

- **You can find the Docker images here:**
  - [Client image](https://hub.docker.com/repository/docker/fujail57/multi-tenant-sales-dashboard_client)
  - [Server image](https://hub.docker.com/repository/docker/fujail57/multi-tenant-sales-dashboard_server)

### Prerequisites

- Install Docker on your machine
- Ensure the Docker daemon is running

### Setup Commands

- Clone Github repository

```bash
git clone <repository-url>
cd <repository-root>
```

- Run Docker Compose from the root directory

```bash
docker compose up
```

- **Application URLs**

- Once the containers are running, the application will be available at:

- Client:

```bash
http://localhost:5173/
```

- Server:

```bash
http://localhost:3000/
```

---

## Project Setup locally

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

**Thank you**
