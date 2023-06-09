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
      setUser(response.data);
      setSkills(response.data.skills);
    });
  };

  useEffect(handleShowUser, []);

  return (
    <div>
      <JournalIndex profileName={user.name} profile={true} skills={skills} />
    </div>
  );
}
