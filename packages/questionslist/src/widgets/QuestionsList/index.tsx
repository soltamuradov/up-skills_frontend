import { useRecoilValueLoadable } from "recoil";
import { format } from "date-fns";
import { selectorGetQuestions } from "./model/selectorGetQuestions";
import { IQuestion } from "shared";
import { Question } from "./ui/Question";

export const QuestionsList = () => {
  const { contents, state } =
    useRecoilValueLoadable<IQuestion[]>(selectorGetQuestions);

  if (state === "loading") {
    return "Loading...";
  }
  if (state === "hasError") {
    return "Error...";
  }

  return (
    <div className="p-2">
      {contents?.map(({ _id, title, answer, createdAt }) => (
        <Question key={_id} title={title} answer={answer} date={format(createdAt, 'dd.MM.yyyy')} />
      ))}
    </div>
  );
};
