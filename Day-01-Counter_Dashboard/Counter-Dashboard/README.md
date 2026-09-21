# Counter Dashboard

A simple React Counter Dashboard built as part of my
100 Days of Code — W/O AI series.

The goal of this project was to understand the fundamentals
of React by building the application without using AI to write
the implementation.

## Features

- Increment counter
- Decrement counter
- Reset counter
- Display counter statistics
- Show positive/negative/zero status
- Show even/odd parity
- Calculate doubled value
- Calculate squared value
- Maintain counter history

## React Concepts Used

- JSX
- Vite
- Functional Components
- Props
- useState
- Event Handling
- Derived Values
- Array State
- Array Mapping
- Component Composition

## Component Structure

App
├── Counter
├── Statistics
└── History

### App

Responsible for managing:

- Counter state
- History state
- Increment
- Decrement
- Reset

### Counter

Receives the counter value and event handlers through props.

### Statistics

Receives the counter value and calculates derived values.

### History

Receives the history array and renders the counter history.

## Challenges Faced

### 1. Updating History

Initially, I tried using `push()` and `pop()` to update the history array.

This caused problems because React state should not be mutated directly.

I learned to create a new array using the spread operator.

### 2. Current vs Previous State

I initially added the old counter value to history.

I then changed the logic so that the newly calculated counter value is added.

### 3. Understanding Props

I first had everything inside `App`.

I then separated the application into components and passed
data and functions through props.

## What I Learned

- How React components work
- How state updates trigger UI updates
- How props pass data and functions between components
- How to derive values from state
- How to update arrays without directly mutating them
- How to break a UI into smaller components

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Series

**100 Days of Code — W/O AI**

Day 01 — Counter Dashboard
