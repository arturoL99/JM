import anime from "animejs";

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

const createTile = (index: number, columns: number, rows: number) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.opacity = toggled ? "0" : "1";

  tile.onclick = (e) => {
    handleOnClick(index, columns, rows);
  };
  return tile;
};

const createTiles = (
  wrapper: HTMLElement | null,
  quantity: number,
  columns: number,
  rows: number
) => {
  if (wrapper)
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index, columns, rows));
    });
};

export const createGrid = (wrapper: HTMLElement | null) => {
  if (wrapper) {
    wrapper.innerHTML = "";
    const size = document.body.clientWidth > 800 ? 100 : 50;
    const columns = Math.floor(document.body.clientWidth / size);
    const rows = Math.floor(document.body.clientHeight / size);

    wrapper.style.setProperty("--columns", `${columns}`);
    wrapper.style.setProperty("--rows", `${rows}`);
    console.log(columns, rows);
    const tiles = columns * rows;
    createTiles(wrapper, tiles, columns, rows);
  }
};
