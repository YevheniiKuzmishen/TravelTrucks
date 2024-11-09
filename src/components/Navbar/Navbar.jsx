import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">
          Travel<span className={styles.logoHighlight}>Trucks</span>
        </NavLink>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
