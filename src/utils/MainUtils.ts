import anime from "animejs";

export const moveInfo = (open:boolean) => {
    const animation = anime({
      targets: ".info_description",
      opacity: open ? [1, 0] : [0, 1],
      zIndex: open ? -10 : 95,
      duration: 1000,
      easing: "linear",
    });

    const aniTitle = anime({
        targets: ".info_title",
        top: open ? ["30%", "50%"] : ["50%", "30%"],
        translateY: "-50%",
        right: "50%",
        translateX: ["50%", "50%"], //TODO risolvere bg title quando open
        duration: 1000,
        easing: "linear",
      });

      animation.play();
      aniTitle.play();
  };