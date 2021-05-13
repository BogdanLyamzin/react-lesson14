import Logo from "../../../../shared/components/Logo"
import NavbarNav from "../NavbarNav";
// import Cart from "../../../Cart/components/Cart"

import styles from "./Navbar.module.css";

const Navbar = ()=>{
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Logo />
                    <NavbarNav />
                    {/* <Cart /> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;