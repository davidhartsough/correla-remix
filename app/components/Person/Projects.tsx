import type { PInfo } from "~/types";
import ProjectLink from "./ProjectLink";

export default function Projects({ projects }: { projects: PInfo[] }) {
  return (
    <div>
      {projects.map(({ username, name }) => (
        <ProjectLink key={username} path={username} name={name} />
      ))}
    </div>
  );
}
