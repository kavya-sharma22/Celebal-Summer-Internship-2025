
# ✅ React To-Do List App

A simple and responsive To-Do List built with **React**. Add, delete, complete, sort, and filter tasks with real-time updates stored in **localStorage**. The app is fully responsive on both mobile and desktop.

---

## 📸 Screenshots

### 🖥️ Desktop View

<img src="screenshots/desktop-view.png" alt="Desktop View" width="600"/>

### 📱 Mobile View

<img src="screenshots/mobile-view.png" alt="Mobile View" width="300"/>

> 📁 Place your screenshots in a `/screenshots` folder inside the root directory.

---

## 🚀 Features

- 📌 Add new tasks with input validation
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 🔄 Filter tasks: All, Active, Completed
- 🔤 Sort tasks alphabetically
- 💾 Tasks persist using browser `localStorage`
- 📱 Responsive UI for mobile and desktop
- 📢 Real-time success messages for every action

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-todo-list.git

# Navigate into the project directory
cd react-todo-list

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 🧪 Manual Testing Guide

| Feature            | How to Test                                                     |
|--------------------|------------------------------------------------------------------|
| ➕ Add Task         | Type a task and click **Add**. Success message appears.         |
| ✅ Complete Task    | Click **Complete** on any task. Text is struck through.         |
| ❌ Delete Task      | Click **Delete** on a task. Task disappears with message.        |
| 🔤 Sort Tasks       | Click **Sort** to sort tasks A–Z. Message: "Task sorted".        |
| 🔍 Filter Tasks     | Use **All / Active / Completed** buttons to filter.              |
| 🔁 LocalStorage     | Refresh the page — all tasks persist.                          |
| 📱 Mobile View      | Open in mobile view or resize browser — layout adjusts.        |

---

## 📁 Folder Structure

```
react-todo-list/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── TodoForm.js
│   ├── TodoList.js
│   └── index.js
├── screenshots/
│   ├── desktop-view.png
│   └── mobile-view.png
└── README.md
```

---

## 🧰 Technologies Used

- [React](https://reactjs.org/)
- HTML + CSS
- JavaScript (ES6+)
- Browser `localStorage`

---

## ✍️ Author

Developed by [Your Name]

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
