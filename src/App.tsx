import { useState } from 'react'
import './App.css'
import Header from './components/Header'

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

    const totalPrice = () => {
      return data.reduce((sum, item) => {
        const count = Number(item.count) || 0
        const price = Number(item.productPrice) || 0
        return sum + count *  price
      }, 0)
    }

    const totalProduct = () => {
      return data.reduce((sum, item) => {
        const count = Number(item.count) || 0
        return sum + count
      }, 0)
    }

    return (
      <div>
        <Header />

        <div className='cardArea'>
        {data.map(product => (
          <div className={`productCard ${product.count > 0 ? "added": ""}`}>
            <div className="imageContainer">
              <img src={product.imageSource} className="productImage" />
            </div>
              <h4>{product.productName}</h4>
              <h3>RP {product.productPrice}</h3>
            <div className="buyAmount">
              <button className="increaseButton" onClick={() => increaseOnClick(product.id)}>+</button>
                  <p className= {"product"}>{product.count || 0}</p>
              <button className={product.count >0 ? " decreaseButton": "hide"} onClick={() => decreaseOnClick(product.id)}>-</button>
            </div>
          </div>
        ))}
      </div>

      <div className={`cart ${totalPrice() === 0 ? "hide": ""}`}>
        <h2>Total price: {totalPrice()}</h2>
        <h2>Total product: {totalProduct()}</h2>
      </div>
    </div>
    )
}

export default App
