/* eslint-disable react/prop-types */
import DataItems from "./DataItems"
//import { useState } from "react"

const CartList = ({ counterKurang, counterTambah }) => {
    //supposed to get quantity from CartItem/DataItems

    return (
        <>
        <div className="">
            <div className="grid grid-cols-4 ml-20 pt-5">
                <p>Item</p>
                <p>Harga</p>
                <p>Kuantitas</p>
                <p>Total</p>
            </div>
            <DataItems counterKurang={counterKurang} counterTambah={counterTambah} />
        </div>
        
        </>
    )
}

export default CartList