# Task Management System

## 🚀 Project Overview

This is a full-stack Task Management System built using Node.js, TypeScript, PostgreSQL, and Prisma. Users can register, log in, and manage their tasks efficiently.

---

## 🛠️ Tech Stack

* Backend: Node.js, Express, TypeScript
* Database: PostgreSQL
* ORM: Prisma
* Authentication: JWT (Access & Refresh Tokens)

---

## 🔐 Features

* User Registration & Login
* JWT Authentication
* Create, Read, Update, Delete Tasks
* Toggle Task Status
* Pagination, Search & Filter

---

## ⚙️ Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/your-username/task-manager-system.git
cd task-manager-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
REFRESH_SECRET=your_refresh_secret
```

### 4. Run Prisma

```bash
npx prisma migrate dev
```

### 5. Run Server

```bash
npm run dev
```

---

## 📡 API Endpoints

### Auth

* POST /auth/register
* POST /auth/login

### Tasks

* GET /tasks
* POST /tasks
* PATCH /tasks/:id
* DELETE /tasks/:id
* PATCH /tasks/:id/toggle

---

## 📌 Author

Subhash
