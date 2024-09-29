import "../components/navbar.css"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import cartImage from "../assets/cart.png"

// eslint-disable-next-line react/prop-types
const NavBar = ({size}) => {
    return(
        <>
        <div className="header border-b-4 border-indigo-500 flex flex-row justify-between px-20 pt-3 bg-indigo-500 text-white">
            <div className="logo">
                <h1 className="heading">ResShop</h1>
            </div>
            <nav className="cart">
                <ul>
                    <li className="icon"><img src={cartImage} alt="" /></li>
                    <span>{size}</span>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar