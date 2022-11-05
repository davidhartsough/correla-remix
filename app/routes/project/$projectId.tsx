import type { LoaderArgs } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Project } from "~/models/project.server";
import { getProjectById } from "~/models/project.server";
import ProjectPage from "~/components/Project";

export async function loader({ params }: LoaderArgs) {
  invariant(params.projectId, "Expected params.projectId");
  const { projectId } = params;
  if (!projectId) return redirect("/");
  const project: Project | null = await getProjectById(projectId);
  if (!project) return redirect("/");
  return json({ project });
}

type LoaderData = { project: Project };

export default function ProjectRoute() {
  const { project } = useLoaderData<LoaderData>();
  return <ProjectPage project={project} team={[]} />;
}
