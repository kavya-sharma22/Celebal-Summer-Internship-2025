
# 🛍️ React Admin Dashboard

A modern and responsive **Admin Dashboard** built using **React**, **Tailwind CSS**, **Recharts**, **React Big Calendar**, and **@dnd-kit** for drag & drop Kanban functionality.

## 📸 Screenshots

<!-- Resizeable screenshots using HTML in markdown -->

<h3>📊 Dashboard with Sidebar</h3>
<img src="./screenshots/dashboard.png" width="700"/>

<h3>📈 Charts (Bar & Pie)</h3>
<img src="./screenshots/charts.png" width="700"/>

<h3>🗓️ Calendar View</h3>
<img src="./screenshots/calendar.png" width="700"/>

<h3>🗂️ Kanban Board (Drag & Drop)</h3>
<img src="./screenshots/kanban.png" width="700"/>

---

## 🚀 Features

✅ Responsive Sidebar with Dropdown
✅ Dark Mode Toggle
✅ Dashboard Landing Page
✅ Interactive Bar and Pie Charts (Recharts)
✅ Full Calendar View with Event Support
✅ Drag & Drop Kanban Board (Powered by dnd-kit)
✅ Modular File Structure

---

## 🛠️ Tech Stack

* React 19+
* Tailwind CSS
* React Router DOM
* Recharts
* React Big Calendar
* @dnd-kit/core (for Kanban)
* Vite (build tool)

---

## 📁 Folder Structure

```
admin-dashboard/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Charts.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Calendar.jsx
│   │   └── Kanban.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── screenshots/
│   ├── dashboard.png
│   ├── charts.png
│   ├── calendar.png
│   └── kanban.png
├── README.md
└── package.json
```

---

## 🧹 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the App

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

---

## 📦 Important Dependencies

```json
"dependencies": {
  "@dnd-kit/core": "^7.0.0",
  "@dnd-kit/sortable": "^7.0.0",
  "react-big-calendar": "^1.11.4",
  "recharts": "^2.8.0",
  "tailwindcss": "^3.4.1",
  "react-router-dom": "^6.23.0"
}
```

---

## ✨ Upcoming Improvements

* [ ] Multi-column Kanban with task creation
* [ ] Event creation in calendar
* [ ] Backend integration for dynamic data
* [ ] Authentication support

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙇‍♀️ Made by [Your Name](https://github.com/your-username)
>>>>>>> 3527fc7 (Upload admin-dashboard project)
