import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      imageSource: "src/assets/image/shoes_1.jpg",
      productName: "productTest 1",
      productPrice: 100000,
      count: 0
    },
    {
      id: 2,
      imageSource: "src/assets/image/shoes_2.jpg",
      productName: "productTest 2",
      productPrice: 200000,
      count: 0
    },
    { id: 3,
      imageSource: "src/assets/image/shoes_3.jpg",
      productName: "productTest 3",
      productPrice: 300000,
      count: 0
    }
  ])

    const increaseOnClick = (id: any) => {
      const increaseCounter = data.map((count) => {
        if (count.id === id) {
          return { ...count, count: count.count + 1}
        }
        return count
      })

      setData(increaseCounter)
    }

        const decreaseOnClick = (id: any) => {
      const decreaseCounter = data.map((count) => {
        if (count.id === id) {
          return { ...count, count: count.count - 1}
        }
        return count
      })

      setData(decreaseCounter)
    }

    return (
      data.map(product => (
      <div className="productCard">
        <div className="imageContainer">
            <img src={product.imageSource} className="productImage" />
        </div>
        <h4>{product.productName}</h4>
        <h3>RP {product.productPrice}</h3>
        <div className="buyAmount">
            <button className="increaseButton" onClick={() => increaseOnClick(product.id)}>+</button>
                <p className= {"product"}>{product.count || 0}</p>
            <button className="decreaseProduct" onClick={() => decreaseOnClick(product.id)}>-</button>
        </div>
    </div>
      ))
    )
}

export default App
