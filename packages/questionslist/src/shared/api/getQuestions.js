import axios from 'axios';

export function getQuestionsListApi() {
  return axios.get('http://localhost:4004/questions')
}