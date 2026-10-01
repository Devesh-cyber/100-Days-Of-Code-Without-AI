import { useEffect, useState } from 'react'
import './App.css'
import Stats from './components/Stats'
import ExpenseModal from './components/ExpenseModal'
import wallet from './assets/wallet.png'
import Display from './components/Display'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const item = localStorage.getItem("expenses")

    if (item) {
        return JSON.parse(item)
    }

    return []
})
  const [isModal, setModal] = useState(false)  

  const newId = expenses.length > 0
    ? Math.max(...expenses.map(p => p.id)) + 1
    : 1

  const addExpenses = (curr) => {
    const exp = {id: newId, ...curr}
    setExpenses([...expenses, exp])
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  },[expenses])

  return (
    <>
      <div className='expense-main'>

        <header>
          <img src={wallet} alt='wallet icon' />
          <h1>Expense Tracker</h1>
          <p>Keep track of your expense</p>
        </header>

        <section className='stats'>
          <Stats expenses={expenses} />
        </section>

        <section className='Add-Expense'>
          <button onClick={() => setModal(true)}> + Add Expense </button>
          {(isModal) ? <ExpenseModal setModal={setModal} addExpenses={addExpenses} /> : null}
        </section>

        <section className='display'>
          <Display expenses={expenses} setExpenses={setExpenses} />
        </section>

      </div>
    </>
  )
}

export default App
