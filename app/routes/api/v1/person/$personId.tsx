import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { Person } from "~/models/person.server";
import { getPersonById } from "~/models/person.server";

export async function loader({ params }: LoaderArgs) {
  invariant(params.personId, "Expected params.personId");
  const person: Person | null = await getPersonById(params.personId);
  return json({ person }, 200);
}
