# PopX - Authentication Flow

This project is a modern web application featuring a complete and responsive authentication flow, including Sign Up, Sign In, and Account Settings pages. It is built with React.js and styled with Tailwind CSS, following a mobile-first and component-based approach.

## ✨ Features

-   **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
-   **Shared Layout**: A consistent layout for authentication pages (`/sign-in`, `/sign-up`).
-   **Reusable Components**: Modular and reusable form components for inputs and buttons.
-   **Modern Tech Stack**: Built with Vite, React, and the latest Tailwind CSS v4.
-   **CSS-first Theming**: Custom theme colors are defined directly in the CSS, leveraging the power of Tailwind CSS v4.

## 🚀 Tech Stack

-   **[Vite](https://vitejs.dev/)**: A next-generation frontend tooling that provides a faster and leaner development experience.
-   **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
-   **[React Router](https://reactrouter.com/)**: Declarative routing for React.js applications.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

## 📦 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [npm](https://www.npmjs.com/) (or your preferred package manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`.

## 📂 Folder Structure

The project follows a standard React application structure, with a focus on modularity and separation of concerns.

```
.
├── public/
├── src/
│   ├── components/
│   │   └── form/
│   │       ├── Button.jsx
│   │       └── Input.jsx
│   ├── layouts/
│   │   └── AuthLayout.jsx
│   ├── pages/
│   │   ├── AccountSettings.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── Welcome.jsx
│   ├── assets/
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## 📸 Screenshots

### Welcome Page

![Welcome Page](https://i.ibb.co/Rk7cwTBg/Screenshot-53.png)

### Sign Up Page

![Sign Up Page](https://i.ibb.co/yFK3b1rk/Screenshot-56.png)

### Sign In Page

![Sign In Page](https://i.ibb.co/zDs4nyX/Screenshot-58.png)

### Account Settings Page

![Account Settings Page](https://i.ibb.co/Hp2jnNTg/Screenshot-57.png)
