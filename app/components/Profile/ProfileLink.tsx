import { Link } from "@remix-run/react";

type ProfileType = "p" | "project";

export default function ProfileLink({
  type,
  path,
  name,
}: {
  type: ProfileType;
  path: string;
  name: string;
}) {
  return (
    <p>
      <Link to={`/${type}/${path}`}>{name}</Link>
    </p>
  );
}
