export function JournalIndex(props) {
  return (
    <div>
      <h1>Recent Journals</h1>
      {props.skills.map((skill) => (
        <div key={skill.id} className="container">
          <hr />
          <h2>{skill.name}</h2>
          <p>{skill.description}</p>
          <p>Start Date: {skill.start}</p>
          <p>End Date: {skill.end}</p>
          {skill.user ? (
            <a href={`/profile/${skill.user_id}`}>
              <h3>{skill.user}</h3>
            </a>
          ) : (
            <></>
          )}
          {localStorage.user_id === skill.user_id ? (
            <a href={`/edit/${skill.id}`}>
              <h3>Edit</h3>
            </a>
          ) : (
            <></>
          )}
          {skill.resources.map((resource) => (
            <div key={resource.id}>
              <h4>{resource.name}</h4>
              <p>{resource.description}</p>
              <p>Started: {resource.start}</p>
              <p>Ended: {resource.end}</p>
              <p>Source: {resource.url}</p>
            </div>
          ))}
          {skill.projects.map((project) => (
            <div key={project.id}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <p>{project.url}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
