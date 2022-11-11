import anime from "animejs";
import { FC, useEffect, useState } from "react";

const Test:FC = () => {
  const [wrapper, setWrapper] = useState<HTMLElement | null>();
  console.log(wrapper);
  useEffect(() => {
    setWrapper(document.getElementById("tiles"));
  });

  let columns = 0,
    rows = 0,
    toggled = false;

  const toggle = () => {
    toggled = !toggled;

    document.body.classList.toggle("toggled");
  };

  const handleOnClick = (index: number) => {
    toggle();
    anime({
      targets: [".tile", ".info"],
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  const createTile = (index: number) => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.style.opacity = toggled ? "0" : "1";

    tile.onclick = (e) => {
        handleOnClick(index);
    };

    return tile;
  };

  const createTiles = (quantity: number) => {
    if (wrapper)
      Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
  };

  const createGrid = () => {
    if (wrapper) {
      wrapper.innerHTML = "";

      const size = document.body.clientWidth > 800 ? 100 : 50;

      columns = Math.floor(document.body.clientWidth / size);
      rows = Math.floor(document.body.clientHeight / size);

      wrapper.style.setProperty("--columns", `${columns}`);
      wrapper.style.setProperty("--rows", `${rows}`);

      createTiles(columns * rows);
    }
  };

  useEffect(() => {
    createGrid();
    window.onresize = () => createGrid();
  });

  return <div id="tiles"></div>;
};

export default Test;
