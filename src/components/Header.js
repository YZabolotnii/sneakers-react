function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="headerRight d-flex align-center">
                <img  width={40} height={40} src="../img/logo.png" alt="" />
                <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин найкращих кросівок</p>
                </div>
            </div>
            <ul className="headerRight d-flex">
                <li className="mr-30">
                    <img  width={20} height={20} src="../img/card.svg" alt="" />
                    <span>1205 грн</span>
                </li>
                <li>
                    <img  width={20} height={20} src="../img/user.svg" alt="" />
                </li>
            </ul>
        </header>
    )
}

export default Header;