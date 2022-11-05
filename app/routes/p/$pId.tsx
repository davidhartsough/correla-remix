import type { LoaderArgs } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Person } from "~/models/person.server";
import { getPersonById } from "~/models/person.server";
import PersonPage from "~/components/Person";

export async function loader({ params }: LoaderArgs) {
  invariant(params.pId, "Expected params.pId");
  const { pId } = params;
  if (!pId) return redirect("/");
  const person: Person | null = await getPersonById(pId);
  if (!person) return redirect("/");
  return json({ person });
}

type LoaderData = { person: Person };

export default function PersonRoute() {
  const { person } = useLoaderData<LoaderData>();
  return <PersonPage person={person} projects={[]} />;
}
