import anime from "animejs";
import { Project } from "../types/Project";

export const mapProjects = (contentfulProjects: any[]) => {
  const projects: Project[] = [];
  contentfulProjects.map((contentfulProject) => {
    const project: Project = {
      image: {
        url: contentfulProject.fields.image.fields.file.url,
        height: contentfulProject.fields.image.fields.file.details.image.height,
        width: contentfulProject.fields.image.fields.file.details.image.width,
      },
      name: contentfulProject.fields.name,
    };
    projects.push(project);
  });
  return projects;
};

export const moveTitle = (open: boolean) => {
  const top = open ? "13%" : "50%";
  const left = open ? "5%" : "50%";
  const translateX = open ? "0%" : "-50%";
  const easin = open ? "easeOutQuart" : "easeInQuart";
  const animation = anime({
    targets: ".projects_title",
    top: top,
    left: left,
    translateX: translateX,
    translateY: "-50%",
    duration: 1000,
    easing: easin,
  });
  animation.play();
};

export const moveProjects = (open: boolean) => {
  const top = "60%";
  const left = open ? "50%" : "150%";
  const opacity = open ? 1 : 0;
  const animation = anime({
    targets: ".projects",
    top: top,
    left: left,
    opacity: opacity,
    duration: 1500,
    easing: "easeOutQuart",
  });
  animation.play();
};

export const moveProjectsArrow = (open:boolean) => {
  const rotate = anime({
    targets: ".projects_arrow",
    rotate: open ? [90 , 0] : [0, 90],
    duration: 1000,
    easing: "linear",
  });
  rotate.play();
};

export const moveProjectsContainer = (active:string) => {
  const top= active === "projects" ? "100vh" : "0";
  anime({
    targets: ".projects_container",
    translateY: top,
    duration: 1000,
    easing: "linear",
  });
};