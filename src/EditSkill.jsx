import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JournalIndex } from "./JournalIndex";

export function EditSkill() {
  const [skill, setSkill] = useState({});
  const params = useParams();

  const handleShowUser = () => {
    axios.get(`http://localhost:3000/skills/${params.id}.json`).then((response) => {
      console.log(response.data);
      setSkill(response.data);
    });
  };

  useEffect(handleShowUser, []);

  return (
    <form>
      <div className="form-group">
        <label for="skillNameInput">Journal Name</label>
        <input name="name" type="text" className="form-control" id="skillNameInput" defaultValue={skill.name} />
      </div>
      <div className="form-group">
        <label for="skillDescriptionInput">Description</label>
        <input
          name="description"
          type="text"
          className="form-control"
          id="skillDescriptionInput"
          defaultValue={skill.description}
        />
      </div>
      <div className="form-group">
        <label for="skillStartInput">Start Date</label>
        {/* TODO figure out how to turn type into date */}
        <input name="start" type="text" className="form-control" id="skillStartInput" defaultValue={skill.start} />
      </div>
      <div className="form-group">
        <label for="skillEndInput">End Date</label>
        {/* TODO figure out how to turn type into date */}
        <input name="end" type="text" className="form-control" id="skillEndInput" defaultValue={skill.end} />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
