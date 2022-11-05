import type { PInfo } from "~/types";
import PersonLink from "./PersonLink";

export default function Team({ people }: { people: PInfo[] }) {
  return (
    <div>
      {people.map(({ username, name }) => (
        <PersonLink key={username} path={username} name={name} />
      ))}
    </div>
  );
}
