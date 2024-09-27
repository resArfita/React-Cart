const NavBar = () => {
    return(
        <>
        <div className="header border-b-4 border-indigo-500 flex flex-row justify-between p-5 bg-indigo-500 text-white">
            <div className="logo">
                <h1>ResArft</h1>
            </div>
            <nav>
                <ul>
                    <li className="">Cart (supposed to be icon)</li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar