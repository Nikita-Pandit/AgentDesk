# 🧠 MERN Stack Machine Test – Admin Panel with Agent Management & Task Distribution

This project is a full-stack MERN (MongoDB, Express, React, Node.js) web application built as part of a machine test. It enables an admin to log in, create agent profiles, upload a CSV of tasks, and automatically distribute those tasks equally among 5 agents.

---

## 🚀 Features

### ✅ Admin Login
- Secure login using JWT (JSON Web Tokens)
- Authenticated route protection
- Error handling for invalid credentials

### 👥 Agent Management
- Add agents with details: Name, Email, Mobile Number (with country code), and Password
- Data stored securely in MongoDB

### 📤 CSV Upload & Task Distribution
- Accepts `.csv`, `.xlsx`, `.xls` formats
- Validates file type and structure
- Fields required: FirstName, Phone, Notes
- Evenly distributes list entries among 5 agents
- Handles remainders in a round-robin manner
- Saves the distributed data to MongoDB
- Agents can view their assigned list

---

## 🧾 Technologies Used

| Layer        | Tech Stack       |
|--------------|------------------|
| Frontend     | React.js         |
| Backend      | Node.js, Express |
| Database     | MongoDB (Atlas)  |
| Authentication | JWT             |
| File Upload & Parsing | Multer, CSV/XLSX parser |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mern-machine-test.git
cd mern-machine-test
