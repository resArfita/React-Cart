import Counter from "./Counter"
//import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
const CartItem = ({ gambar, harga, counterKurang, counterTambah, price }) => {

    return (
        <>
        <div className="border-2 border-violet-500 m-10 grid grid-cols-4">
            <img src={gambar} alt="" width={70} className="m-5" />
            <p className="m-10">$<span className="font-normal">{harga}</span></p>
            <Counter
             counterKurang={counterKurang} 
             counterTambah={counterTambah}
             price={price}
             />
            
        </div>
        </>
    )
}

export default CartItem