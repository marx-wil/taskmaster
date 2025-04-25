# TaskMaster

TaskMaster is a modern, feature-rich task and project management application built with React. It provides a comprehensive suite of tools for managing projects, tracking progress, and organizing tasks efficiently.

![image](https://github.com/user-attachments/assets/a3a0c19a-abe6-4754-bd3e-9502787bcdd6)


## 🌟 Features

### Core Features
- 📊 **Dashboard Overview**: Get a quick glance at your tasks, projects, and deadlines
- 📋 **Project Management**: Create and manage multiple projects with detailed tracking
- 📅 **Calendar Integration**: Full calendar view with task scheduling and deadline tracking
- 📈 **Progress Tracking**: Monitor project and task progress with visual indicators
- 📱 **Responsive Design**: Fully responsive with mobile-first approach
- 🌓 **Dark/Light Mode**: Support for both dark and light themes
- 🎨 **Modern UI**: Glassmorphism effects and smooth animations

### Additional Features
- 🔔 **Notifications**: Real-time notifications for task updates and deadlines
- 📨 **Messaging System**: Built-in messaging for team communication
- 📊 **Statistics**: Visual representation of project and task statistics
- 🔍 **Search Functionality**: Quick search across projects and tasks
- 🔐 **Authentication**: Secure login and registration system
- 📱 **Mobile-Optimized**: Glassmorphism cards for better mobile experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **UI Components**: Chakra UI
- **Styling**: 
  - SASS for custom styling
  - Emotion for component-based styling
- **Animations**: 
  - GSAP for complex animations
  - Framer Motion for UI transitions
- **Charts**: 
  - ApexCharts
  - Recharts
- **Calendar**: Custom Component
- **Icons**: React Icons
- **State Management**: React Hooks
- **Routing**: React Router DOM v6
- **Development**: Create React App

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marx-wil/taskmaster.git
cd taskmaster
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable UI components
│   ├── charts/     # Chart components
│   ├── landingpage/# Landing page components
│   ├── sidenav/    # Sidebar navigation
│   └── topnav/     # Top navigation bar
├── layouts/         # Layout components
│   ├── default/    # Main application layout
│   └── landingpage/# Landing page layout
├── styles/         # Global styles and themes
├── views/          # Main application views
│   ├── dashboard/  # Dashboard view
│   ├── projects/   # Projects management
│   ├── calendar/   # Calendar view
│   ├── login/      # Authentication views
│   └── register/   # User registration
└── routes.js       # Application routing
```

## 🎨 UI Components

- **Glassmorphism Effects**: Modern glass-like UI elements
- **Responsive Cards**: Adaptive card layouts for different screen sizes
- **Custom Animations**: GSAP-powered transitions and effects
- **Interactive Charts**: Dynamic data visualization
- **Custom Scrollbars**: Styled scrollbars for better UX

## 🔐 Authentication

- Secure login and registration system
- Password reset functionality
- Protected routes
- Session management

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Optimized layouts for different screen sizes
- Touch-friendly interface
- Responsive navigation system

## 🛠️ Available Scripts

- `npm start`: Run the development server
- `npm test`: Launch the test runner
- `npm run build`: Build for production
- `npm run eject`: Eject from Create React App

## 📄 License

This project is licensed under the Custom Public View-Only License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [GSAP](https://greensock.com/gsap/)
- [React Icons](https://react-icons.github.io/react-icons/)
