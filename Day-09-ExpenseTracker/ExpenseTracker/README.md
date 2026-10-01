# Persistent Expense Tracker

A simple expense management application built with **React + Vite** as part of my **100 Days of Code — W/O AI** series.

The project focuses on building a practical React application while learning **state management, component communication, derived data, `useEffect`, and browser `localStorage` persistence**.

## Features

* Add new expenses
* Delete expenses
* Categorize expenses
* Select expense date
* Calculate total expenses
* Display total number of expenses
* Identify the top spending category
* Persist expenses using `localStorage`
* Expenses remain available after refreshing the page
* Responsive dashboard UI

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* Browser `localStorage`

## Project Structure

```text
src/
│
├── assets/
│   └── wallet.png
│
├── components/
│   ├── Stats.jsx
│   ├── ExpenseModal.jsx
│   └── Display.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## How It Works

### Adding an Expense

```text
Add Expense
     ↓
ExpenseModal
     ↓
FormData
     ↓
App
     ↓
expenses state
     ↓
Display + Stats
```

The form collects:

* Expense name
* Amount
* Category
* Date

The amount is converted from the form's string value into a number before being added to the state.

### Statistics

The application derives statistics directly from the `expenses` array.

```text
expenses
   ├── Total Expenses
   ├── Total Items
   └── Top Category
```

The top category is determined by calculating the total amount spent in each category and finding the category with the highest total.

### Delete Expense

```text
Delete
   ↓
Filter expense by ID
   ↓
Updated expenses
   ↓
React state
   ↓
UI updates
```

### Local Storage Persistence

The application uses `localStorage` to persist expenses.

When the application starts:

```text
localStorage
     ↓
JSON.parse()
     ↓
React state
     ↓
UI
```

When expenses change:

```text
React state
     ↓
useEffect
     ↓
JSON.stringify()
     ↓
localStorage
```

This means expenses survive a browser refresh.

## Key React Concepts Practiced

* Functional components
* `useState`
* `useEffect`
* Props
* Callback props
* Parent → Child data flow
* Child → Parent communication
* Array methods

  * `map()`
  * `filter()`
  * `reduce()` / aggregation logic
* Derived data
* Form handling
* `FormData`
* `Object.fromEntries()`
* Conditional rendering
* `JSON.stringify()`
* `JSON.parse()`
* Browser `localStorage`

## Data Flow

```text
                    App
                     │
                 expenses
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
      Stats       Display    ExpenseModal
        │            │            │
   statistics     display      new expense
                     │            │
                     └──────→ App State
                                  │
                                  ↓
                             localStorage
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Learning Goal

The goal of this project was not just to build an expense tracker, but to understand how a React application can move from **temporary state-based data** to a **persistent application** using browser storage.

> React state controls the application UI, while `localStorage` allows the data to survive page reloads.

## Part of 100 Days of Code

**100 Days of Code — W/O AI**

Building small React projects independently to understand concepts through implementation rather than relying on AI-generated code.

**Day → Persistent Expense Tracker**

**Tech:** React • Vite • JavaScript • CSS
