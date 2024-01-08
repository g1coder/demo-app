export type {IUser} from "./IUser"
export type {IUserRaw} from "./IUserRaw"

export interface ICredential {
    refreshToken: string;
    accessToken: string;
    expiresAt: number;
}
