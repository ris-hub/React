import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
// Composing Comopnentss
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("Food Villa");
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          :
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </div>
  );
};
export default Header;