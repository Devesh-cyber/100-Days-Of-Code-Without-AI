# 🎯 Emoji Translation Quiz

A fun, interactive quiz game built with **React + Vite** as part of my **100 Days of Code Without AI** series.

The idea is simple: **guess the movie name from the emojis** and see how well you score.

## 🚀 Features

* 🎬 Emoji-based movie guessing quiz
* ❓ 5 medium-hard questions
* 🔘 Multiple-choice answers
* ✅ Selected option highlighting
* 💾 Answers are preserved while navigating
* ⬅️ Back and ➡️ Next question navigation
* 📊 Automatic score calculation
* 🏆 Result modal after submission
* 🤩 Score-based result visuals
* 🏠 Return to the landing page
* 🔄 Quiz state resets when starting again
* 📱 Responsive UI
* 🎨 Dark, game-style interface

## 🧠 How It Works

The quiz stores its questions in a structured array:

```js
{
  id: 1,
  que: "🔍🐠",
  options: [
    "Finding Nemo",
    "The Little Mermaid",
    "Shark Tale",
    "Aquaman"
  ],
  ans: "Finding Nemo"
}
```

The current question is controlled using React state:

```js
const [currentQuestion, setCurrentQuestion] = useState(1)
```

Only the current question is rendered, while its options are dynamically generated using `.map()`.

### Answer Tracking

User selections are stored in an array based on the question position:

```text
Question 1 → userAns[0]
Question 2 → userAns[1]
Question 3 → userAns[2]
...
```

This allows answers to remain selected when navigating back to previous questions.

### Score Calculation

The score is calculated by comparing each user's answer with the corresponding correct answer:

```js
userAns.filter(
  (answer, index) => answer === questions[index].ans
).length
```

The resulting score is then displayed in the result screen.

## 🛠️ Tech Stack

* **React**
* **Vite**
* **JavaScript**
* **HTML**
* **CSS**
* **React Hooks**

  * `useState`

## 📂 Project Structure

```text
src/
├── components/
│   ├── Landing_page.jsx
│   └── Quiz.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## 🎮 Quiz Flow

```text
Landing Page
     ↓
Start Quiz
     ↓
Question 1
     ↓
Select Answer
     ↓
Next
     ↓
Question 2 → ... → Question 5
     ↓
Submit
     ↓
Calculate Score
     ↓
Result Modal
     ↓
Go to Home
```

## 📚 React Concepts Practiced

This project was built to practice core React concepts including:

* Components
* Props
* `useState`
* Conditional rendering
* Event handling
* Controlled radio inputs
* Dynamic rendering with `.map()`
* Arrays and state updates
* Derived values
* Parent → child state communication
* Component-based UI structure

## 🎯 Part of 100 Days of Code Without AI

This project is part of my **100 Days of Code Without AI** React learning series.

The goal of the series is to build projects progressively while understanding and writing the logic myself instead of relying on AI-generated implementations.

**Day 6 — Emoji Translation Quiz**
