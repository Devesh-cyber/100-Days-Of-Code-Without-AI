# Day 03 — Todo Dashboard

## Overview

For **Day 03** of my **100 Days of Code, W/O AI** challenge, I built a Todo Dashboard using React.

The main goal of this project was not to build a feature-heavy Todo application, but to understand how React handles **state, arrays of objects, component communication, and state-driven UI updates**.

I built the project without using AI to write the implementation. The project was developed by understanding the requirements, writing the logic myself, debugging issues, and improving the UI afterward.

---

## Features & Functionalities

### 1. Add Todo

Users can open the Todo modal and enter a new task.

The application:

- Takes the Todo from the form
- Validates that the input isn't empty
- Creates a Todo object
- Assigns it an ID
- Sets `completed` to `false`
- Adds it to the Todo state

Todo structure:

```js
{
    id: 1,
    todo: "Learn React",
    completed: false
}
```

---

### 2. Display Todos

All Todos are stored inside a React state array.

The Todo list is rendered dynamically using `.map()`.

Each Todo has:

- Checkbox
- Task name
- Delete button

React's `key` is assigned using the Todo's ID.

---

### 3. Delete Todo

Each Todo has its own Delete button.

When clicked:

1. The Todo ID is passed to the handler.
2. `.filter()` creates a new array without that Todo.
3. The updated array is stored in state.
4. React re-renders the list.

---

### 4. Mark Todo as Completed

Each Todo has a checkbox.

When the checkbox is changed:

- The Todo ID is passed to the parent.
- `.map()` is used to find the matching Todo.
- Its `completed` value is changed.
- The updated array is stored in state.

Completed Todos are visually displayed with a **strikethrough style**.

The same functionality allows a Todo to be marked active again.

---

### 5. Todo Statistics

The dashboard displays:

- **Total** Todos
- **Active** Todos
- **Completed** Todos

These values are calculated from the Todo array instead of being stored as separate states.

For example:

```text
Total     = todoList.length
Completed = completed Todos
Active    = Total - Completed
```

This helped me understand the concept of **derived state**.

---

### 6. Responsive UI

The application was styled with CSS and designed to work across different screen sizes.

The UI includes:

- Dark dashboard layout
- Todo cards
- Statistics cards
- Modal form
- Responsive layout
- Hover states
- Completed Todo styling
- Empty-state message

---

# Component Structure

```text
App
│
├── ToDoModal
│
├── DisplayToDo
│
└── ToDoStats
```

### App

The main component.

Responsible for:

- Maintaining Todo state
- Adding Todos
- Deleting Todos
- Updating Todo completion
- Passing data and functions to child components

---

### ToDoModal

Responsible for:

- Opening the Add Todo modal
- Handling the form
- Validating input
- Creating the Todo object
- Sending the Todo back to `App`

---

### DisplayToDo

Responsible for:

- Rendering the Todo list
- Displaying individual Todo cards
- Handling Delete actions
- Handling completion changes

---

### ToDoStats

Responsible for displaying the derived Todo statistics.

---

# Data Flow

One of the important concepts I focused on was understanding communication between components.

```text
ToDoModal
    │
    │ Callback Prop
    ↓
   App
    │
    │ State
    ↓
DisplayToDo
```

The flow works like this:

```text
User enters Todo
        ↓
ToDoModal creates Todo object
        ↓
Callback sends Todo to App
        ↓
App updates Todo state
        ↓
DisplayToDo receives updated list
        ↓
UI re-renders
```

This helped me understand how **child components can communicate with a parent through callback props**.

---

# React Concepts Practiced

This project gave me practical experience with:

- `useState`
- Props
- Callback Props
- Parent → Child communication
- Child → Parent communication
- `.map()`
- `.filter()`
- Array state
- Objects inside arrays
- Immutable state updates
- Conditional rendering
- Conditional styling
- Derived state
- React `key`
- Event handling
- Form handling

---

# Problems & Challenges Faced

## 1. Understanding Child → Parent Communication

One of the first challenges was understanding how the Todo created inside `ToDoModal` could update the state inside `App`.

The solution was using a **callback function passed from the parent to the child**.

```text
App
 ↓
passes function
 ↓
ToDoModal
 ↓
calls function with new Todo
 ↓
App updates state
```

This was one of the important concepts learned during the project.

---

## 2. Updating One Object Inside an Array

Another challenge was marking a specific Todo as completed.

The Todo list is an array of objects, so directly changing one object would mean modifying existing state.

Instead, I used `.map()` to create a new array and update only the Todo whose ID matched.

This helped me understand **immutable state updates** better.

---

## 3. Deleting an Item

Deleting a Todo required creating a new array without the selected item.

I used `.filter()` for this.

The important part was understanding that the original state isn't directly modified.

---

## 4. Derived Statistics

Initially, the statistics could have been maintained as separate state values.

Instead, I calculated them from the Todo array itself.

This helped reinforce the idea that **not everything needs to be stored in state**.

---

## 5. UI Structure

The initial UI was functional but visually very basic.

After completing the functionality, I spent time improving the CSS and turning the basic Todo list into a more structured dashboard containing:

- Header
- Add Todo button
- Statistics cards
- Todo section
- Todo cards
- Empty state

---

# What I Intentionally Did Not Build

I deliberately kept the project limited to the concepts I wanted to learn today.

Not included:

- Edit Todo
- LocalStorage
- Backend
- Database
- Authentication
- Search
- Filtering
- Priorities
- Due dates
- Drag and drop

The **Edit Todo functionality** was considered, but I decided not to force it into Day 3 because the main objective was to understand the fundamentals properly.

It can be added when this project is expanded into a more complete Todo application.

---

# What I Learned

The biggest learning from this project was understanding that React is largely about managing **state and data flow**.

Instead of thinking only about individual UI elements, I started thinking about:

```text
State
  ↓
Props
  ↓
Component
  ↓
User Interaction
  ↓
State Update
  ↓
Re-render
```

The project also gave me practical experience with manipulating arrays of objects, which is something I'll be using frequently in React applications.

---

# Tech Stack

- React
- Vite
- JavaScript
- CSS

---

# Project Status

**Day 03 / 100 — Completed**

The basic Todo functionality is complete.

Future iterations can expand this into a complete Todo application with editing, persistence, and eventually backend integration.

---

## Links

**Live Demo:**
[https://100-days-of-code-without-ai-jcqt.vercel.app/](https://100-days-of-code-without-ai-jcqt.vercel.app/)

**GitHub:**
[https://github.com/Devesh-cyber/100-Days-Of-Code-Without-AI](https://github.com/Devesh-cyber/100-Days-Of-Code-Without-AI)

---

## 100 Days of Code, W/O AI

**Simple Code. Real Learning. No AI Coding.**

The objective is to spend 100 days building projects independently, understanding the code, debugging problems myself, and gradually increasing the complexity of what I can build.
