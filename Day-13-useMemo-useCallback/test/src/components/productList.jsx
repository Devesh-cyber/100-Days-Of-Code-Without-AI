import {memo} from "react";

function ProductList({product, onSelect}){

    console.log("Rendering ProductList...")
    return (
        <>
        <ul>
        {   
            product.map((p, index) => (
                <li key={index}>{p}
                <button onClick={() => onSelect(p)}>Select</button>
                </li>
            ))
        }
        </ul>
        
        </>
    )
}

export default memo(ProductList);