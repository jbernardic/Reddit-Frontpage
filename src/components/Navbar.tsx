import styles from './styles/Navbar.module.css';
import {ReactComponent as LogoIcon} from './vectors/logo-icon.svg';
import {ReactComponent as LogoText} from './vectors/logo-text.svg';

const Navbar = () =>{
    return(
        <header>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="./#">
                        <LogoIcon/>
                        <LogoText/>
                    </a>
                </div>
                <div className={styles.searchBar}>
                    <i className="fas fa-search"></i>
                    <input placeholder="Search"></input>
                </div>
                <div className={styles.options}>
                    <div className={styles.loginOptions}>
                        <a href="./#" className={styles.loginButton}>Log in</a>
                        <a href="./#" className={styles.signupButton}>Sign up</a>
                    </div>
                    <button className={styles.userDropdown}>
                        <i className="fas fa-user"></i>
                        <i className="fas fa-caret-down"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;