import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NewResource } from "./NewResource";
import { NewProject } from "./NewProject";

export function EditSkill() {
  const [showErrorMessage, setShowErrorMessage] = useState({ table: "", show: false });
  const [showSuccessMessage, setShowSuccessMessage] = useState({ table: "", show: false });
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
        setShowSuccessMessage({ table: table, show: true });
      })
      .catch(function (error) {
        if (error.response) {
          setShowErrorMessage({ table: table, show: true });
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
    axios
      .delete(`http://localhost:3000/skills/${params.id}.json`)
      .then((response) => {
        window.location.href = `/profile/${skill.user_id}`;
      })
      .catch(function (error) {
        setShowErrorMessage({ table: "skills", show: true });
      });
  };

  const handleDeleteObject = (id, type) => {
    axios
      .delete(`http://localhost:3000/${type}s/${id}.json`)
      .then((response) => {
        window.location.href = `/edit/${skill.id}`;
      })
      .catch(function (error) {
        setShowErrorMessage({ table: type + "s", show: true });
        console.log(type + "s");
        console.log("running");
        console.log(showErrorMessage);
      });
  };

  useEffect(handleShowSkill, []);

  return (
    <div>
      {showErrorMessage.show && showErrorMessage.table === "skills" ? (
        <div style={{ marginTop: 1 }} className="alert alert-danger fixed" role="alert">
          Please login to continue.
        </div>
      ) : (
        <></>
      )}
      {showSuccessMessage.show && showSuccessMessage.table === "skills" ? (
        <div style={{ marginTop: 1 }} className="alert alert-success fixed" role="alert">
          Update successful.
        </div>
      ) : (
        <></>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="skillNameInput">Journal Name</label>
          <input name="name" type="text" className="form-control" id="skillNameInput" defaultValue={skill.name} />
        </div>

        <div className="form-group">
          <label htmlFor="skillDescriptionInput">Description</label>
          <textarea
            name="description"
            rows="5"
            type="text"
            className="form-control"
            id="skillDescriptionInput"
            defaultValue={skill.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="skillStartInput">Start Date</label>
          <input name="start" type="text" className="form-control" id="skillStartInput" defaultValue={skill.start} />
        </div>
        <div className="form-group">
          <label htmlFor="skillEndInput">End Date</label>
          <input name="end" type="text" className="form-control" id="skillEndInput" defaultValue={skill.end} />
        </div>
        <div className="form-group">
          <input type="hidden" name="id" defaultValue={skill.id} />
        </div>
        <div className="form-group">
          <input type="hidden" name="type" defaultValue="skills" />
        </div>
        <button style={{ marginTop: 10 }} type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
      {showErrorMessage.show && showErrorMessage.table === "resources" ? (
        <div style={{ marginTop: 1 }} className="alert alert-danger fixed" role="alert">
          Please login to continue.
        </div>
      ) : (
        <></>
      )}
      {showSuccessMessage.show && showSuccessMessage.table === "resources" ? (
        <div style={{ marginTop: 1 }} className="alert alert-success fixed" role="alert">
          Update successful.
        </div>
      ) : (
        <></>
      )}
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
            <textarea
              name="description"
              type="text"
              rows="5"
              className="form-control"
              id="resourceDescriptionInput"
              defaultValue={resource.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resourceStartInput">Start Date</label>
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
          <button style={{ marginTop: 10, marginRight: 5, marginBottom: 10 }} type="submit" className="btn btn-primary">
            Edit
          </button>
          <button
            style={{ marginTop: 10, marginBottom: 10 }}
            onClick={() => handleDeleteObject(resource.id, "resource")}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </form>
      ))}

      {showErrorMessage.show && showErrorMessage.table === "projects" ? (
        <div style={{ marginTop: 1 }} className="alert alert-danger fixed" role="alert">
          Please login to continue.
        </div>
      ) : (
        <></>
      )}
      {showSuccessMessage.show && showSuccessMessage.table === "projects" ? (
        <div style={{ marginTop: 1 }} className="alert alert-success fixed" role="alert">
          Update successful.
        </div>
      ) : (
        <></>
      )}
      {skill.projects?.map((project) => (
        <form onSubmit={handleSubmit} key={project.id}>
          <div className="form-group">
            <label htmlFor="projectNameInput">Project Name</label>
            <input name="name" type="text" className="form-control" id="projectNameInput" defaultValue={project.name} />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescriptionInput">Description</label>
            <textarea
              name="description"
              type="text"
              className="form-control"
              id="projectDescriptionInput"
              rows="5"
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
          <button style={{ marginTop: 10, marginRight: 5, marginBottom: 10 }} type="submit" className="btn btn-primary">
            Edit
          </button>
          <button
            style={{ marginTop: 10, marginBottom: 10 }}
            onClick={() => handleDeleteObject(project.id, "project")}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </form>
      ))}
      <NewResource skill_id={skill.id} />
      <NewProject skill_id={skill.id} />
      <div style={{ marginBottom: 30, marginTop: 30 }} className="row">
        <p className="col-sm-2">Delete Journal?</p>
        <button onClick={handleDeleteSkill} type="submit" className="col-sm-1 btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
