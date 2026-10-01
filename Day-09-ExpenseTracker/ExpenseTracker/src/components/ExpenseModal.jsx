
function ExpenseModal({setModal, addExpenses}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formObj = new FormData(form);
        const obj = Object.fromEntries(formObj);
        addExpenses({
            'expenseName': (obj.expenseName),
            'amount': parseInt(obj.amount),
            'category': obj.category,
            'date': obj.date
        })
        setModal(false)
    }

    return (
        <>
        <section className="form-main">
            <h1> Add New Expense </h1>
            <form onSubmit={handleSubmit}>
                <label> Expense Name </label>
                <input type="text" name="expenseName" placeholder="Add Expense Name..." required /> <br  />

                <label> Amount (₹) </label>
                <input type="number" name="amount" placeholder="Add Expense amount..." required /> <br  />

                <label> Category </label>
                <select name="category" required>
                    <option value="grocery"> Groceries </option>
                    <option value="food"> Food </option>
                    <option value="household"> Household </option>
                    <option value="medicine"> Medicine </option>
                    <option value='travel'> Travel </option>
                    <option value='bills'> Bills </option>
                    <option value='shopping'> Shopping </option>
                    <option value='other'> Other </option>
                </select> <br />

                <label> Date </label>
                <input type="date" name="date" defaultValue={new Date().toISOString().split('T')[0]}/>

                <section className="buttons">
                    <button name="cancel" onClick={() => setModal(false)}> Cancel </button>
                    <button type='submit' name="addExpense"> Add Expense </button>
                </section>
            </form>
        </section>
        </>
    )
}

export default ExpenseModal;