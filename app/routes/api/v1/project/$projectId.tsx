import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { Project } from "~/models/project.server";
import { getProjectById } from "~/models/project.server";

export async function loader({ params }: LoaderArgs) {
  invariant(params.projectId, "Expected params.projectId");
  const project: Project | null = await getProjectById(params.projectId);
  return json({ project }, 200);
}
