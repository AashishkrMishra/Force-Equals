# Force Equals – Full Stack Hiring Challenge 🚀

This repository contains the solution for the **Force Equals Hiring Challenge** for a Full Stack Development Internship. The challenge is divided into two parts:

1. **Target Account Matching API (RESTAPI)**
2. **LinkedIn Profile Enhancer Widget (Frontend – Chrome Extension)**

---

## 🌐 Challenge 1: Target Account Matching API

### 📌 Problem Statement
Build a RESTful API that enables a frontend client to:
- Log in using a username and password
- Retrieve a list of companies with match scores
- Update the target status of any company

### 📁 Endpoints

| Method | Endpoint                   | Description                           |
|--------|----------------------------|---------------------------------------|
| POST   | `/login`                   | User login with credentials           |
| GET    | `/accounts`                | Fetch list of companies with scores   |
| POST   | `/accounts/:id/status`     | Update target status of a company     |

### 🧪 Sample Input & Output

#### Login (POST /login)
```json
Input:
{
  "username": "aashish",
  "password": "aashish@123"
}

Output:
{
  "message": "Login successful",
  "token": "xyz"
}
```
---

## 🧩 Challenge 2: LinkedIn Profile Enhancer Widget

### 📌 Problem Statement

Build a Chrome extension that injects a floating widget into a LinkedIn profile page, displaying:

- **Company Name**
- **Match Score** (0–100)
- **Account Status** ("Target", "Not Target")

### ⚙️ Tech Stack

- JavaScript (ES6+)
- HTML
- CSS
- Chrome APIs (e.g., `chrome.storage`, `content.js`)

---

### 🧪 Features

- 🔹 Widget injected via `content.js`
- 🔹 `chrome.storage` used to persist widget visibility (toggle on/off)
- 🔹 Sample static JSON used for data
- 🔹 Responsive floating UI (max width: 300px)
- 🔹 Clean design:
  - Company Name in **bold**
  - Match Score shown with a progress bar
  - Account Status shown with colored tag:
    - 🟢 Green: Target
    - 🔴 Red: Not Target

---

### 📦 Sample Data (static JSON)

```json
{
  "companyName": "TechCorp",
  "matchScore": 86,
  "accountStatus": "Target"
}
```
---
### Contact Me:
Feel free to reach out if you have any questions, suggestions, or would like to collaborate:
- Email: aashishkrmishraslg@gmail.com
- Github: https://github.com/AashishkrMishra
