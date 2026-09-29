# Time Tools — React

A small React project combining a **Live Clock** and a **Stopwatch** to practice React state management, `useEffect`, timers, cleanup, and derived state.

This project was built as part of the **100 Days of Code — W/O AI** series.

## Features

### Live Clock

* Displays the current date
* Displays the current time
* Updates automatically every second
* Uses JavaScript's `Date` object
* Uses `useEffect` and `setInterval`
* Cleans up the interval when the component unmounts

### Stopwatch

* Start the stopwatch
* Pause the stopwatch
* Reset the stopwatch
* Tracks elapsed time using a single state value
* Converts elapsed seconds into hours, minutes, and seconds
* Automatically cleans up the interval when paused/unmounted

## Concepts Practiced

* React functional components
* `useState`
* `useEffect`
* `setInterval`
* `clearInterval`
* Effect dependencies
* Effect cleanup
* JavaScript `Date`
* Derived values
* Array destructuring
* Functional state updates
* Conditional side effects
* Component-based architecture

## Project Structure

```text
src/
├── components/
│   ├── LiveClock.jsx
│   └── StopWatch.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## How It Works

### Live Clock

The current time is stored in React state:

```js
const [time, setTime] = useState(new Date())
```

An interval updates the state every second:

```js
setTime(new Date())
```

The required values are then extracted from the `Date` object:

```js
time.getDate()
time.getMonth() + 1
time.getFullYear()

time.getHours()
time.getMinutes()
time.getSeconds()
```

The interval is cleaned up using:

```js
return () => clearInterval(interval)
```

### Stopwatch

The stopwatch maintains two pieces of state:

```js
const [elapsedTime, setElapsedTime] = useState(0)
const [isRunning, setIsRunning] = useState(false)
```

`elapsedTime` acts as the single source of truth and stores the total elapsed seconds.

When `isRunning` becomes `true`, the effect creates an interval:

```text
isRunning
    ↓
true
    ↓
setInterval()
    ↓
elapsedTime + 1 every second
```

When the stopwatch is paused, the effect cleanup clears the interval.

The total seconds are converted into:

```text
Hours
Minutes
Seconds
```

using calculations based on `elapsedTime`.

## Tech Stack

* React
* Vite
* JavaScript
* CSS

## Running Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

## Learning Goal

The main purpose of this project was to understand **`useEffect` through practical use** rather than treating it as just another React hook.

The project demonstrates two different timer patterns:

```text
Live Clock
Date → useState → useEffect → setInterval
```

and:

```text
Stopwatch
isRunning → useEffect → setInterval
                     ↓
              elapsedTime
                     ↓
             H : M : S
```

## Day 08 / 100

**100 Days of Code — W/O AI**

Day 08 focused on:

> **useEffect + Lifecycle Thinking**

Built with React, Vite, JavaScript, and CSS.
