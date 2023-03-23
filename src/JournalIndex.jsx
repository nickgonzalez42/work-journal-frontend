import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { useState } from "react";

export function JournalIndex(props) {
  let i = 1;
  return (
    <div>
      <h1>Recent Journals</h1>
      {props.skills.map((skill) => (
        <div key={skill.id}>
          <h2>{skill.name}</h2>
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
          <MDBAccordion alwaysOpen initialActive={0}>
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
                  {/* TODO, Fix this link */}
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
                  {`Demo: `}:{/* TODO, Fix this link */}
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
