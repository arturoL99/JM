import { FC } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/Project";

type Props = {
  projects: Project[];
};

const ImagesContainer: FC<Props> = ({ projects }) => {
  return (
    <div className="img_container">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default ImagesContainer;
