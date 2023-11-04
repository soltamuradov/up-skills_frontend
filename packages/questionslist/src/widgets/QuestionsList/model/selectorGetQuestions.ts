import { selector } from "recoil";
import { getQuestionsListApi } from "shared";

export const selectorGetQuestions = selector({
  key: 'questions',
  get: async () => {
    try {
      const response = await getQuestionsListApi()

      return response.data;
    } catch (error) {
      throw error;
    }
  },
});