import { Project } from "../types/Project";

export const mapProjects = (contentfulProjects:any[]) => {
    const projects:Project[] = [];
    contentfulProjects.map((contentfulProject) => {
        const project:Project = {
            image: {
                url: contentfulProject.fields.image.fields.file.url,
                height: contentfulProject.fields.image.fields.file.details.image.height,
                width: contentfulProject.fields.image.fields.file.details.image.width
            },
            name: contentfulProject.fields.name
        };
        projects.push(project);
    });
    return projects;
}