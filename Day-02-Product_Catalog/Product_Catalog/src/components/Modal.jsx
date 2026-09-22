import { useState } from "react";

function Modal({ onAddProducts }) {
    const [IsActive, setIsActive] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        let form = event.target;
        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries());

        console.log(formDataObj);

        onAddProducts(formDataObj);
        setIsActive(false);
    };

    let content = (
        <div className="modal-overlay">
            <form className="modal" onSubmit={handleSubmit}>
                <div className="modal-header">
                    <h2>Add Product</h2>
                    <p>Enter the details of your product.</p>
                </div>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        name="product_name"
                        type="text"
                        placeholder="Enter product name..."
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        name="price"
                        type="number"
                        placeholder="Enter price..."
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select name="category">
                        <option value="">Select category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="food">Food</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter product description..."
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        name="image_url"
                        type="text"
                        placeholder="Enter image URL..."
                    />
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input
                        name="stock"
                        type="number"
                        placeholder="Enter stock..."
                    />
                </div>
                <button className="submit-product-btn" type="submit">
                    Add Product
                </button>
            </form>
        </div>
    )

    return (
        <>
        <header className="header">
            <div className="header-info">
                <h1 className="page-title"> Product Catalog </h1>
                <p className="page-subtitle">
                    Manage Your Products
                </p>
            </div>

            <button className='add-product-btn' 
            onClick={() => setIsActive(true)}> ADD CART </button>
        </header>
        {IsActive ? (content) : (null)}
        </>
    )
}

export default Modal;