import contentfulClient from "../src/client/ContentfulClient";
import { Project } from "../src/types/Project";
import { mapProject, mapProjects } from "../src/utils/ProjectUtils";
import Navbar from "../src/components/Navbar/Navbar";
import Photos from "../src/components/Photos/Photos";
import { ParallaxProvider } from "react-scroll-parallax";
import Title from "../src/components/Title/Title";
import { useEffect, useState } from "react";
import { handleResize } from "../src/utils/MobileUtils";

export async function getStaticPaths() {
  const contentfulProjects = await contentfulClient
    .getEntries({
      content_type: "project",
    })
    .then((res) => res.items);
  const projects = mapProjects(contentfulProjects);
  const paths = projects.map((project) => ({
    params: { name: project.name.toLocaleLowerCase() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const contentfulProject = await contentfulClient
    .getEntries({
      content_type: "project",
      "fields.name[match]": params.name,
    })
    .then((res) => res.items);
  const project = mapProject(contentfulProject[0]);
  return { props: { project } };
}

const ProjectPage = (props: { project: Project }) => {
  console.log(props.project);
  const [mobile, setMobile] = useState<boolean>();
  console.log(mobile);
  useEffect(() => {
    handleResize(setMobile);
}, []);
  return (
    <ParallaxProvider>
      <section className="project-page">
        <Navbar />
        <Title project={props.project} />
        <Photos photos={props.project.photos} mobile={mobile} />
      </section>
    </ParallaxProvider>
  );
};

export default ProjectPage;
