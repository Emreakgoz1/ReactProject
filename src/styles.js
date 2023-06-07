import logo from "./logo.svg";
import Test from "./test";
import { Title } from "./components";
import Boostrap from "./boostrap";
import Tailwind from "./tailwind";

import "./tailwind.css";
import styles from "./App.module.css";

function Styles() {
  <div className={styles.App}>
    <Title>{process.env.NODE_ENV}</Title>
    <Title theme="dark">{process.env.NODE_ENV}</Title>
    <p className="env">
      {process.env.REACT_APP_API_URL}
      <span>test</span>
    </p>
    <Test />
    {process.env.NODE_ENV === "production" && (
      <>
        <img src="/logo192.png" alt="" />
        <img src={logo} alt="" />
      </>
    )}
    <Boostrap />
    <Tailwind />
  </div>;
}

export default Styles;
