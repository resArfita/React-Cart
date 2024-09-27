import { useState } from "react"

const Counter = () => {

    const [quantity, setQuantity] = useState(1)

    return (
        <>
        <div className="m-10">
            <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : quantity} className="px-2.5 focus:ring-2">-</button>
            <span className="px-2">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-2 focus:ring-2">+</button>    
        </div>
        </>
    )
}

export default Counter