export interface BasicInfo {
  name: string;
  identity: string;
  email: string | null;
  links: string[];
}

export interface ProfileInfo extends BasicInfo {
  id: string;
  username: string;
  userId: string;
}
