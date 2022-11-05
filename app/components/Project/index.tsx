import type { ProfileInfo } from "~/types";
import ProfileLayout from "../Profile";
import Team from "./Team";

export default function ProjectPage({
  project,
  team,
}: {
  project: ProfileInfo;
  team: ProfileInfo[];
}) {
  const { name, identity, email, links } = project;
  return (
    <ProfileLayout name={name} identity={identity} email={email} links={links}>
      <Team people={team} />
    </ProfileLayout>
  );
}
