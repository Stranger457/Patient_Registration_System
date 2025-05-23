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

## 📝 Project Development Summary: Key Challenges, Fixes

During the development of a patient management system using **ElectricSQL’s PGlite** (an in-browser SQLite database), I faced and resolved several important challenges. Below is a detailed, human-centric overview of the problems encountered, how I addressed them, and what I learned throughout the process.

* **1. **Enabling True Local Persistence with IndexedDB****

 **Challenge:**

Initially, the in-browser SQLite database (**PGliteWorker**) stored data only in memory. This meant that **data was wiped out on every tab refresh or browser restart** — even though the table wasn’t being dropped anymore.

**Solution:**

I solved this by **backing the database with IndexedDB**, which allows persistent storage across browser sessions.

import { PGlite } from '@electric-sql/pglite';
import { worker } from '@electric-sql/pglite/worker';

worker({
  async init() {
    return new PGlite('idb://my-pgdata'); // 🧠 Uses IndexedDB for persistence
  },
});

**Why this matters:**

* **IndexedDB** acts like a permanent storage layer in the browser.
* The **'idb://my-pgdata'** URI tells PGlite to **persist the SQLite database** using the browser’s IndexedDB.
* Users can now **refresh the page or reopen the browser** without losing any patient data.
* Greatly improves the user experience for **offline-first** or **client-only** apps.

**2. Ensuring Persistent Local Data (Preventing Data Loss on Refresh)**

**Challenge:**

Initially, the database schema setup logic dropped and recreated the **patients** table every time the app loaded. This led to **loss of all existing patient records** on every refresh.

DROP TABLE IF EXISTS patients;    // Problem 
CREATE TABLE patients (...);

**Impact:**

* Patient records were lost on every page reload.
* Made testing and form submissions frustrating.
* Not realistic for local-first experiences.

**Solution:**

I removed the **DROP TABLE** and used a safe creation pattern:

 **await** database.query(**`**

    CREATE TABLE IF NOT EXISTS patients (

    id SERIAL PRIMARY KEY,

    first_name TEXT NOT NULL,...........)

so now its effective from :

* Prevents accidental data loss.
* Works well even across multiple app sessions
* Enables more realistic local development.

**3. Handling Complex Form Input in Patient Registration**

**Managed Optional and Nested Patient Fields**

Carefully handled optional fields (like **email**, **insurance_id**, **allergies**) by inserting **null** values if left empty, avoiding insertion errors.

**Simplified Form Grouping & State Handling**

Broke down complex form structure (address, medical history, insurance) into manageable state blocks for better readability and user experience.
