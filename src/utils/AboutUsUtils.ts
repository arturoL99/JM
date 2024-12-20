import anime from "animejs";


export const moveAboutUsContainer = (active: string) => {
    const left = active === "aboutUs" ? "100vw" : "0";
    anime({
      targets: ".aboutUs_container",
      translateX: left,
      duration: 700,
      easing: "linear",
    });
  };