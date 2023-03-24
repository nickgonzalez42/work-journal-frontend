import axios from "axios";

export function Logout() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    window.location.href = "/";
  };

  return (
    <a className="text-light nav-link active" href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
