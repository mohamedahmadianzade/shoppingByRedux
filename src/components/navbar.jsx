import { useSelector } from "react-redux";

export default function Navbar(props) {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <span className="navbar-brand mb-0 h1">Simple Store By Redux</span>
            <span className="navbar-brand mb-0 h1"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
