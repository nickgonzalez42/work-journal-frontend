import axios from "axios";

export function NewResource(props) {
  const handleCreateResource = (params) => {
    axios.post(`http://localhost:3000/resources.json`, params).then((response) => {
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
      <h3>Add Resource</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="resourceNameInput">Resource Name</label>
          <input name="name" type="text" className="form-control" id="resourceNameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="resourceDescriptionInput">Description</label>
          <input name="description" type="text" className="form-control" id="resourceDescriptionInput" />
        </div>
        <div className="form-group">
          <label htmlFor="resourceStartInput">Start Date</label>
          {/* TODO figure out how to turn type into date */}
          <input name="start" type="text" className="form-control" id="resourceStartInput" />
        </div>
        <div className="form-group">
          <label htmlFor="resourceEndInput">End Date</label>
          {/* TODO figure out how to turn type into date */}
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
