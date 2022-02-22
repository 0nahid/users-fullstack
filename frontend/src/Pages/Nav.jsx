import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="text-center">
      <nav className="d-flex justify-content-center">
        <Link className=" nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/users/">
          User
        </Link>
        <Link className=" nav-link" to="/users/addUser">
          Add
        </Link>
      </nav>
    </div>
  );
}
