import ProfileLink from "../Profile/ProfileLink";

export default function PersonLink({
  path,
  name,
}: {
  path: string;
  name: string;
}) {
  return <ProfileLink type="p" path={path} name={name} />;
}
