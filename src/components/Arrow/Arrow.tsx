import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import arrow from "../../images/icons8-freccia.webp";
import homeIcon from "../../images/icons8-homepage.webp";
import { hideArrow, hoverArrow } from "../../utils/AnimeUtils";

type Props = {
  icon: StaticImageData;
  hide: boolean;
  mainClass: string;
  arrowClass: string;
  direction: (
    mainClass: string,
    setMainClass: Dispatch<SetStateAction<string>>,
    setProjectsClass: Dispatch<SetStateAction<string>>,
    setContactsClass: Dispatch<SetStateAction<string>>
  ) => void;
  setMainClass: Dispatch<SetStateAction<string>>;
  setProjectsClass: Dispatch<SetStateAction<string>>;
  setContactsClass: Dispatch<SetStateAction<string>>;
};

const Arrow: FC<Props> = ({
  icon,
  hide,
  mainClass,
  arrowClass,
  direction,
  setMainClass,
  setProjectsClass,
  setContactsClass,
}) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    hoverArrow(hover, hide, 40, 40, arrowClass);
  }, [hover]);

  useEffect(() => {
    hideArrow(hide, arrowClass);
  }, [hide]);
  return (
    <div
      className="arrow_container"
      id={`${arrowClass}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={arrow}
        alt="arrow"
        width={50}
        height={40}
        className={`${arrowClass}`}
        onClick={() =>
          direction(mainClass, setMainClass, setProjectsClass, setContactsClass)
        }
        loading="lazy"
      />
      <div className={hide ? `icon_container icon_hide` : `icon_container`}>
        {mainClass === "active" ? (
          <Image src={icon} alt="icon" width={30} height={30} />
        ) : (
          <Image src={homeIcon} alt="icon" width={30} height={30} />
        )}
      </div>
    </div>
  );
};

export default Arrow;
