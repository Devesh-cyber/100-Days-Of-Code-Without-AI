import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import ProductGrid from './components/ProductGrid'

function App() {
  const [productList, setProductList] = useState([])

  const onAddProducts = (product) => {
    setProductList([...productList, product])
  }

  return (
    <>
      <Modal onAddProducts={onAddProducts}/>
      <ProductGrid products={productList}/>
    </>
  )
}

export default App;
