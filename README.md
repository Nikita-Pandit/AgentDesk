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

## 📂 Folder Structure

![Image](https://github.com/user-attachments/assets/ab7f34e8-d1e7-45a5-97cc-f4c78515919b)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

- https://github.com/Nikita-Pandit/AgentDesk
- cd AgentDesk

### 2. Set Up Environment Variables

- Create a .env file in the /backend folder and add:
  
  ![Image](https://github.com/user-attachments/assets/25dc8289-e1a9-4a74-9e68-c7d7205791e6)

### 3. Install Dependencies

![Image](https://github.com/user-attachments/assets/6e3a356a-0afd-4576-8eb8-aaf157ef685a)

---

## 🎥 Video Demonstration

**A complete working demonstration has been recorded and uploaded:**

![Image](https://github.com/user-attachments/assets/6e3a356a-0afd-4576-8eb8-aaf157ef685a)

**The demo covers:**
- Admin Login
- Adding Agents
- Uploading CSV
- Viewing distributed task list for each agent

----

## ✅ Evaluation Checklist
-  Functional Admin Login with JWT
- Add and manage agent data
- Upload and validate CSV/XLSX file
- Distribute list data equally among 5 agents
- Display assigned data to agents
- Frontend + Backend integration
- Code comments and best practices followed
- .env provided (without credentials)
- Installation instructions and demo video included

---

## 👩‍💻 Author

``Nikita Pandit``
- 🔗 GitHub: nikita000pandit
- 📧 Email: 22054434@kiit.ac.in

  ---

## 📄 License

**This project is submitted as part of a machine test for MERN Stack Developer role. Intended for evaluation/demo use.**

  



  

