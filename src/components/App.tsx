import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import About from "@/pages/about/About";
import avatarPng from "@/assets/avatar.png";
import Avatar from "@/assets/avatar.svg";

function aaa() {
  aa1();
}

function aa1() {
  throw new Error("aaaa");
}

export default function App() {
  aaa();
  return (
    <div className={styles.app}>
      <h2>PLATFORM={__PLATFORM___}</h2>
      asdasdsd
      <div>
        <img className={styles.img} src={avatarPng} />
        <Avatar color={"red"} className={styles.svg} />
      </div>
      <div className={styles.nav}>
        <Link to="/about">about</Link>
        <Link to="/shop">shop</Link>
      </div>
      <h3>Hello world</h3>
      <div className={styles.value}>value</div>
      <About />
      <Outlet />
    </div>
  );
}
