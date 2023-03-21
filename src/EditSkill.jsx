import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditSkill() {
  const [skill, setSkill] = useState({});
  const params = useParams();

  const handleShowSkill = () => {
    axios.get(`http://localhost:3000/skills/${params.id}.json`).then((response) => {
      console.log(response.data);
      setSkill(response.data);
    });
  };

  const handleUpdateSkillInfo = (id, params) => {
    console.log(id);
    axios.patch(`http://localhost:3000/skills/${id}.json`, params).then((response) => {
      const updatedPost = response.data;
      setSkill(response.data);
    });
  };

  const handleSkillSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    handleUpdateSkillInfo(skill.id, params);
  };

  useEffect(handleShowSkill, []);

  return (
    <div>
      <form onSubmit={handleSkillSubmit}>
        <div className="form-group">
          <label htmlFor="skillNameInput">Journal Name</label>
          <input name="name" type="text" className="form-control" id="skillNameInput" defaultValue={skill.name} />
        </div>
        <div className="form-group">
          <label htmlFor="skillDescriptionInput">Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="skillDescriptionInput"
            defaultValue={skill.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="skillStartInput">Start Date</label>
          {/* TODO figure out how to turn type into date */}
          <input name="start" type="text" className="form-control" id="skillStartInput" defaultValue={skill.start} />
        </div>
        <div className="form-group">
          <label htmlFor="skillEndInput">End Date</label>
          {/* TODO figure out how to turn type into date */}
          <input name="end" type="text" className="form-control" id="skillEndInput" defaultValue={skill.end} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {skill.resources?.map((resource) => (
        <form key={resource.id}>
          <div className="form-group">
            <label htmlFor="resourceNameInput">Resource Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="resourceNameInput"
              defaultValue={resource.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resourceDescriptionInput">Description</label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="resourceDescriptionInput"
              defaultValue={resource.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resourceStartInput">Start Date</label>
            {/* TODO figure out how to turn type into date */}
            <input
              name="start"
              type="text"
              className="form-control"
              id="resourceStartInput"
              defaultValue={resource.start}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resourceEndInput">End Date</label>
            {/* TODO figure out how to turn type into date */}
            <input name="end" type="text" className="form-control" id="resourceEndInput" defaultValue={resource.end} />
          </div>
          <div className="form-group">
            <label htmlFor="resourceURLInput">URL</label>
            <input name="url" type="text" className="form-control" id="resourceURLInput" defaultValue={resource.url} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ))}
      {skill.projects?.map((project) => (
        <form key={project.id}>
          <div className="form-group">
            <label htmlFor="projectNameInput">Project Name</label>
            <input name="name" type="text" className="form-control" id="projectNameInput" defaultValue={project.name} />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescriptionInput">Description</label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="projectDescriptionInput"
              defaultValue={project.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectURLInput">URL</label>
            <input name="url" type="text" className="form-control" id="projectURLInput" defaultValue={project.url} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ))}
    </div>
  );
}
