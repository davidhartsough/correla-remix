import { prisma } from "~/db.server";
import type { Project } from "@prisma/client";
export type { Project } from "@prisma/client";

export async function getProjectById(id: string): Promise<Project | null> {
  const project: Project | null = await prisma.project.findUnique({
    where: { id },
  });
  return project;
}
