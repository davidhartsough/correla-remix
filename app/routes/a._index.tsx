import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { requireUser } from "~/session.server";
import { Link, useLoaderData } from "@remix-run/react";
import ProfileIcon from "~/components/p/ProfileIcon";

export async function loader({ request }: LoaderArgs) {
  const user = await requireUser(request);
  return json({ ...user });
}

// TODO: style and icons
export default function Account() {
  const { email, username, name, type } = useLoaderData<typeof loader>();
  return (
    <main>
      <header>
        <h1>Account</h1>
      </header>
      <section>
        <div>
          <ProfileIcon type={type!} />
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{username}</p>
        </div>
        <Link to={`/p/${username}`}>[eye icon] View Profile</Link>
        <Link to="/a/edit">[pencil icon] Edit Profile</Link>
        <Link to="/saved">[bookmark icon] Saved Profiles</Link>
        <hr />
        <Link to="/logout">Logout</Link>
      </section>
    </main>
  );
}
