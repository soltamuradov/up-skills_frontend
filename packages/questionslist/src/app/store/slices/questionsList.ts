import { atom } from "recoil";

type DefaultState = {
  title: string;
  answer: string;
  createAt: number;
}

export const QuestionsState = atom<DefaultState[]>({
  key: 'react',
  default: [],
});