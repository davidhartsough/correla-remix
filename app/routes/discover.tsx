import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
import ProfileIcon from "~/components/p/ProfileIcon";

// TODO: Complete - paginated query for profiles
export async function loader({ request }: LoaderArgs) {
  const query = new URL(request.url).searchParams;
  const name = query.get("name");
  const identity = query.get("identity");
  if (!name && !identity) return redirect("/explore");
  const where: any = {};
  if (name) {
    where.name = { contains: name, mode: "insensitive" };
  }
  if (identity) {
    const identities = identity.includes(",")
      ? identity
          .split(",")
          .map((i) => i.trim().toLowerCase())
          .join(" & ")
      : identity.trim().toLowerCase();
    where.identity = {
      search: identities,
      mode: "insensitive",
    };
  }
  /*
    skip: 1, // Skip the cursor
    cursor: { id: myCursor },
    */
  const profiles = await prisma.user.findMany({
    take: 25,
    where,
    select: {
      id: true,
      name: true,
      username: true,
      type: true,
      identity: true,
    },
    orderBy: { id: "asc" },
  });
  return json({ profiles });
}

// TODO: Complete - style
export default function DiscoverRoute() {
  const { profiles } = useLoaderData<typeof loader>();
  return (
    <main>
      <header>
        <h1>Discover</h1>
      </header>
      <section>
        {profiles.map((p) => (
          <div key={p.id}>
            <Link to={`/p/${p.username}`}>
              <ProfileIcon type={p.type!} />
              <p>{p.name}</p>
              <p>{p.identity}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
