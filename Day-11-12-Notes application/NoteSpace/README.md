# NoteSpace

A lightweight notes app built with React and Vite. Create notes, edit them inline, delete them, and keep them saved in your browser using `localStorage`.

## Features

- Create notes with a title and description
- Assign a category: Personal, Coding, College, or Work
- Record the note creation date and time
- Edit a note's title and description inline
- Delete notes
- Persist notes with browser `localStorage`
- Display a live clock and date in the header
- Responsive dark UI with purple accents

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Browser `localStorage`

## Getting Started

### Prerequisites

Install a recent version of Node.js and npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Create a production build

```bash
npm run build
```

## How It Works

- `App.jsx` owns the notes array and note ID state.
- `AddNote.jsx` contains the form used to create notes.
- `Display.jsx` renders notes and handles inline editing and deletion.
- `Header.jsx` displays the app title, current time, and date.
- `App.css` styles the application layout and components.
- `index.css` contains global styling defaults.
- Notes are serialized to JSON and stored in `localStorage`. When loaded, each note's `created_at` value is converted back into a JavaScript `Date` object.

## Project Structure

```text
src/
├── components/
│   ├── header.jsx
│   ├── addNote.jsx
│   └── displayNotes.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

Your exact file names or casing may differ. Keep the import paths consistent with the files in your project.

## Storage Notes

- Notes are saved in the current browser and origin.
- Clearing browser site data removes saved notes.
- `localStorage` is not cloud sync: notes are not automatically shared across browsers or devices.
- This project currently has no backend or user authentication.

## Current Scope

The current version focuses on the core notes workflow: create, display, edit, delete, and persist notes. Features such as pin sorting, search, category filtering, and cloud synchronization are not included in the current scope.

## Learning Goals

This project practices:

- React state with `useState`
- Side effects and intervals with `useEffect`
- Passing data and callbacks through props
- Rendering arrays with `.map()` and stable keys
- Immutable array and object updates
- Controlled inputs for inline editing
- JSON serialization and browser storage
- Responsive styling with CSS

## License

No license has been specified yet.