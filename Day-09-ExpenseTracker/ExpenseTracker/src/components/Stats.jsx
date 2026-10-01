
function Stats({expenses}){
    const total_expense = () => {
        let sum = 0
        expenses.map(p => 
            sum += p.amount
        )
        return sum
    }

    const top_category = () => {
    let categoryTotals = {}

    expenses.map(p => {
        if (categoryTotals[p.category]) {
            categoryTotals[p.category] += p.amount
        } else {
            categoryTotals[p.category] = p.amount
        }
    })

    const sortedCategories = Object.entries(categoryTotals)
        .sort((a, b) => b[1] - a[1])

    return sortedCategories[0]?.[0] || "N/A"
}
    
    return (
        <>
        <section className="statistics">
            <h1>Summary</h1>
            <p>Total Expenses <br /> {total_expense()} </p>
            <p>Total Items <br /> {expenses.length} </p>
            <p>Top Categories <br /> {top_category()} </p>
        </section>
        </>
    )
}

export default Stats;