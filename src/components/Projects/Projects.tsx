import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Project } from "../../types/Project";
import {
  moveProjects,
  moveProjectsArrow,
  moveProjectsContainer,
  moveTitle,
} from "../../utils/ProjectUtils";
import ProjectsContainer from "./ProjectsContainer";
import arrow from "../../images/arrow.gif";

type Props = {
  projects: Project[];
  active: string;
};

const Projects: FC<Props> = ({ projects, active }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    moveProjectsContainer(active);
    if(active === "projects"){
      setTimeout(() => {
      setOpen(true);
    }, 2000);
    }
  }, [active]);

  useEffect(() => {
    moveTitle(open);
    moveProjects(open);
    moveProjectsArrow(open);
  }, [open]);

  return (
    <section id="projects" className={`projects_container`}>
      <div className="content_container">
        <div className={"projects_title"}>
          <h1 className="title">
            <span className="hideMobile">Evénements</span> <br />
            faits avec{" "}
            <span className="animate-charcter" onClick={() => setOpen(!open)}>
              AMOUR
            </span>
          </h1>
          {/* <Image
            src={arrow}
            alt="arrow"
            width={30}
            height={30}
            className="projects_arrow"
          /> */}
        </div>
        <div className={"projects"}>
          <ProjectsContainer projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
