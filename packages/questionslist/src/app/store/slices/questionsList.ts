import { atom } from "recoil";
import { Error, RequestState } from "shared";

type DefaultState = {
  questions: {
    title: string;
    answer: string;
    createAt: number;
  }[];
  loading: RequestState;
  error: Error;
};

export const QuestionsState = atom<DefaultState>({
  key: "react",
  default: {
    questions: [],
    loading: RequestState.PENDING,
    error: null,
  },
});
