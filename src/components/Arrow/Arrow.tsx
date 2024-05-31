import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import arrow from "../../images/icons8-freccia.webp";
import homeIcon from "../../images/icons8-homepage.webp";
import { hoverArrow } from "../../utils/AnimeUtils";

type Props = {
  icon: StaticImageData;
  hide: boolean;
  active:string;
  setActive: Dispatch<SetStateAction<string>>;
  arrowClass: string;
  direction: (
    active:string, setActive:Dispatch<SetStateAction<string>>
  ) => void;
};

//posizione icon determinata da icon_container --> aggiungere modo di differenzziare left right (usare prop direction?)--> top 0 piu o meno da provare transform -50%...

const Arrow: FC<Props> = ({
  icon,
  hide,
  arrowClass,
  direction,
  active,
  setActive
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
        }, 500);
      }}
    >
      <Image
        src={arrow}
        alt="arrow"
        width={50}
        height={40}
        className={`${arrowClass}`}
        onClick={() =>
          direction(active, setActive)
        }
        loading="lazy"
      />
      <div
        className={`icon_container`}
        onClick={() =>
          direction(active, setActive)
        }
      >
        {active === "main" ? (
          <Image src={icon} alt="icon" width={30} height={30} />
        ) : (
          <Image src={homeIcon} alt="icon" width={30} height={30} />
        )}
      </div>
    </div>
  );
};

export default Arrow;
