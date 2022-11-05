import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <header>
        <h1>Correla</h1>
      </header>
      <section>
        <p>
          <Link to="/explore">Explore</Link>
          <Link to="/account">Account</Link>
        </p>
      </section>
    </main>
  );
}
