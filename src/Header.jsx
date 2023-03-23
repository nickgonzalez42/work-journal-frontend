import { Link } from "react-router-dom";
import { Logout } from "./Logout";
import { ProfileButton } from "./ProfileButton";
import { NewJournalButton } from "./NewJournalButton";

export function Header() {
  let authenticationLinks;

  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <Link className="nav-link active" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/signup">
            Signup
          </Link>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <ProfileButton id={localStorage.user_id} />
        </li>
        <li className="nav-item">
          <NewJournalButton id={localStorage.user_id} />
        </li>
        <li className="nav-item">
          <Logout />
        </li>
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Journaler
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{authenticationLinks}</ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
