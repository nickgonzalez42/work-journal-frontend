import axios from "axios";
import { useState } from "react";

export function NewResource(props) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleCreateResource = (params) => {
    axios
      .post(`http://localhost:3000/resources.json`, params)
      .then((response) => {
        // TODO Add Error/Success handling
        console.log(response.data);
        window.location.href = `/edit/${props.skill_id}`;
      })
      .catch(function (error) {
        if (error.response) {
          setShowErrorMessage(true);
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    handleCreateResource(params);
  };

  return (
    <div>
      {showErrorMessage ? (
        <div className="alert alert-danger fixed" role="alert">
          Please login to continue.
        </div>
      ) : (
        <></>
      )}
      <h3>Add Resource</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="resourceNameInput">Resource Name</label>
          <input name="name" type="text" className="form-control" id="resourceNameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="resourceDescriptionInput">Description</label>
          <textarea rows="5" name="description" type="text" className="form-control" id="resourceDescriptionInput" />
        </div>
        <div className="form-group">
          <label htmlFor="resourceStartInput">Start Date</label>
          <input name="start" type="text" className="form-control" id="resourceStartInput" />
        </div>
        <div className="form-group">
          <label htmlFor="resourceEndInput">End Date</label>
          <input name="end" type="text" className="form-control" id="resourceEndInput" />
        </div>
        <div className="form-group">
          <label htmlFor="resourceURLInput">URL</label>
          <input name="url" type="text" className="form-control" id="resourceURLInput" />
        </div>
        <div className="form-group">
          <label htmlFor="imageInput">Image</label>
          <input name="image_file" type="file" className="form-control" id="imageInput" />
        </div>
        <div className="form-group">
          <input type="hidden" name="skill_id" defaultValue={props.skill_id} />
        </div>
        <button style={{ marginTop: 10 }} type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
