import { useState } from "react";

type AmountButton = {
    increaseOnclick: () => void
    decreaseOnClick: () => void
    productAmount: string
    amount: string
}


function Button({increaseOnclick, decreaseOnClick, productAmount, amount}: AmountButton) {
    return (
        <div className="buyAmount">
            <button onClick={increaseOnclick}>-</button>
                <p className= {"product" + `${productAmount}`}>{amount}</p>
            <button onClick={decreaseOnClick}>+</button>
        </div>
    )
}

export default Button