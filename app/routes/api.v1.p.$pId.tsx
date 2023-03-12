import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import { getProfileByUsername } from "~/models/user.server";

export async function loader({ params }: LoaderArgs) {
  invariant(params.pId, "Expected params.pId for profile username");
  const { pId } = params;
  if (!pId) return json({ message: "No id provided" }, 400);
  const profile = await getProfileByUsername(pId);
  if (profile) {
    return json({ profile }, 200);
  }
  return json({ message: "No profile found for that id" }, 404);
}
