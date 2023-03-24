import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useState } from "react";

export function JournalIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  // TODO Add deletion of skill

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
            placeholder="Search"
            aria-label="Search"
            type="text"
            value={searchFilter}
            onChange={(event) => {
              setSearchFilter(event.target.value);
            }}
            list="names"
          />
          <datalist id="names">
            {props.skills.map((skill) => (
              <option key={skill.id}>{skill.name}</option>
            ))}
          </datalist>
        </div>
      </div>
      <hr />
      {props.skills
        .slice(0)
        .filter((skill) => skill.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .reverse()
        .map((skill) => (
          // TODO Add two of each accordion to a row
          <div key={skill.id}>
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
              {/* TODO: Add an "updated" section */}
              {/* <small>Last updated: </small> */}
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
