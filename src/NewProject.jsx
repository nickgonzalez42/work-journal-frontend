import axios from "axios";

export function NewProject(props) {
  const handleCreateResource = (params) => {
    axios.post(`http://localhost:3000/projects.json`, params).then((response) => {
      // TODO Add Error/Success handling
      console.log(response.data);
      window.location.href = `/edit/${props.skill_id}`;
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
      <h3>Add Project</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectNameInput">Project Name</label>
          <input name="name" type="text" className="form-control" id="projectNameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescriptionInput">Description</label>
          <input name="description" type="text" className="form-control" id="projectDescriptionInput" />
        </div>
        <div className="form-group">
          <label htmlFor="projectURLInput">URL</label>
          <input name="url" type="text" className="form-control" id="projectURLInput" />
        </div>
        <div className="form-group">
          <label htmlFor="imageInput">Image</label>
          <input name="image_file" type="file" className="form-control" id="imageInput" />
        </div>
        <div className="form-group">
          <input type="hidden" name="skill_id" defaultValue={props.skill_id} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}