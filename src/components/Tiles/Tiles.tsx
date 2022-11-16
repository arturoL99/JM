import anime from "animejs";
import { FC, useEffect, useState } from "react";
import { createGrid, handleOnClick } from "../../utils/TilesUtils";

const Test: FC = () => {
  const [wrapper, setWrapper] = useState<HTMLElement | null>();
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);

  useEffect(() => {
    if (!wrapper) setWrapper(document.getElementById("tiles"));
  });

  useEffect(() => {
    if (wrapper) {
      createGrid(wrapper, columns, rows, setColumns, setRows);
      setTimeout(() => {
        handleOnClick(50, columns, rows);
      }, 1000);
    }
  }, [wrapper]);

  return <div id="tiles"></div>;
};

export default Test;
