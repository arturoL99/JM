import Image from "next/image";
import { FC, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Shapes from "../Shapes/Shapes";
import Tiles from "../Tiles/Tiles";
import logo from "../../images/Logo_White.png";
import { ContentfulImg } from "../../types/ContentfulImg";
import { moveInfo } from "../../utils/MainUtils";

type Props = {
  photos: ContentfulImg[];
};

const Main: FC<Props> = ({ photos }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    moveInfo(open);
    setOpen(!open);
  };

  return (
    <div className="main_container">
      <div className="info">
        <div className="info_title">
          <Image
            src={logo}
            alt="info"
            height={60}
            width={400}
            loading="lazy"
            className="logo"
          />
        </div>
      </div>
      {/* <div className="info_description" onClick={handleClick}>
        {documentToReactComponents(description.description)}
      </div> */}
      <Shapes photos={photos}/>
      <Tiles />
    </div>
  );
};

export default Main;
