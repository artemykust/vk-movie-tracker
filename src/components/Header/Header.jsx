import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <span className={styles.logo}>VK Кино Cправочник</span>
        </Link>
      </div>
    </header>
  );
}
