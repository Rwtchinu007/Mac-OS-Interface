import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => {
          return (
            <p className="tag" key={tag}>
              {tag}
            </p>
          );
        })}
      </div>
      <div className="urls">
        <a href={data.repoLink} target="_blank" rel="noreferrer">
          Repo
        </a>
        {data.demoLink && (
          <a href={data.demoLink} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Github = ({ windowName, windowsState, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
      width="52vw"
      height="58vh"
    >
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard key={project.id} data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
