import type { ProfileInfo } from "~/types";
import ProfileLayout from "../Profile";
import Projects from "./Projects";

export default function PersonPage({
  person,
  projects,
}: {
  person: ProfileInfo;
  projects: ProfileInfo[];
}) {
  const { name, identity, email, links } = person;
  return (
    <ProfileLayout name={name} identity={identity} email={email} links={links}>
      <Projects projects={projects} />
    </ProfileLayout>
  );
}
