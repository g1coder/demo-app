interface ICredential {
  refreshToken: string;
  accessToken: string;
  expiresAt: number;
}

export default ICredential;
