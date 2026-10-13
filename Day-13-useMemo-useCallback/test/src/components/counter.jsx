import { useEffect, useState, useCallback } from "react";
import ProductList from "./productList"

function Counter(){
    const [count, setCount] = useState(0)
    const [product, setProduct] = useState(['a','b','c','d','e'])

    useEffect(() => {
        console.log("The product is rendering...")
    }, [product])

    console.log("Rendering Counter...")

    const handleSelect = useCallback((item) => {
    console.log("Selected product:", item);
},[]);

    return (
        <>
        <section className="main">
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}> INC </button>
        <button onClick={() => setCount(prev  => prev - 1)}> DEC </button>
        <br />
        <hr />
        <ProductList product={product} onSelect={handleSelect} />
        </section>
        </>
    )
}

export default Counter;