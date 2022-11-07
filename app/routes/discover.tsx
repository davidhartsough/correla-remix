import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  return json({});
}

export default function DiscoverRoute() {
  return (
    <main>
      <header>
        <h1>Discover</h1>
      </header>
      <section></section>
    </main>
  );
}
