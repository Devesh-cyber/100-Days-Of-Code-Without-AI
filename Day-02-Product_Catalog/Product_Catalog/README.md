# Product Catalog

A simple React product management dashboard built as part of my **100 Days of Code — W/O AI** series.

The goal of this project was to practice React concepts by building a small, functional application from scratch without using AI for implementation.

---

## Features

- Add new products through a modal form
- Product form with:
  - Product Name
  - Price
  - Category
  - Description
  - Image URL
  - Stock

- Dynamically add products to the product list
- Display products as cards
- Product images rendered from image URLs
- Modal opens and closes dynamically
- Responsive product grid
- Dark-themed dashboard UI

---

## React Concepts Used

- JSX
- Functional Components
- `useState`
- Props
- Callback Props
- Event Handling
- Form Submission
- `event.preventDefault()`
- `FormData`
- `Object.fromEntries()`
- Conditional Rendering
- Array `.map()`
- State Updates
- Parent → Child Data Flow
- Child → Parent Data Flow

---

## Component Structure

```text
App
├── Modal
│   └── Product Form
│
└── ProductGrid
    └── Product Cards
```

### Data Flow

```text
Modal
   │
   │ onAddProducts(product)
   ↓
App
   │
   │ productList
   ↓
ProductGrid
   │
   │ .map()
   ↓
Product Cards
```

---

## How It Works

### 1. Product Form

The `Modal` contains the product form.

When the form is submitted:

```text
Form
 ↓
FormData
 ↓
Object.fromEntries()
 ↓
Product Object
```

The product object is then sent to `App` using a callback prop.

### 2. State Management

`App` maintains the main `productList` state.

When a new product is added, the state is updated and React re-renders the UI.

### 3. Product Rendering

`ProductGrid` receives the updated product list through props and uses `.map()` to generate a product card for every product.

---

## Challenges Faced

- Understanding how data moves between components
- Passing a function from parent to child through props
- Sending submitted form data back to the parent
- Understanding why `onSubmit` is better suited for form submission than button `onClick`
- Converting `FormData` into a JavaScript object
- Dynamically rendering multiple products using `.map()`
- Managing modal visibility with state
- Structuring the UI with CSS

---

## What I Learned

This project helped me understand how React components communicate with each other and how state drives the UI.

The most important concept I practiced was:

> **State → Props → Render → User Action → State Update → Re-render**

Instead of manually manipulating the DOM, I let React update the interface based on the current state.

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- HTML

---

## Series

**100 Days of Code — W/O AI**

**Day 02 — Product Catalog**

> Learn React by building small projects, understanding the concepts behind them, and writing the implementation myself.
