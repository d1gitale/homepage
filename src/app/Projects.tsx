import { ProjectCard } from "./ProjectCard";
import { projects } from "./projs";

export function Projects() {
    const cards = projects.map(proj => {
        return <ProjectCard key={proj.id} project={proj}></ProjectCard>
    })
    return (
        <div id="projects" className="flex justify-center w-[50vh] items-center text-2xl">
            <p className="justify-self-start">
                Projects
            </p>
            {cards}
        </div>
    );
}