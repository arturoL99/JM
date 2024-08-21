import Image from "next/image";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Project } from "../../types/Project";
import {
  moveProjects,
  moveProjectsArrow,
  moveProjectsContainer,
  moveTitle,
} from "../../utils/ProjectUtils";
import ProjectsContainer from "./ProjectsContainer";
import logo from "../../images/P360_Logo_Final_Black.png";
import { handleLogoClick } from "../../utils/MainUtils";

type Props = {
  projects: Project[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

const Projects: FC<Props> = ({ projects, active, setActive }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    moveProjectsContainer(active);
    if (active === "projects") {
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
    <section id="projects" className={`projects_container spacer`}>

      <div className="content_container">
        <div className={"projects_title"}>
          
          <h1 className="title">
            <span className="hideMobile">Evénements</span> <br />
            faits avec{" "}
            <span className="animate-charcter" onClick={() => setOpen(!open)}>
              AMOUR
            </span>
          </h1>
          <div className={"projects_logo"} onClick={() => handleLogoClick(setActive)}>
            <Image src={logo} className="home_icon" alt="icon" width={200} height={35} />
          </div>
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
