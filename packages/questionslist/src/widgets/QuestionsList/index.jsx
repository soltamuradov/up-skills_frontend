import { useQuery } from "react-query";
import { getQuestionsListApi } from "../../shared/api/getQuestions";

export const QuestionsList = () => {
  const query = useQuery("questions", getQuestionsListApi);

  return <div>1111</div>;
};
