import anime from "animejs";
import { Dispatch, SetStateAction } from "react";

let toggled = true;

const toggle = () => {
  toggled = !toggled;

  document.body.classList.toggle("toggled");
};

export const handleOnClick = (index: number, columns: number, rows: number) => {
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

const createTile = (index: number, columns: number,
    rows: number,) => {
  const tile = document.createElement("div");

  tile.classList.add("tile");

  tile.style.opacity = toggled ? "0" : "1";

  tile.onclick = (e) => {
    handleOnClick(index, columns, rows);
  };

  return tile;
};

const createTiles = (wrapper: HTMLElement | null, quantity: number, columns: number,
    rows: number,) => {
  if (wrapper)
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index, columns, rows));
    });
};

export const createGrid = (
  wrapper: HTMLElement | null,
  columns: number,
  rows: number,
  setColumns: Dispatch<SetStateAction<number>>,
  setRows: Dispatch<SetStateAction<number>>
) => {
  if (wrapper) {
    wrapper.innerHTML = "";
    const size = document.body.clientWidth > 800 ? 100 : 50;
    setColumns(Math.floor(document.body.clientWidth / size));
    setRows(Math.floor(document.body.clientHeight / size));
    if (columns != 0 && rows != 0) {
      // PROBLEMA --> quando crea grid considera ancora valori 0
      wrapper.style.setProperty("--columns", `${columns}`); //al primo load = 0
      wrapper.style.setProperty("--rows", `${rows}`); //al primo load = 0
    } else {
      wrapper.style.setProperty("--columns", `${10}`); //al primo load = 0
      wrapper.style.setProperty("--rows", `${10}`);
    }
    console.log(columns, rows);
    const tiles = columns * rows;
    createTiles(wrapper, tiles, columns, rows );
  }
};
