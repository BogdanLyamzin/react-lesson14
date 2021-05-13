import {NavLink} from "react-router-dom";

import {items} from "./items";

import styles from "./NavbarNav.module.css";

const NavbarNav = ()=> {
    const menuElements = items.map(({id, to, text}) => {
        return (
            <li key={id}>
                <NavLink to={to} className={styles.link}>
                    {text}
                </NavLink>
            </li>
        )
    });

    return (
        <ul className={styles.nav}>
            {menuElements}
        </ul>
    )
}

export default NavbarNav;