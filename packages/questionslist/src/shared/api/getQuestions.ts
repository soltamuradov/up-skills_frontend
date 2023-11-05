import axios, { AxiosResponse } from 'axios';
import { IQuestion } from 'shared/lib';

type Response = IQuestion

export function getQuestionsListApi(): Promise<AxiosResponse<Response[]>> {
  return axios.get('http://localhost:4004/questions')
}