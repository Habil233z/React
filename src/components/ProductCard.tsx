type productCard = {
    source: string
    name: string
    price: number
    id: number
    hideReduce: boolean
    counter: number
    increaseOnClick: () => void
    decreaseOnClick: () => void
}

function ProductCard({source, name, price, id, hideReduce, counter, increaseOnClick, decreaseOnClick}: productCard) {

    return <div className="productCard">
        <div className="imageContainer">
            <img src={source} className="productImage" />
        </div>
        <h4>{name}</h4>
        <h3>RP {price}</h3>
        <div className="buyAmount">
            <button className="increaseButton" onClick={increaseOnClick}>+</button>
                <p className= {"product" + id}>{counter}</p>
            <button className={hideReduce ? "hide" : "decraseButton" } onClick={decreaseOnClick}>-</button>
        </div>
    </div>
}

export default ProductCard