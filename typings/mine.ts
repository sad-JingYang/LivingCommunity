export interface UserData {
  avatar: string | null;
  id: string;
  nickName: string | null;
}

export interface ResponseData {
  code: number;
  data: UserData;
  message: string;
}