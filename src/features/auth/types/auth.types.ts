export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  phoneNumber: string;
  address: string;
  firstName?: string;
  lastName?: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface RecoverPasswordPayload {
  password: string;
  confirmPassword?: string;
}

export interface UserDef {
  id: number;
  username: string;
}

export interface LoginResponse {
  jwt: string;
  user: UserDef;
}
