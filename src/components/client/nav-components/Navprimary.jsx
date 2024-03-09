const Navprimary = () => {
    return (
        <div id="navbar__primary">
            <div className="logo">
                {/* <img src="/logo.png" alt="" /> */}
                <h3>
                    Easy-invet<span>.</span>
                </h3>
            </div>
            <div className="actions">
                <div className="search-bar">
                    <div className="input">
                        <input type="text" placeholder="Rechercher un produit..." />
                    </div>
                    <div className="search-icon">
                        <img src="/search.png" alt="" />
                    </div>
                </div>
                <div className="cart">
                    <div className="icon">
                        <img src="/shopping-cart.png" alt="" />
                    </div>
                    <div className="label">
                        <p>Panier</p>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="user">
                    <div className="icon">
                        <img src="/user.png" alt="" />
                    </div>
                    <div className="label">
                        <p>Sambatra</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navprimary;