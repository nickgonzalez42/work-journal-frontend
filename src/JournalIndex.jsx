import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useState } from "react";

export function JournalIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  // TODO Add deletion of skill
  let listLength = 0;
  if (props.profile) {
    listLength = props.skills.length;
  } else {
    listLength = 10;
  }

  const compareUpdatedInfo = (skill) => {
    let updates = [];
    updates.push(skill.updated_at);
    skill.resources.map((resource) => {
      updates.push(resource.updated_at);
    });
    skill.projects.map((project) => {
      updates.push(project.updated_at);
    });
    updates.sort().reverse();
    return `${updates[0].slice(5, 7)}/${updates[0].slice(8, 10)}/${updates[0].slice(0, 4)} at ${updates[0].slice(
      11,
      19
    )}`;
  };

  let i = 1;
  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          {props.profile ? <h2>{props.profileName}'s Recent Journals</h2> : <h2>Recently Updated Journals</h2>}
        </div>
        <div className="col-sm-4">
          <input
            className="form-control me-2"
            placeholder="Search Posts"
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
      </div>
      {props.skills
        .slice(0)
        .filter((skill) => skill.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .sort((a, b) => compareUpdatedInfo(a) < compareUpdatedInfo(b))
        .slice(0, listLength)
        .map((skill) => (
          // TODO Add two of each accordion to a row
          <div key={skill.id}>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <h3>{skill.name}</h3>
                </div>
                {skill.user ? (
                  <div className="col-sm">
                    <a href={`/profile/${skill.user_id}`}>
                      <h3>{skill.user}</h3>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {localStorage.user_id === skill.user_id ? (
                  <div className="col-sm-1">
                    <a href={`/edit/${skill.id}`}>
                      <h3>Edit</h3>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <small>Last updated: {compareUpdatedInfo(skill)}</small>
            </div>
            <MDBAccordion style={{ paddingBottom: 2 + "em" }} alwaysOpen initialActive={0}>
              <MDBAccordionItem collapseId={1} headerTitle="Details">
                <p>{skill.description}</p>
                <p>Start Date: {skill.start}</p>
                <p>End Date: {skill.end}</p>
              </MDBAccordionItem>
              {skill.resources.map((resource) => (
                <MDBAccordionItem key={resource.id} collapseId={1} headerTitle={`Resource: ${resource.name}`}>
                  <p>{`Description: ${resource.description}`}</p>
                  <p>Started: {`Start Date: ${resource.start}`}</p>
                  <p>Ended: {`End Date: ${resource.end}`}</p>
                  <p>
                    {`Source: `}
                    <a rel="noopener noreferrer" target="_blank" href={resource.url}>
                      {resource.url}
                    </a>
                  </p>
                  <img height="300" src={resource.image} />
                </MDBAccordionItem>
              ))}
              {skill.projects.map((project) => (
                <MDBAccordionItem key={project.id} collapseId={1} headerTitle={`Project: ${project.name}`}>
                  <p>{`Description: ${project.description}`}</p>
                  <p>
                    {`Demo: `}:
                    <a rel="noopener noreferrer" target="_blank" href={project.url}>
                      {project.url}
                    </a>
                  </p>
                  <img height="300" src={project.image} />
                </MDBAccordionItem>
              ))}
            </MDBAccordion>
          </div>
        ))}
    </div>
  );
}
