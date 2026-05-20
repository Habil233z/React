import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
    const [hideReduce, setHideReduce] = useState(true)

    const [counter, setCounter] = useState(0)

    const increaseOnclick = () => setCounter(counter + 1 )
    const decreaseOnclick = () => setCounter(counter - 1 )

  const data = [
    {
      id: 1,
      imageSource: "src/assets/image/shoes_1.jpg",
      productName: "productTest 1",
      productPrice: 100000
    },
    {
      id: 2,
      imageSource: "src/assets/image/shoes_2.jpg",
      productName: "productTest 2",
      productPrice: 200000
    },
    { id: 3,
      imageSource: "src/assets/image/shoes_3.jpg",
      productName: "productTest 3",
      productPrice: 300000
    }
  ]

  return (
    <div className=''>
      <div className='cardArea'>
        {data.map(product => <ProductCard 
          source={product.imageSource}
          name={product.productName}
          price={product.productPrice}
          increaseOnClick={increaseOnclick} decreaseOnClick={decreaseOnclick}
          hideReduce={counter > 0 ? (false) : (true)} id={product.id} counter={counter}/>)}
      </div>
    </div>
  )
}

export default App
