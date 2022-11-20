import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { moveInfo } from "../../utils/MainUtils";
import Shapes from "../Shapes/Shapes";
import Tiles from "../Tiles/Tiles";
import info from "../../images/info.gif";

const Main: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(open);
    moveInfo(open);
    setOpen(!open);
  };

  return (
    <div className="main_container">
      <div className="info">
        <div className="info_title" onClick={handleClick}>
          <h1 className="title">Elias Merino</h1>
          <div className={open ? "hide" : "info_icon_container"}>
            <Image
            src={info}
            alt="info"
            height={50}
            width={50}
            loading="lazy"
            className="info_icon"
          />
          </div>
          
        </div>

        <p className="info_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          finibus gravida ex, sit amet finibus nulla tristique iaculis.{" "}
          <b>Curabitur nec pharetra enim</b>. Sed venenatis tellus non turpis
          tempor aliquet. Curabitur felis turpis, aliquet eget lacus a, lacinia
          semper mi. Cras a ipsum vel augue hendrerit molestie. Pellentesque
          molestie lacus erat. Curabitur id leo arcu. Sed non enim lobortis,
          sagittis leo id, vestibulum nunc. <b>Nulla imperdiet</b> neque a arcu
          ultricies tincidunt. Mauris quis nisl fringilla, aliquet lacus sed,
          fermentum ipsum. Praesent et arcu lorem.
        </p>
      </div>
      <Shapes />
      <Tiles />
    </div>
  );
};

export default Main;
