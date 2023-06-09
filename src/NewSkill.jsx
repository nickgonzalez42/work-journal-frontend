import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function NewSkill(props) {
  const [searchFilter, setSearchFilter] = useState("");

  const params = useParams();

  const handleCreateSkill = (params) => {
    axios.post(`http://localhost:3000/skills.json`, params).then((response) => {
      // TODO Add Error/Success handling
      console.log(response.data);
      window.location.href = `/edit/${response.data.id}`;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    handleCreateSkill(params);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="skillNameInput">Journal Name</label>
          <input
            className="form-control me-2"
            id="skillNameInput"
            name="name"
            aria-label="Search"
            type="text"
            value={searchFilter}
            onChange={(event) => {
              setSearchFilter(event.target.value);
            }}
            list="names"
          />
          <datalist className="dropdown-menu" id="names">
            {props.skills.map((skill) => (
              <option className="dropdown-item" key={skill.id}>
                {skill.name}
              </option>
            ))}
          </datalist>
        </div>
        <div className="form-group">
          <label htmlFor="skillDescriptionInput">Description</label>
          <input name="description" type="text" className="form-control" id="skillDescriptionInput" />
        </div>
        <div className="form-group">
          <label htmlFor="skillStartInput">Start Date</label>
          {/* TODO figure out how to turn type into date */}
          <input name="start" type="text" className="form-control" id="skillStartInput" />
        </div>
        <div className="form-group">
          <label htmlFor="skillEndInput">End Date</label>
          {/* TODO figure out how to turn type into date */}
          <input name="end" type="text" className="form-control" id="skillEndInput" />
        </div>
        <div className="form-group">
          <input type="hidden" name="user_id" defaultValue={params.id} />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
