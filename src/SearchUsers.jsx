import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function SearchUsers() {
  const [users, setUsers] = useState();
  const params = useParams();
  const searchTerms = params.terms;

  const handleIndexUsers = () => {
    axios.get(`http://localhost:3000/users.json`).then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  return (
    <div>
      <h2>{`Search results for "${searchTerms}"`}</h2>
      <ul className="list-group">
        {users
          ?.filter((user) => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
          .map((user) => (
            <a key={user.id} href={`/profile/${user.id}`} class="list-group-item list-group-item-action">
              <h4>{user.name}</h4>
            </a>
            // </li>
          ))}
      </ul>
      <ul></ul>
    </div>
  );
}
