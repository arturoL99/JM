import { FC, useEffect, useState } from "react";
import { createGrid, handleOnClick } from "../../utils/TilesUtils";

const Test: FC = () => {
  const [wrapper, setWrapper] = useState<HTMLElement | null>();

  useEffect(() => {
    if (!wrapper) setWrapper(document.getElementById("tiles"));
  });

  useEffect(() => {
    if (wrapper) {
      createGrid(wrapper);
      setTimeout(() => {
        handleOnClick(50, 10, 10);
      }, 1000);
    }
  }, [wrapper]);

  return <div id="tiles"></div>;
};

export default Test;
