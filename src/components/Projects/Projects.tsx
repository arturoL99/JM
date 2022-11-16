import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Project } from "../../types/Project";
import { moveProjects, moveProjectsArrow, moveProjectsContainer, moveTitle } from "../../utils/ProjectUtils";
import ImagesContainer from "./ProjectsContainer";
import arrow from "../../images/icons8-freccia-sinistra.webp";

type Props = {
  projects: Project[];
  active:string;
};

const Projects: FC<Props> = ({ projects, active }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    moveProjectsArrow();
    // moveProjectsContainer(active);
  }, [active])

  useEffect(() => {
    moveTitle(open);
    moveProjects(open);
  }, [open])
  return (
    <section id="projects" className={`projects_container`}>
      <div className="content_container">
        <div className={"projects_title"}>
          <h1 className="title">
            I'm such an artist, <br />
            Look at my <span className="animate-charcter" onClick={() => setOpen(!open)}>stuff</span>
          </h1>
          <Image src={arrow} alt="arrow" width={30} height={30} className="projects_arrow" />
        </div>
        <div className={"projects"}>
            <ImagesContainer projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
