import { Text, Title } from "shared";

type Props = {
  title: string;
  answer: string;
  date: string;
};
export const Question = ({ title, answer, date }: Props) => {
  return (
    <div className="max-w-2xl p-4 bg-black-2 text-white border-spacing-1 rounded-3xl">
      <div className="flex justify-between items-center">
      <Title>{title}</Title>
      <div className="text-end">{date}</div>
      </div>
      <Text className="mt-4 mb-4 text-justify">{answer}</Text>
    </div>
  );
};
