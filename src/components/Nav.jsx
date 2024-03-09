import clientNavHelper from "../helpers/data/clietNav.helper";
import Navprimary from "./client/nav-components/Navprimary";

const Nav = () => {
    const { menuItems } = clientNavHelper()
    return (
        <nav id="navbar">
            {/* navbar primaire */}
            <Navprimary />

            {/* navbar secondaire */}
            <div id="navbar__secondary">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}><img src={item.icon && item.icon} alt="" /> {item.label}</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;