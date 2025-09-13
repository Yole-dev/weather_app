import logo from "../assets/images/logo.svg";
import UnitsDropdown from "./UnitsDropdown";

function Header() {
  return (
    <header className=" w-full flex justify-between items-center ">
      <img src={logo} alt="App Logo" />
      <UnitsDropdown />
    </header>
  );
}

export default Header;
