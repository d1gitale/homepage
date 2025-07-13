import Image from "next/image";

type CardProps = {
    project: {
        id: number,
        name: string,
        thumbnail: string,
        thumbnail_w: number,
        thumbnail_h: number,
        description: string,
        stack: string[],
        link: string
    }
}

export function ProjectCard({ project }: CardProps) {
    const techs = project.stack.map((tech, index) => {
        return (
            <p key={index}>
                {tech}
            </p>
        );
    });

    return (
        <div>
            <Image src={project.thumbnail} alt={project.name} width={project.thumbnail_w} height={project.thumbnail_h}></Image>
            <div>
                <p>{project.name}</p>
                <p>{project.description}</p>
                {techs}
            </div>
        </div>
    );
}