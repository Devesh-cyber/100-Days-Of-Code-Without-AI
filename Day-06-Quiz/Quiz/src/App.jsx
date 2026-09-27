import { useState } from 'react'
import Landing_page from '../components/landing_page'
import Quiz from '../components/Quiz'
import './App.css'

function App() {
  const [seeQuiz, setSeeQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [score, setScore] = useState(0)

  const questions = [
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
  },
  {
    id: 2,
    que: "🧙‍♂️🧙‍♀️🧹⚡",
    options: [
      "Harry Potter",
      "The Lord of the Rings",
      "Fantastic Beasts",
      "The Chronicles of Narnia"
    ],
    ans: "Harry Potter"
  },
  {
    id: 3,
    que: "🚢🏔️💔",
    options: [
      "Titanic",
      "Pearl Harbor",
      "The Great Gatsby",
      "The Notebook"
    ],
    ans: "Titanic"
  },
  {
    id: 4,
    que: "👳‍♂️🏏🌧️",
    options: [
      "Lagaan",
      "Chak De! India",
      "83",
      "MS Dhoni: The Untold Story"
    ],
    ans: "Lagaan"
  },
  {
    id: 5,
    que: "🤼‍♂️👧🥇",
    options: [
      "Dangal",
      "Sultan",
      "Mary Kom",
      "Chak De! India"
    ],
    ans: "Dangal"
  }
];

  
  return (
    <>
      {(!seeQuiz) ? <Landing_page flag={setSeeQuiz} /> : null}
      {(seeQuiz) ? <Quiz questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setScore={setScore} score={score} setSeeQuiz={setSeeQuiz} /> : null}
    </>
  )
}

export default App;
