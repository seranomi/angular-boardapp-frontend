import { UserRole } from "./user-role.enum";


export interface SignUpRequest {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
    role: UserRole;
}