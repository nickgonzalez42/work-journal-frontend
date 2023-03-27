import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NewResource } from "./NewResource";
import { NewProject } from "./NewProject";
import { ToastComponent } from "./ErrorToast";

export function EditSkill() {
  const [skill, setSkill] = useState({});
  const params = useParams();

  const handleShowSkill = () => {
    axios.get(`http://localhost:3000/skills/${params.id}.json`).then((response) => {
      setSkill(response.data);
    });
  };

  const handleUpdateInfo = (id, params, table) => {
    axios
      .patch(`http://localhost:3000/${table}/${id}.json`, params)
      .then((response) => {
        // TODO Add Error/Success handling
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          ".toast".toast("show");
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    const type = params.get("type");
    const id = params.get("id");
    handleUpdateInfo(id, params, type);
  };

  const handleDeleteSkill = () => {
    axios.delete(`http://localhost:3000/skills/${params.id}.json`).then((response) => {
      window.location.href = `/profile/${skill.user_id}`;
    });
  };

  const handleDeleteObject = (id, type) => {
    axios.delete(`http://localhost:3000/${type}s/${id}.json`).then((response) => {
      window.location.href = `/edit/${skill.id}`;
    });
  };

  useEffect(handleShowSkill, []);

  return (
    <div>
      <ToastComponent />
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <input type="hidden" name="id" defaultValue={skill.id} />
        </div>
        <div className="form-group">
          <input type="hidden" name="type" defaultValue="skills" />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
      {skill.resources?.map((resource) => (
        <form onSubmit={handleSubmit} key={resource.id}>
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
          <div className="form-group">
            <input type="hidden" name="id" defaultValue={resource.id} />
          </div>
          <div className="form-group">
            <input type="hidden" name="type" defaultValue="resources" />
          </div>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
          <button onClick={() => handleDeleteObject(resource.id, "resource")} type="button" className="btn btn-danger">
            Delete
          </button>
        </form>
      ))}
      <NewResource skill_id={skill.id} />
      {skill.projects?.map((project) => (
        <form onSubmit={handleSubmit} key={project.id}>
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
          <div className="form-group">
            <input type="hidden" name="id" defaultValue={project.id} />
          </div>
          <div className="form-group">
            <input type="hidden" name="type" defaultValue="projects" />
          </div>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
          <button onClick={() => handleDeleteObject(project.id, "project")} type="button" className="btn btn-danger">
            Delete
          </button>
        </form>
      ))}
      <NewProject skill_id={skill.id} />
      <p>Delete Journal?</p>
      <button onClick={handleDeleteSkill} type="submit" className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
