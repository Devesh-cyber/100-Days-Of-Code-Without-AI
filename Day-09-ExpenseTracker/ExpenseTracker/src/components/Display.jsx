function Display({expenses, setExpenses}){

    const handleDelete =(id) => {
        const updated = expenses.filter(p => p.id != id)
        setExpenses(updated)
    }

    return (
        <>
        {
            expenses.map(p => (
                <section className="display-main" key={p.id}>
                    <strong>{p.expenseName}</strong>
                    <p>{p.date}</p>
                    <strong>{p.category}</strong>
                    <strong>{p.amount}</strong>
                    <button onClick={() => handleDelete(p.id)}> ❌ </button>
                </section>
            ))
        }
        </>
    )
}

export default Display;