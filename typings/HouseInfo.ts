export interface UserData {
  code: number;
  data: UserDataDetails;
  message: string;
}

export interface UserDataDetails {
  building: string;
  gender: number;
  id: string;
  idcardBackUrl: string;
  idcardFrontUrl: string;
  mobile: string;
  name: string;
  point: string;
  room: string;
  status: number;
}
