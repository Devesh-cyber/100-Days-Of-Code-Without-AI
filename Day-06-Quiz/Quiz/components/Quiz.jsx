import {useState} from "react";

function Quiz({questions, currentQuestion, setCurrentQuestion, setScore, score, setSeeQuiz}){
    const [userAns, setUserAns] = useState([])
    const [showResult, setShowResult] = useState(false)

    const calcScore = () => {
    return userAns.filter((p, index) => p === questions[index]['ans']).length
}

    return (
        <>
        {(!showResult) ? 
        <div className="quiz-shell">
            <h1> Can you guess the name <br />
            from the emoji </h1>

            <section className="quiz-counter">Question {currentQuestion} of 5</section>
            <section className="question">{questions[currentQuestion - 1]['que']}</section>
            <section className="options">
                {questions[currentQuestion - 1]['options'].map((p, index) => 
                <label key={index} className={p === userAns[currentQuestion - 1] ? "option selected" : "option"}>
                    <input type='radio' name="option"
                    checked={p === userAns[currentQuestion - 1]} onChange={(e) => {
                        userAns[currentQuestion - 1] = p
                        setUserAns([...userAns])
                    }} />{p}
                </label> 
                )}
            </section>
            <section className="buttons">
                {(currentQuestion < 2) ? null : <button className="Back" onClick={() => setCurrentQuestion(currentQuestion-1)}>Back</button>}
                {(currentQuestion >= 5) ? null : <button className='Next' onClick={() => setCurrentQuestion(currentQuestion+1)}>Next</button>}
                {(currentQuestion >= 5) ? <button className='Submit' onClick={() => {setScore(calcScore()); setShowResult(true)}}>Submit</button> : null}
            </section>
        </div> : null}

        {(showResult) ? 
        <div className="result-backdrop">
        <div className="result-card">
            {(score >= 3) ? <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrj6DCUL6L0gQ6P1b3WWPqla_QdJsx5tn7XqQYH4Cbw&s=10' alt='image' className="result-image" />
             :<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKGzclk2nTbbr_AtXrIeouvsq9PdaWahkaexkM0Q5iQ&s=10' alt='image' className="result-image" />}
            <h1>Quiz Completed</h1>
            <h2>You Scored !</h2>
            <p>{score} out of 5</p>
            <button onClick={() => {setSeeQuiz(false); setUserAns([]), setScore(0); setCurrentQuestion(1)}}>Go to Home</button>
        </div>
        </div> : null}
        </>
    )
}



export default Quiz;