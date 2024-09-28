import "../components/navbar.css"

// eslint-disable-next-line react/prop-types
const NavBar = ({size}) => {
    return(
        <>
        <div className="header border-b-4 border-indigo-500 flex flex-row justify-between p-5 bg-indigo-500 text-white">
            <div className="logo">
                <h1>ResArft</h1>
            </div>
            <nav className="cart">
                <ul>
                    <li className="">Cart</li>
                    <span>{size}</span>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar