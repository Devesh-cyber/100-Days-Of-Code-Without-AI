import { useState } from "react";

function Cart({id, products, setAddToCartModal, setProductList}){
    const prod = products.filter(p => p.id === id)
    const p = {...prod[0]}
    const [quantity, setQuantity] = useState(p.stock > 0 ? 1 : 0)

    const minus = () => {
        if(quantity - 1){
            setQuantity(quantity - 1)
        } else {
            alert('Cannot reduce quantity further')
            return
        }
    }

    const plus = () => {
        if(quantity >= p.stock){
            alert('Inventory in Empty')
            return
        } else {
            setQuantity(quantity + 1)
        }
    }

    const placeOrder = () => {
        if (quantity === 0) {
            alert('Product is out of stock')
            return
        }
        const obj = {
            'id': p.id,
            'product_name': p.product_name,
            'price': p.price,
            'category': p.category,
            'description': p.description,
            'image_url': p.image_url,
            'stock': p.stock - quantity
        }
        // I want to replace the product id object from prodcut from obj
        const updatedProducts = products.map(i => 
            (i.id === obj.id) ? obj : i
        )

        setProductList(updatedProducts)
        setAddToCartModal(false)
    }
    return (
        <>
        <div className='cart'>
            <h1> CART </h1>
            <section className="product"> 
                <strong> {p.product_name} </strong>
                <strong> Rs. {p.price} x {quantity}</strong>
            </section>
            <section className="toggle-quantity">
                <button 
                className="minus" 
                onClick={() => minus()}> - </button>
                {quantity}
                <button 
                className='plus' 
                onClick={() => plus()}> + </button>
            </section>
            <strong className="availability"> Available : {p.stock - quantity} </strong><br />
            <strong className="final-price"> {quantity * p.price}</strong><br />
            <button className="close-cart" onClick={() => setAddToCartModal(false)}> Close </button>
            <button className="place-order" onClick={() => placeOrder()}> Place Order </button>
        </div>
        </>
    )
}

export default Cart;