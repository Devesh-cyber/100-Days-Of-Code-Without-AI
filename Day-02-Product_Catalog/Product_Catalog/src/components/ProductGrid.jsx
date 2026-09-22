function ProductGrid({products}){
    return (
        <main className="product-container">
            <div className="product-grid">
        {products.map(p => 
            <section className='product-card' key = {p.product_name}>
                <div className="product-image-container">
                            <img
                                className="product-image"
                                src={p.image_url}
                                alt={p.product_name}
                            />
                        </div>
                        <div className="product-content">
                            <h2 className="product-name">
                                {p.product_name}
                            </h2>
                            <p className="product-category">
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
                        </div>
            </section>
        )}
            </div>
        </main>
    )   
}

export default ProductGrid;