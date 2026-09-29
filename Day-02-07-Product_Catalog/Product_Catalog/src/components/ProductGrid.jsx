import Cart from "./AddToCart";
import { useState } from "react";

function ProductGrid({products, addToCartModal, setAddToCartModal, setProductList
}){
    const [cartId, setCartId] = useState(null);

    return (
        <main className="product-container">
            <div className="product-grid">
        {products.map(p => 
            <section className={p.stock === 0 ? 'product-card out-of-stock' : 'product-card'} key = {p.id}>
                <div className="product-image-container">
                            {(p.image_url) ? (<img
                                className="product-image"
                                src={p.image_url}
                                alt={p.product_name}
                            />) : (<img
                                className="product-image"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrrl0L9WrWLazyz6pvbsNQNHeSNeuXpnJ6J46RCywNla7jqQxPfH4TsR2&s=10"
                                alt={p.product_name}
                            />) }
                        </div>
                        <div className="product-content">
                            <h2 className="product-name">
                                {p.product_name}
                            </h2>
                            <p className="product-category" data-category={p.category}>
                                {p.category}
                            </p>
                            <p className="product-description">
                                {p.description}
                            </p>
                            <div className="product-bottom">
                                <strong className="product-price">
                                    ₹{p.price}
                                </strong>
                                <span className="product-stock">
                                    Stock: {p.stock}
                                </span>
                            </div>
                        <button className='add-to-cart' 
                        onClick={() => {(p.stock === 0) ? alert('Inventory Out of Stock') : setAddToCartModal(true); setCartId(p.id)}}> Add To Cart </button>
                        </div>
            </section>
        )}
            </div>
        {(addToCartModal)? <Cart id={cartId} products={products} setAddToCartModal={setAddToCartModal} setProductList={setProductList} /> : null}
        </main>
    )   
}

export default ProductGrid;