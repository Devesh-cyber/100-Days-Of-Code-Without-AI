import { useState } from 'react'
import Modal from './components/Modal'
import ProductGrid from './components/ProductGrid'
import './App.css'

function App() {
  const [productList, setProductList] = useState([])
  const [counter, setCounter] = useState(0)
  const [addToCartModal, setAddToCartModal] = useState(false)

  const onAddProducts = (product) => {
    setProductList([...productList, product])
  }

  return (
    <>
      <Modal onAddProducts={onAddProducts} counter={counter} setCounter={setCounter} />
      <ProductGrid products={productList} addToCartModal={addToCartModal} setAddToCartModal={setAddToCartModal} setProductList={setProductList} />
    </>
  )
}

export default App;
