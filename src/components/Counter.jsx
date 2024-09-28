/* eslint-disable react/prop-types */
import { useState } from "react"

const Counter = ({ counterKurang, counterTambah }) => {

    //state untuk kuantitas didalam list
    const [quantityList, setQuantityList] = useState(1)

    const kurangList = () => {
        quantityList > 1 ? setQuantityList(quantityList - 1) : quantityList
      }
    
    const tambahList = () => {
        setQuantityList(quantityList + 1)
    }

    return (
        <>
        <div className="m-10">
            <button onClick={() => {counterKurang(); kurangList()}} className="px-2.5 focus:ring-2">-</button>
            <span className="px-2">{quantityList}</span>
            <button onClick={() => {counterTambah(); tambahList()}} className="px-2 focus:ring-2">+</button>    
        </div>
        </>
    )
}

export default Counter