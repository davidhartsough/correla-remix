import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import ProfileIcon from "~/components/p/ProfileIcon";
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const id = await requireUserId(request);
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      saved: {
        select: {
          name: true,
          type: true,
          username: true,
        },
      },
    },
  });
  if (!user) return redirect("/logout");
  const { saved } = user;
  return json({ saved });
}

// TODO: Complete - style
export default function Saved() {
  const { saved } = useLoaderData<typeof loader>();
  return (
    <main>
      <header>
        <h1>Saved</h1>
      </header>
      <section>
        {saved.map((p) => (
          <div key={p.username}>
            <Link to={`/p/${p.username}`}>
              <ProfileIcon type={p.type!} />
              <p>{p.name}</p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
