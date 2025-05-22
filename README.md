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

Vercel : https://patient-registration-system-ashy.vercel.app/


<img width="1440" alt="Dashboard" src="https://github.com/user-attachments/assets/c47b713e-5783-43a9-8812-464a0e953e96" />

<img width="1440" alt="RegisterPatient" src="https://github.com/user-attachments/assets/55d5c16e-05f2-4a01-a3d5-60cfc316cf83" />

<img width="1440" alt="PatientQuery" src="https://github.com/user-attachments/assets/a6852457-277a-44cd-b5b9-cfcb68df59b4" />

<img width="1440" alt="PatientList" src="https://github.com/user-attachments/assets/0fd4f480-62e1-4d3b-9faf-3622c45ca766" />



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

<img width="726" alt="projstruct" src="https://github.com/user-attachments/assets/d3655c73-c6f6-4872-9b9b-109eaad96339" />


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
