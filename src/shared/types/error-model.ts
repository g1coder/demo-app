export type ErrorModel = {
  code?: number;
  message: string;
  errors?: Record<string, string>;
};
