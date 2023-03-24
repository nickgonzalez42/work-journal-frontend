import { useState, useEffect } from "react";
import axios from "axios";

export function SearchUsers() {
  const [users, setUsers] = useState();

  const handleIndexUsers = () => {
    axios.get(`http://localhost:3000/users.json`).then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);
}
