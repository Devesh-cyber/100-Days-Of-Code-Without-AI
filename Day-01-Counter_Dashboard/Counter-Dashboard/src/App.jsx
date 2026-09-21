import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([0]);
  function decrement() {
      setCount(count - 1)
      setHistory([...history, count - 1])
  }
  function increment() {
      setCount(count + 1)
      setHistory([...history, count + 1])
  }

  function reset() {  
      setCount(0)
      setHistory([0])
  }
  return (
    <main className='dashboard'>
      <Counter count={count} inc={increment} dec={decrement} reset={reset}/>
      <Statistics count={count} />
      <History history={history} />

    </main>
  )
}

function Counter({count, inc, dec, reset}){
  
  return (
    <section className='counter-section'>
    <h1> COUNTER DASHBOARD </h1>
    <h1 className='count'> {count} </h1>
    <div className='counter-buttons'>
      <button onClick = {dec}> - </button>
    <button onClick = {inc}> + </button>
    </div>
    <button className='reset-button' onClick = {reset}> RESET </button>
    </section>
  )
}

function Statistics({count}){
   let content = 'Zero'
  if (count > 0){
      content = 'Positive'
    } else if (count < 0){
      content = 'Negative'
    } else {
      content = 'Zero'
    }

  return (
    <section className='stats-section'>
       <h2>Statistics</h2>

      <div className='stats'>
        <div>
        <span> Status</span>
        <strong>{content}</strong>
        </div>
      
        <div>
        <span> Parity</span>
        <strong>{count % 2 === 0 ? 'Even' : 'Odd'}</strong>
        </div>

        <div>
        <span> Doubled</span>
        <strong>{count * 2}</strong>
        </div>
        
        <div>
        <span> Squared</span>
        <strong>{count ** 2}</strong>
        </div>
      </div>
    </section>
  )
}

function History({history}){
  return (
    <section className='history-section'>
    <h2> History </h2>
    <div className='history'>
      {history.map((x, index) => (
        <span key={index}>
          {x}
          {index < history.length - 1 && ' - '}
        </span>
      ))}
    </div>
    </section>
  )
}
export default App
