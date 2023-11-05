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

export type IQuestion = {
  _id: string;
  title: string;
  answer: string;
  createdAt: number;
}