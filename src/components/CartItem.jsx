import Counter from "./Counter"

// eslint-disable-next-line react/prop-types
const CartItem = ({gambar, harga}) => {

    return (
        <>
        <div className="border-2 border-violet-500 m-10 grid grid-cols-3">
            <img src={gambar} alt="" width={70} className="m-5" />
            <p className="m-10">{harga}</p>
            <Counter />
        </div>
        </>
    )
}

export default CartItem