import anime from "animejs";

export const hoverArrow = (
  hover: boolean,
  hide: boolean,
  top: number | undefined,
  bottom: number | undefined,
  arrowClass: string
) => {
  switch (arrowClass) {
    case "arrow_up":
      if (hover && !hide) {
        anime({
          targets: `#${arrowClass} .icon_container`,
          opacity: 1,
          top: top,
          scale: 1,
          duration: 500,
          easing: "easeInOutExpo",
          elasticity: 400,
        });
        anime({
          targets: `.${arrowClass}`,
          scale: 1.2,
          duration: 500,
          easing: "easeInOutExpo",
        });
      } else {
        anime({
          targets: `#${arrowClass}  .icon_container`,
          top: 0,
          opacity: 0,
          scale: 0.8,
          duration: 500,
          easing: "easeInOutQuad",
          elasticity: 400,
        });
        anime({
          targets: `.${arrowClass}`,
          scale: 1,
          duration: 500,
          easing: "easeInOutExpo",
        });
      }
      break;

    case "arrow_down":
      if (hover && !hide) {
        anime({
          targets: `#${arrowClass} .icon_container`,
          opacity: 1,
          bottom: bottom,
          scale: 1,
          duration: 200,
          easing: "easeInOutExpo",
          elasticity: 500,
        });
        anime({
          targets: `.${arrowClass}`,
          scale: 1.2,
          duration: 500,
          easing: "easeInOutExpo",
        });
      } else {
        anime({
          targets: `#${arrowClass} .icon_container`,
          bottom: 0,
          opacity: 0,
          scale: 0.8,
          duration: 500,
          easing: "easeInOutQuad",
          elasticity: 400,
        });
        anime({
          targets: `.${arrowClass}`,
          scale: 1,
          rotateX: 180,
          duration: 500,
          easing: "easeInOutExpo",
        });
      }
      break;
  }
};

export const hideArrow = (hide: boolean, arrowClass: string) => {
  if (hide) {
    anime({
      targets: `#${arrowClass}`,
      opacity:0,
      duration: 200,
      easing: "easeInOutExpo",
    });
  } else{
    anime({
        targets: `#${arrowClass}`,
        opacity:1,
        duration: 200,
        easing: "easeInOutExpo",
      });
  }
};
