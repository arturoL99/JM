import { FC } from "react";

type Props = {
    projects:string
};

const Projects:FC<Props> = ({projects}) => {
    return(
        <section id="projects" className={`${projects} projects_container`}>
            <h1 className="title">Look at my stuff, <br/>I'm such an <b>ARTIST</b></h1>
        </section>
    )
};

export default Projects;