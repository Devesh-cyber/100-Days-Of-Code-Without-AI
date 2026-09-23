function ToDoStats({todoList}){
    return (
        <>
        <section className="stats-card">
            <h3>Total : {todoList.length}</h3>
            <h3>Active : {todoList.length - todoList.filter(p => p.completed == true).length}</h3>
            <h3> Completed : {todoList.filter(p => p.completed == true).length} </h3>
        </section>
        </>
    )
}

export default ToDoStats;