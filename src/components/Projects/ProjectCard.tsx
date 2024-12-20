import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types/Project";
import eye from "../../images/icons8-eye-50.png";

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = ({ project }) => {
  const [active, setActive] = useState(false);
  return (
    <Link
      href={`/${project.name.toLowerCase()}`}
      className="imgCard"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      key={project.name}
    >
      {/* <Image src={eye} alt="eye" width={50} height={50} loading="lazy" classN ame={active ? "imgCard_eye eye_open" : "imgCard_eye"} /> */}
      <Image
        src={`https:${project.image.url}`}
        alt={project.name}
        loading="lazy"
        className="project_img"
        width={project.image.width}
        height={project.image.height}
      />
      <div className={active ? "imgCard_text active" : "imgCard_text"}>
        <h3>{project.name}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
