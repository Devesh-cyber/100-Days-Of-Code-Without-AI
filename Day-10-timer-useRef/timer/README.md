# Day 10 — Focus Timer Dashboard

## Overview

A React-based **Focus Timer Dashboard** built as part of my **100 Days of Code, W/O AI** challenge.

The project focuses on learning how to manage timers, side effects, DOM interaction, forms, and shared state in React.

## Features

- Set a focus session duration in minutes
- Start the countdown timer
- Pause the timer
- Reset the timer
- Automatically stop when the timer reaches `00:00:00`
- Edit an existing timer
- Pause the timer automatically when editing
- Automatically focus the duration input when Edit is clicked
- Save the updated duration
- Prevent invalid or zero-minute durations
- Responsive dark-themed UI

## React Concepts Learned

### `useState`

Used for managing:

- Timer value
- Running state
- Editing state
- Input duration

### `useEffect`

Used for:

- Creating and cleaning up the timer interval
- Automatically stopping the timer at zero
- Focusing the input after entering edit mode

### `useRef`

Used to access the duration input DOM element and automatically focus it when editing.

```jsx
const inputRef = useRef(null)

inputRef.current.focus()
```

### Conditional Rendering

The setup button changes according to the current state:

```text
No timer → Set Timer
Timer configured → Edit
Editing → Save Changes
```

### Form Handling

Used a single form to handle both:

- Initial timer configuration
- Saving edited duration

Also learned the importance of:

```jsx
type="button"
```

for buttons inside forms that should **not submit the form**.

### Parent-Child State Sharing

`App.jsx` manages the shared timer and running state and passes them to `Display` and `Setup`.

```text
App
├── Display
│   ├── timer
│   └── running
│
└── Setup
    ├── timer
    └── editing
```

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

```text
src/
├── components/
│   ├── timerDisplay.jsx
│   └── timerSetup.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Key Learning

The main learning from this project was understanding how different React hooks work together.

```text
useState
   ↓
Manage application state

useEffect
   ↓
Handle side effects and lifecycle

useRef
   ↓
Interact with DOM elements

Props
   ↓
Share state and functions between components
```

Instead of treating the hooks separately, this project combined them into one functional application.

## Day 10 Status

**Day 10 → Complete**

**90 days to go.**

#100DaysOfCode #React #JavaScript #WebDevelopment #BuildInPublic #LearningInPublic