import type { PType } from "~/types";

// Person (person icon, circle with shoulders)
// Project (box icon, cube)
export default function ProfileIcon({ type }: { type: PType }) {
  return <div>{type}</div>;
}
