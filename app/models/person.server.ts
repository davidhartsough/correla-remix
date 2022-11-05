import { prisma } from "~/db.server";
import type { Person } from "@prisma/client";
export type { Person } from "@prisma/client";

export async function getPersonById(id: string): Promise<Person | null> {
  const person: Person | null = await prisma.person.findUnique({
    where: { id },
  });
  return person;
}
