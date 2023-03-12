import type { LoaderArgs } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { prisma } from "~/db.server";
import { getProfileByUsername } from "~/models/user.server";
import { getUserId } from "~/session.server";
import Identity from "~/components/p/Identity";
import Links from "~/components/p/Links";
import ProfileIcon from "~/components/p/ProfileIcon";

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.pId, "Expected params.pId");
  const { pId } = params;
  if (!pId) return redirect("/");
  const p = await getProfileByUsername(pId);
  if (!p) return redirect("/");
  const userId = await getUserId(request);
  const isLoggedIn = !!userId;
  const isUser = p.id === userId;
  let isSaved = false;
  if (userId && !isUser) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        saved: {
          where: { id: p.id },
          select: { id: true },
        },
      },
    });
    if (user && user.saved.length === 1 && user.saved[0].id === p.id) {
      isSaved = true;
    }
  }
  return json({ p, isLoggedIn, isUser, isSaved });
}

// TODO: action POST for "saving" this profile

// TODO: Complete - style
export default function ProfileRoute() {
  const { p, isLoggedIn, isUser, isSaved } = useLoaderData<typeof loader>();
  const { name, type, identity, linkUrls, linkTitles } = p;
  const links = linkTitles.map((title, i) => ({ title, url: linkUrls[i] }));
  return (
    <main>
      <header>
        <ProfileIcon type={type!} />
        <h1>{name}</h1>
      </header>
      <section>
        <Identity identity={identity!} />
        <hr />
        <Links links={links} />
        {isLoggedIn && (
          <div>
            {isUser ? (
              <Link to="/a/edit">Edit</Link>
            ) : (
              <button>{isSaved ? "Saved" : "Save"}</button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
