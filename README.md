# Login Dashboard App

A modern, responsive React application featuring a **Login Page** and a **Dashboard Page**. The dashboard fetches and displays data dynamically, providing a sleek interface for task management.

Live link: https://jt-login.netlify.app/

## Features

- **Login Page**
  - User authentication with email and password
  - Form validation
  - Redirect to dashboard upon successful login

- **Dashboard Page**
  - Dynamic charts and data visualization using Recharts
  - Responsive card layouts for projects, reminders, and analytics
  - Interactive UI elements with icons and animations

- **Routing**
  - Private routes to protect dashboard access
  - Smooth navigation between pages

## Tech Stack

- **Frontend Framework:** React 19  
- **Styling:** Tailwind CSS 4 + DaisyUI  
- **Routing:** React Router 7  
- **Charts & Graphs:** Recharts 3  
- **HTTP Client:** Axios  
- **Build Tool:** Vite  
- **Linting:** ESLint with React Hooks plugin  

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/login-dashboard-app.git
cd login-dashboard-app
```
2. Install dependencies:
```
npm install
```
3. Run the development server:
```
npm run dev
```
## API Integration

The app interacts with a REST API to:

Authenticate users (/api/login)

Fetch analytics and project data for the dashboard

Example request for login:
```
{
  "email": "user1@example.com",
  "password": "password123"
}
```