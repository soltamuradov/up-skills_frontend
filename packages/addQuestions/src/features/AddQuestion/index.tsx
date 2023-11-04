import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";
import { postQuestion } from "../../shared/api/postQuestion";

type Question = {
  title: string;
  answer: string;
};

export const AddQuestion = () => {
  const mutation = useMutation({
    mutationFn: ({ title, answer }: Question) => {
      return postQuestion({ title, answer });
    },
  });

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleChangeAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const submit = () => {
    if (question && answer) {
      mutation.mutate({ title: question, answer });
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChangeQuestion} />
      <textarea onChange={handleChangeAnswer} />
      <button onClick={submit}>Add Question</button>
    </div>
  );
};
