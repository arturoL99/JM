import anime from "animejs";

export const moveInfo = (open: boolean) => {
  const animation = anime({
    targets: ".info_description",
    opacity: open ? 1 : 0,
    zIndex: open ? 90 : -10,
    duration: 1000,
    easing: "linear",
  });

  const aniTitle = anime({
    targets: [".info_title", "info_icon_container"],
    opacity: open ? 0 : 1,
    duration: 1000,
    easing: "linear",
  });

  animation.play();
  aniTitle.play();
};
