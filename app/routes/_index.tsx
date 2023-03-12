import { Link } from "@remix-run/react";

// TODO: Complete - style
export default function Index() {
  return (
    <main>
      <header>
        <h1>Correla</h1>
      </header>
      <section>
        <p>
          <Link to="/explore">Explore</Link>
          <Link to="/a">Account</Link>
        </p>
      </section>
    </main>
  );
}
