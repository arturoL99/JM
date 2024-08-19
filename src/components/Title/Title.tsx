import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FC } from "react";
import { Parallax } from "react-scroll-parallax";
import { Project } from "../../types/Project";
import Image from "next/image";
import scroll from "../../images/icons8-scroll.webp";
import circle from "../../images/P360_Logo_Circle Low_Black.png";

type Props = {
  project: Project;
};

const Title: FC<Props> = ({ project }) => {
  return (
    <div id="title_container">
      <Parallax speed={-21} className="text_container">
        <h1 className="title">{project.name}</h1>
        <div className="description">
          {documentToReactComponents(project.description)}
        </div>
      </Parallax>
      <a href="#photos_container" className="scroll_icon">
        <Image
          src={scroll}
          alt="scroll icon"
          width={50}
          height={50}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Title;
