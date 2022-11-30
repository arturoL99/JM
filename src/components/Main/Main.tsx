import Image from "next/image";
import { FC, useState } from "react";
import { moveInfo } from "../../utils/MainUtils";
import Shapes from "../Shapes/Shapes";
import Tiles from "../Tiles/Tiles";
import logo from "../../images/Logo_White.png";

const Main: FC = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    console.log(open);
    moveInfo(open);
    setOpen(!open);
  };

  return (
    <div className="main_container">
      <div className="info">
        <div className="info_title" onClick={handleClick}>
          
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
      <Shapes />
      <Tiles />
    </div>
  );
};

export default Main;
