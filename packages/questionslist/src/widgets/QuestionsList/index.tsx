import { useRecoilValue } from "recoil";
import { selectorGetQuestions } from "./model/selectorGetQuestions";

export const QuestionsList = () => {
  const questions = useRecoilValue(selectorGetQuestions);
  return (
    <div className="bg-black-2">
      <ul>{questions.map(el => (
        <li>
          <span className="text-white">{el.title}</span>
          <span>{el.answer}</span>
          <span>{el.createdAt}</span>
        </li>
      ))}</ul>
    </div>
  );
};
