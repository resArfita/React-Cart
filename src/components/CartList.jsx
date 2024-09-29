/* eslint-disable react/prop-types */
import DataItems from "./DataItems"
//import { useState } from "react"

const CartList = ({ counterKurang, counterTambah }) => {
    //supposed to get quantity from CartItem/DataItems

    return (
        <>
        <div className="">
            <div className="grid grid-cols-4 ml-20 pt-5">
                <p className="underline decoration-violet-800">Item</p>
                <p className="underline decoration-violet-800">Harga</p>
                <p className="underline decoration-violet-800">Kuantitas</p>
                <p className="underline decoration-violet-800">Total Harga</p>
            </div>
            <DataItems counterKurang={counterKurang} counterTambah={counterTambah} />
        </div>
        
        </>
    )
}

export default CartList