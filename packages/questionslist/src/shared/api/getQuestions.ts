import axios, { AxiosResponse } from 'axios';

type Response = {
  title: string;
  answer: string;
  createdAt: number;
}

export function getQuestionsListApi(): Promise<AxiosResponse<Response[]>> {
  return axios.get('http://localhost:4004/questions')
}