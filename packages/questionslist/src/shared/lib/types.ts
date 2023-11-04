export enum RequestState {
  PENDING = "pending",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type Error = {
  code: number;
  message: string;
} | null;