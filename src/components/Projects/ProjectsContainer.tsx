import { FC } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types/Project";

type Props = {
  projects: Project[];
};

const ProjectsContainer: FC<Props> = ({ projects }) => {
  return (
    <div className="img_container">
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.name} />;
      })}
    </div>
  );
};

export default ProjectsContainer;
