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

![Image](https://github.com/user-attachments/assets/f0d468b3-843a-4a10-88ea-9d70b3968a6e)

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

## 🚀 Execution Instructions

### Step 1: Start MongoDB

Make sure MongoDB is running (locally or via MongoDB Atlas).

### Step 2: Start the Backend Server

- cd backend
- npm start

### Step 3: Start the Frontend React App

**Open a new terminal window/tab:**
- cd client
- npm run dev

---

## ✅ How to Use the App

**1. Login as Admin**
- Use pre-defined or seeded admin credentials.
  
**2. Add Agents**
- Fill the form with name, email, mobile number, and password.
  
**3. Upload CSV File**
- upload .csv, .xlsx, or .xls file.
- File should contain columns: FirstName, Phone, Notes.
  
 **4. View Distributed List**
- Entries will be split equally among 5 agents and stored in DB.
- Lists will be displayed per agent in the frontend.
  
  ---
  
## 🎥 Video Demonstration

**A complete working demonstration has been recorded and uploaded:**

https://drive.google.com/file/d/1wbff1UvAD8txxSaqaKsfaEV2pFuj67xE/view?usp=sharing

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

  



  

