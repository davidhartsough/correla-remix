import ProfileLink from "../Profile/ProfileLink";

export default function ProjectLink({
  path,
  name,
}: {
  path: string;
  name: string;
}) {
  return <ProfileLink type="project" path={path} name={name} />;
}
