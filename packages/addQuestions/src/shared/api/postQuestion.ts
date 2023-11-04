import axios from "axios";

type Payload = {
  title: string;
  answer: string;
};

export const postQuestion = ({ title, answer }: Payload) => {
  return axios.post("http://localhost:4004/question", {
    title,
    answer,
  });
};
