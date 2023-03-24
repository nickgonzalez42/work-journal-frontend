import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JournalIndex } from "./JournalIndex";

export function ProfileShow(props) {
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState([]);
  const params = useParams();

  const handleShowUser = () => {
    axios.get(`http://localhost:3000/users/${params.id}.json`).then((response) => {
      console.log(response.data);
      setUser(response.data);
      setSkills(response.data.skills);
    });
  };

  useEffect(handleShowUser, []);

  return (
    <div>
      {localStorage.user_id === params.id ? (
        <a href={`/new/${params.id}`}>
          <h3>New Journal</h3>
        </a>
      ) : (
        <></>
      )}
      <JournalIndex profileName={user.name} profile={true} skills={skills} />
    </div>
  );
}
