import Email from "./Email";
import Identity from "./Identity";
import Links from "./Links";

export default function ProfileLayout({
  name,
  identity,
  email,
  links,
  children,
}: {
  name: string;
  identity: string;
  email: string | null;
  links: string[];
  children: JSX.Element;
}) {
  return (
    <main>
      <header>
        <h1>{name}</h1>
      </header>
      <section>
        <Identity identity={identity} />
        <hr />
        {email && <Email email={email} />}
        <Links links={links} />
        <hr />
        {children}
      </section>
    </main>
  );
}
