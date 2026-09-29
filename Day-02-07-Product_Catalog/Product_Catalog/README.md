# Day 07 — Shopping Cart & Inventory Management

## Overview

For Day 07, the existing **Product Catalog** was extended into a small e-commerce-style application.

Instead of creating a completely separate project, the Product Catalog was evolved by adding a **Shopping Cart and Inventory Management system**.

The main focus of this project was understanding **shared state, lifting state up, parent-child communication, and updating state from a child component**.

---

## Project Goal

Build a product catalog where users can:

* View available products
* Add products to the cart
* Select the required quantity
* Respect available inventory
* Calculate the total price dynamically
* Place an order
* Update the product's stock after ordering
* Return to the product catalog with updated inventory

---

## Features

### Product Catalog

* Display products in a reusable product grid
* Product image
* Product name
* Category
* Description
* Price
* Current stock
* Add to Cart button
* Out-of-stock handling

### Add Product

Users can add new products through a modal form.

Fields:

* Product Name
* Price
* Category
* Description
* Image URL
* Stock

The submitted form is converted into a product object and added to the product list.

### Shopping Cart

Clicking **Add To Cart** opens a cart for the selected product.

The cart displays:

* Product name
* Product price
* Selected quantity
* Available inventory
* Final price

### Quantity Management

Users can:

* Increase quantity using `+`
* Decrease quantity using `-`
* Prevent quantity from exceeding available stock
* Prevent quantity from going below `1`
* Handle products with zero stock

### Order Processing

When **Place Order** is clicked:

1. Validate the selected quantity
2. Calculate the remaining stock
3. Find the corresponding product using its ID
4. Replace the old product object with the updated object
5. Update the parent `productList`
6. Close the cart

Example:

```text
Initial Stock: 10
Selected Quantity: 3

Place Order

Updated Stock: 7
```

---

# React Concepts Practiced

## 1. Lifting State Up

The main `productList` is maintained by the parent component.

```text
App
 │
 ├── Modal
 │
 └── ProductGrid
       │
       └── Cart
```

The Cart needs to modify the product list owned by `App`, so the update function is passed down through props.

---

## 2. Parent → Child Communication

Data and functions are passed through props.

```text
App
 ↓
ProductGrid
 ↓
Cart
```

Examples:

* `products`
* `setProductList`
* `setAddToCartModal`
* selected product `id`

---

## 3. Child → Parent State Update

The Cart modifies the parent's product list through:

```jsx
setProductList(updatedProducts)
```

This demonstrates how a child component can trigger a state update owned by its parent.

---

## 4. Single Source of Truth

The actual inventory is maintained inside `productList`.

The Cart does **not** directly modify the original stock while the user changes quantity.

Instead:

```text
product.stock
    ↓
actual inventory

quantity
    ↓
temporary user selection
```

Only after placing the order is the actual inventory changed.

---

## 5. Derived State

The following values are calculated instead of being stored separately:

### Available Stock

```jsx
p.stock - quantity
```

### Final Price

```jsx
quantity * p.price
```

This avoids maintaining unnecessary state.

---

## 6. Array `map()`

`map()` is used to replace the ordered product while keeping the rest of the products unchanged.

```jsx
const updatedProducts = products.map(i =>
    i.id === obj.id ? obj : i
)
```

---

## 7. Array `filter()`

`filter()` is used to locate the selected product based on its ID.

```jsx
const prod = products.filter(p => p.id === id)
```

---

## 8. Conditional Rendering

Conditional rendering is used for:

* Showing the Add Product modal
* Showing the Cart
* Handling zero-stock products
* Showing fallback product images

---

## 9. Event Handling

Practiced React event handling through:

* `onClick`
* `onSubmit`
* `event.preventDefault()`

---

## 10. FormData API

The Add Product form uses:

```jsx
new FormData(event.target)
```

and:

```jsx
Object.fromEntries(formData.entries())
```

to convert form data into an object.

---

# Component Structure

```text
App
│
├── Modal
│   └── Add Product Form
│
└── ProductGrid
    │
    ├── Product Card
    │   └── Add To Cart
    │
    └── Cart
        ├── Quantity Controls
        ├── Availability
        ├── Final Price
        └── Place Order
```

---

# State Structure

### App

```text
productList
addToCartModal
counter
```

### ProductGrid

```text
cartId
```

### Cart

```text
quantity
```

The important distinction is:

```text
App
└── productList
      ↓
   Actual inventory

Cart
└── quantity
      ↓
   Temporary order quantity
```

---

# User Flow

```text
Product Catalog
       ↓
Click Add To Cart
       ↓
Cart Popup
       ↓
Select Quantity
       ↓
Calculate Availability
       ↓
Calculate Final Price
       ↓
Place Order
       ↓
Update Product Stock
       ↓
Close Cart
       ↓
Updated Product Catalog
```

---

# Technologies Used

* React
* Vite
* JavaScript
* JSX
* CSS

---

# Day 07 Learning Outcomes

By completing this project, I practiced:

* Lifting state up
* Shared state
* Parent-child communication
* Child-to-parent updates
* Props
* `useState`
* Event handling
* Conditional rendering
* Array `map()`
* Array `filter()`
* FormData
* Derived values
* Inventory management logic
* State updates involving arrays
* Component composition

---

## Project Evolution

This project demonstrates the progression of the **100 Days of Code Without AI** series:

```text
Day 02
Product Catalog
     ↓
Day 07
Product Catalog + Shopping Cart
     ↓
Future Projects
Multiple Components
     ↓
Shared Application State
     ↓
API Integration
     ↓
Backend Integration
     ↓
Full-Stack Applications
```

The goal is not just to build isolated projects, but to progressively **extend existing concepts and eventually combine them into complete full-stack applications**.
