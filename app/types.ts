export type PType = "PERSON" | "PROJECT";

export interface ProfileInfo {
  id: string;
  email: string;
  username: string;
  type: PType;
  name: string;
  identity: string;

  linkUrls: string[];
  linkTitles: string[];
}
