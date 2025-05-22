# MedBlocks: Patient Registration System with React & PGlite

A modern patient registration system that runs entirely in your browser using PGlite (WebAssembly PostgreSQL).

## 📋 Features

* **In-Browser Database** : Full PostgreSQL database running directly in the browser with PGlite
* **Offline Support** : Works without an internet connection, with data persisted in IndexedDB
* **Multi-Tab Support** : Share database state across multiple browser tabs
* **Patient Registration** : Complete form for adding patients with comprehensive medical information
* **Patient Search** : Search and filter patients by name and other attributes
* **Custom SQL Queries** : Advanced interface for querying the database directly with SQL
* **Modern UI** : Clean, responsive interface built with React

## 🚀 Demo

![1747941746137](image/README/1747941746137.png)

![1747941851678](image/README/1747941851678.png)

![1747942095040](image/README/1747942095040.png)

![1747942132116](image/README/1747942132116.png)

---

## 📦 Installation

Prerequisites

* Node.js (v16 or higher)
* npm (v7 or higher)

## 🔧 Setup Instructions

### 1. Clone the Repository

`git clone https://github.com/YOUR_USERNAME/Patient_Registration_System.git `

cd Patient_Registration_System

### 2. Install Dependencies

`npm install`

### **3. Run the Application**

 `npm run dev`

### 4. Open Browser & Visit

`http://localhost:5173 `

## Project Structure

patient-system-pglite/
├── public/
│   └── pglite-worker.js     # PGlite worker for multi-tab support
├── src/
│   ├── components/          # Reusable UI components
│   ├── context/             # React context providers
│   │   └── DatabaseContext.tsx
│   ├── pages/               # Application pages
│   │   ├── Dashboard.tsx
│   │   ├── PatientList.tsx
│   │   ├── PatientQuery.tsx
│   │   └── PatientRegistration.tsx
│   ├── services/            # Core services
│   │   └── DatabaseService.ts
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── tsconfig.json
└── vite.config.ts

## 📱 Usage Guide

### Adding a New Patient

1. Navigate to the "Register" page using the dashboard or navigation menu.
2. Fill in the required patient information.
3. Click "Register Patient" to save the record.

### Searching for Patients

1. Go to the "Patients" page
2. Use the search bar to find patients by name
3. Click on a patient to view their details

### Running Custom Queries

1. Navigate to the "Query" page
2. Enter your SQL query in the editor
3. Click "Execute" to run the query and view results

## 🧪 Technologies Used

* **React** - UI library
* **TypeScript** - Type safety and better developer experience
* **PGlite** - In-browser PostgreSQL database
* **React Router** - Application routing
* **Lucide React** - Icon library
* **Vite** - Build tool and development server
