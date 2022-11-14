import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import arrow from "../../images/icons8-freccia.webp";
import homeIcon from "../../images/icons8-homepage.webp";
import { hoverArrow } from "../../utils/AnimeUtils";

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
    hoverArrow(arrowClass, hover);
  }, [hover]);

  return (
    <div
      className={hide ? "hide" : "arrow_container"}
      id={`${arrowClass}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          setHover(false);
        }, 1000);
      }}
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
      <div
        className={`icon_container`}
        onClick={() =>
          direction(mainClass, setMainClass, setProjectsClass, setContactsClass)
        }
      >
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
