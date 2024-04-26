export interface VerificationCode {
  code: string;
}

export interface ResponseData {
  code: number;
  message: string;
  data: VerificationCode;
}

export interface TokenData {
  refreshToken: string;
  token: string;
}

export interface LoginRes {
  code: number;
  data: TokenData;
  message: string;
}