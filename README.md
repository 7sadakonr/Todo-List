# Integrated Task Management System

A comprehensive Full-Stack Web Application designed for efficient task tracking and management. This project demonstrates the integration of modern web technologies, featuring secure user authentication, interactive data visualization, and a responsive user interface.

🔗 **Live Demonstration:** [View Application](https://7sadakonr-todo-list.vercel.app/)

---

## Project Overview

This application facilitates task management through a robust architecture. Users can securely manage their daily tasks with full CRUD (Create, Read, Update, Delete) capabilities. The system includes a dashboard for productivity analytics, utilizing graphical representations to track progress.

## Key Features

* **Task Management:** Complete lifecycle management of tasks (CRUD operations).
* **Secure Authentication:** Implementation of JWT (JSON Web Tokens) for secure user registration and login sessions.
* **Data Analytics:** Integrated dashboard featuring statistical visualization of task completion using Recharts.
* **User Interface:** A responsive and accessible design developed with Tailwind CSS and Framer Motion for smooth interactions.
* **Advanced Filtering:** Capability to filter tasks by status (Active/Completed) for better organization.
* **Profile Management:** Dedicated user settings for account information management.

---

## Technology Stack

### Frontend Architecture
| Component | Technology | Version | Description |
|-----------|------------|---------|-------------|
| Framework | Next.js | 16 | React framework with App Router |
| UI Library | React | 19 | Component-based UI development |
| Language | TypeScript | 5 | Static type-checking |
| Styling | Tailwind CSS | 4 | Utility-first CSS framework |
| Animations | Framer Motion | 12 | Motion library for React |
| Visualization | Recharts | 3 | Composable charting library |
| Networking | Axios | 1.12 | Promise-based HTTP client |

### Backend Architecture
| Component | Technology | Version | Description |
|-----------|------------|---------|-------------|
| Runtime | Node.js | - | JavaScript runtime environment |
| Framework | Express.js | 5 | Web application framework |
| ORM | Prisma | 6.17 | Next-generation Node.js and TypeScript ORM |
| Database | PostgreSQL | - | Relational database management system |
| Security | JWT | 9 | Token-based authentication |
| Encryption | bcryptjs | 3 | Password hashing algorithm |

---

## Project Structure

```bash
Todo-List/
├── my-app/                 # Client-side Application (Next.js)
│   ├── app/
│   │   ├── backoffice/     # Protected application routes
│   │   ├── components/     # Reusable UI components
│   │   └── ...
│   └── package.json
│
├── server/                 # Server-side Application (Express.js)
│   ├── controllers/        # Request logic and handling
│   ├── prisma/             # Database schema and migrations
│   ├── libs/               # Utility functions and configurations
│   ├── server.js           # Application entry point
│   └── package.json
│
└── README.md
Installation and SetupPrerequisitesEnsure the following are installed on your local machine:Node.js (Version 18 or higher)PostgreSQL Databasenpm or yarn package manager1. Clone the RepositoryBashgit clone [https://github.com/7sadakonr/Todo-List.git](https://github.com/7sadakonr/Todo-List.git)
cd Todo-List
2. Backend ConfigurationBashcd server

# Install dependencies
npm install

# Environment Configuration
# Create a .env file and configure your database connection string:
# DATABASE_URL="postgresql://user:password@host:port/database"

# Database Synchronization
npx prisma generate
npx prisma db push

# Start the Server
npm start
3. Frontend ConfigurationBashcd my-app

# Install dependencies
npm install

# Start Development Server
npm run dev
4. Access the ApplicationOpen your web browser and navigate to: http://localhost:3000API DocumentationUser ManagementMethodEndpointDescriptionPOST/members/signupRegister a new user accountPOST/members/signinAuthenticate user and retrieve tokenGET/members/infoRetrieve authenticated user detailsPUT/members/updateUpdate user profile informationTask OperationsMethodEndpointDescriptionPOST/todo/createInitialize a new taskGET/todo/listRetrieve all tasks associated with the userPUT/todo/update/:idModify an existing task contentDELETE/todo/remove/:idPermanently remove a taskPUT/todo/updateStatus/:idToggle task completion statusGET/todo/filter/:statusRetrieve tasks filtered by specific statusGET/todo/dashboardRetrieve statistical data for the dashboardDeployment StatusFrontend: Deployed on VercelBackend: Hosted on RenderDatabase: Managed by Neon (PostgreSQL)LicenseThis project is open-source and licensed under the MIT License.Developed By7sadakonr
