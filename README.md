# React App Store 🏪

A responsive and modern App Store UI built with React.js, featuring category filtering, real-time search, and a clean component architecture.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build & Deployment](#build--deployment)

## 🎯 Overview

This project is a fully functional App Store interface that showcases modern React development practices. It provides users with an intuitive way to browse, search, and filter applications by categories. The application emphasizes clean code architecture, responsive design, and optimal user experience.

## 💻 Tech Stack

### Core Framework
- **React** (v19.2.7) - JavaScript library for building user interfaces
- **React DOM** (v19.2.7) - React package for working with the DOM

### Build Tools & Development
- **Vite** (v8.1.1) - Modern frontend build tool for lightning-fast development and optimized production builds
- **@vitejs/plugin-react** (v6.0.3) - Official React plugin for Vite with Fast Refresh support

### Code Quality
- **Oxlint** (v1.71.0) - Fast and configurable JavaScript linter for maintaining code standards

### Type Safety
- **@types/react** (v19.2.17) - TypeScript definitions for React
- **@types/react-dom** (v19.2.3) - TypeScript definitions for React DOM

### Language & Module System
- **JavaScript ES Modules** - Modern module system for better code organization

## ✨ Features

### 🔍 Search Functionality
- Real-time search capabilities to quickly find applications
- Instant filtering as users type

### 📁 Category Filtering
- Browse applications by different categories
- Filter and organize apps based on user preferences
- Seamless category navigation

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Adaptive layouts for better user experience

### 🏗️ Clean Architecture
- Component-based structure for maintainability
- Modular and reusable React components
- Separation of concerns for better code organization

### ⚡ Performance
- Fast build times with Vite
- Optimized bundle size
- Efficient hot module replacement during development

### 🎨 User Interface
- Modern and intuitive UI design
- Clean CSS styling
- Professional app store experience

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PoorniMaa20/react-app-store.git
   cd react-app-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will start at `http://localhost:5173` (or another available port)

## 📜 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR) for fast development experience.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory. Bundles and minifies all assets for deployment.

### Preview
```bash
npm run preview
```
Locally preview the production build before deployment. Useful for testing the optimized version.

### Lint
```bash
npm run lint
```
Run Oxlint to check code quality and identify potential issues in JavaScript files.

## 📁 Project Structure

```
react-app-store/
├── src/
│   ├── components/
│   │   ├── AppStore.jsx        # Main App Store component
│   │   ├── AppItem.jsx         # Individual app item component
│   │   └── TabItem.jsx         # Category tab component
│   ├── App.jsx                 # Root App component
│   ├── App.css                 # Global styles
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global CSS
├── index.html                  # HTML entry point
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🛠️ Development

### Running the Development Server

```bash
npm run dev
```

The development server provides:
- Hot Module Replacement (HMR) for instant UI updates
- Fast refresh capability
- Source maps for debugging

### Code Quality

Maintain code standards using Oxlint:
```bash
npm run lint
```

### Making Changes

1. Edit files in the `src/` directory
2. Changes are automatically reflected in the browser with HMR
3. Ensure your code passes linting before committing

## 📦 Build & Deployment

### Creating a Production Build

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder with:
- Minified JavaScript and CSS
- Optimized images
- Source maps for debugging
- Tree-shaked dependencies

### Preview Production Build

```bash
npm run preview
```

Test the production build locally before deployment.

### Deployment

The `dist/` folder is ready to be deployed to any static hosting service:
- **Vercel** - Zero-config deployment with optimal defaults
- **Netlify** - Drag and drop or CI/CD integration
- **GitHub Pages** - Deploy directly from the repository
- **AWS S3** - Simple storage with CloudFront CDN
- **Other Static Hosts** - Firebase Hosting, Surge, etc.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run lint to ensure code quality (`npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or suggestions, please open an issue on the [GitHub repository](https://github.com/PoorniMaa20/react-app-store/issues).

---

**Happy coding!** 🎉
