export interface ILoginRequest {
  username: string;
  password: string;
}

// For response

export interface ILoginResponse {
  message: string;
  statusCode: number;
  service: string;
  data: ILoginData
}
export interface ILoginData {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_in_unix: number;
  user: ILoginUser
}
export interface ILoginUser {
  id: string;
  email: string;
  name: string;
  type: string | null;
  company_name: string;
  document_type: string | null;
  company_id: string;
  roles: ILoginRole;
}
export interface ILoginRole {
  id: string;
  name: string;
  description: string;
  permission: ILoginPermission[];
}
export interface ILoginPermission {
  id: string;
  name: string;
  description: string;
  parent: string;
}