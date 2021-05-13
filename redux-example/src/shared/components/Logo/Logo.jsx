import {Link} from "react-router-dom";

import styles from "./Logo.module.css";

const Logo = ()=>{
    return (
        <Link className={styles.logo} to="/">
            Site logo
        </Link>
    )
}

export default Logo;