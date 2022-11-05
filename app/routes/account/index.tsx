import type { LoaderArgs } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/node";

import { getUser } from "~/session.server";
import type { User } from "~/models/user.server";

export async function loader({ request }: LoaderArgs) {
  const user: User | null = await getUser(request);
  if (!user) return redirect("/account/login");
  return json({ user });
}

// if !user redirect to login

export default function Account() {
  return (
    <main>
      <header>
        <h1>Account</h1>
      </header>
      <section>
        <h2>Profile</h2>
        <p>little edit button</p>
        <p>[profile]</p>
        <h2>Projects</h2>
        <p>little edit button</p>
        <p>[projects]</p>
        <hr />
        <p>sign out button</p>
      </section>
    </main>
  );
}
