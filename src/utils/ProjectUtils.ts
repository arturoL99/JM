import anime from "animejs";
import { ContentfulImg } from "../types/ContentfulImg";
import { Project } from "../types/Project";

export const mapProjects = (contentfulProjects: any[]) => {
  if (contentfulProjects) {
    const projects: Project[] = [];
    const photos: ContentfulImg[] = [];
    contentfulProjects.map((contentfulProject) => {
      if (contentfulProject.fields.photos) {
        contentfulProject.fields.photos.map((photo: any) => {
          photos.push({
            url: photo.fields.file.url,
            height: photo.fields.file.details.image.height,
            width: photo.fields.file.details.image.width,
          });
        });
      }
      const project: Project = {
        name: contentfulProject.fields.name,
        image: {
          url: contentfulProject.fields.image.fields.file.url,
          height: contentfulProject.fields.image.fields.file.details.image.height,
          width: contentfulProject.fields.image.fields.file.details.image.width,
        },
        photos: photos || null,
        description: contentfulProject.fields.description || null,
      };
      projects.push(project);
    });
    return projects;
  } else {
    const projects: Project[] = [{
      name: "contentfulProject.fields.name",
      image: {
        url: "contentfulProject.fields.image.fields.file.url",
        height: 100,
        width: 100,
      },
      photos: [],
      description: "contentfulProject.fields.description",
    }];
    return projects;
  }
};

export const mapProject = (contentfulProject: any) => {
  if (contentfulProject) {
    const photos: ContentfulImg[] = [];
    contentfulProject.fields.photos.map((photo: any) => {
      photos.push({
        url: photo.fields.file.url,
        height: photo.fields.file.details.image.height,
        width: photo.fields.file.details.image.width,
      });
    });
    const project: Project = {
      name: contentfulProject.fields.name,
      image: {
        url: contentfulProject.fields.image.fields.file.url,
        height: contentfulProject.fields.image.fields.file.details.image.height,
        width: contentfulProject.fields.image.fields.file.details.image.width,
      },
      photos: photos,
      description: contentfulProject.fields.description,
    };
    return project;
  }
  else {
    const project: Project = {
      name: "contentfulProject.fields.name",
      image: {
        url: "contentfulProject.fields.image.fields.file.url",
        height: 100,
        width: 100,
      },
      photos: [],
      description: "contentfulProject.fields.description",
    };
    return project;
  }
};



export const moveTitle = (open: boolean) => {
  const top = open ? "13%" : "50%";
  const left = open ? "5%" : "50%";
  const width = open ? "90%" : "50%";
  const translateX = open ? "0%" : "-50%";
  const easin = open ? "easeOutQuart" : "easeInQuart";
  const animation = anime({
    targets: ".projects_title",
    top: top,
    left: left,
    width: width,
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

export const moveProjectsArrow = (open: boolean) => {
  const rotate = anime({
    targets: ".projects_arrow",
    rotate: open ? [90, 0] : [0, 90],
    duration: 1000,
    easing: "linear",
  });
  rotate.play();
};

export const moveProjectsContainer = (active: string) => {
  const top = active === "projects" ? "100vh" : "0";
  anime({
    targets: ".projects_container",
    translateY: top,
    duration: 1000,
    easing: "linear",
  });
};


export const mapHomePhotos = (contentfulHomePhotos: any[]) => {
  if (contentfulHomePhotos) {
    const photos: ContentfulImg[] = [];
    contentfulHomePhotos.map((photo: any) => {
      photos.push({
        url: photo.fields.file.url,
        height: photo.fields.file.details.image.height,
        width: photo.fields.file.details.image.width,
      });
    });
    return photos;
  }else return [];
}
