import { FC, useEffect, useState } from "react";
import { Project } from "../../types/Project";
import ImagesContainer from "./ProjectsContainer";

type Props = {
  projects: Project[];
  projectsClass:string;
};

const Projects: FC<Props> = ({ projects, projectsClass }) => {
  const [open, setOpen] = useState(false);
  return (
    <section id="projects" className={`${projectsClass} projects_container`}>
      <div className="content_container">
        <div className={open ? "projects_title rise" : "projects_title"}>
          <h1 className="title">
            I'm such an artist, <br />
            Look at my <span className="animate-charcter" onClick={() => setOpen(!open)}>stuff</span>
          </h1>
        </div>
        <div className={open ? "projects projects_open" : "projects"}>
            <ImagesContainer projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
