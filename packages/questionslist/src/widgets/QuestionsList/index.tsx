import { useRecoilValueLoadable } from "recoil";
import { format } from "date-fns";
import { selectorGetQuestions } from "./model/selectorGetQuestions";
import { IQuestion } from "shared";
import { Question } from "./ui/Question";

const mockData = [
  {
    _id: 1,
    title: "Что такое event loop?",
    answer:
      "Event loop следит за очередью событий и обрабатывает их по одному. Call stack - это стек вызовов, куда попадает код для выполнения. Microtasks и macrotasks - это две разные очереди задач, которые обрабатываются event loop. Microtasks включают в себя задачи, связанные с Promise, MutationObserver и queueMicrotask, которые обрабатываются сразу после текущего синхронного кода и между macrotasks. Macrotasks включают в себя задачи, связанные с setInterval, setTimeout, I/O операциями, UI рендерингом. Они обрабатываются после всех microtasks. Event loop сначала выполняет все задачи из call stack, затем переходит к microtasks. После того, как все microtasks выполнены, event loop переходит к macrotasks. После каждой выполненной macrotask, event loop проверяет, не появились ли новые microtasks, и если появились, то выполняет их перед следующей macrotask. Это гарантирует, что microtasks всегда будут иметь приоритет перед macrotasks.",
    createdAt: 1699102553699,
  },
];

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
      {mockData?.map(({ _id, title, answer, createdAt }) => (
        <Question
          key={_id}
          title={title}
          answer={answer}
          date={format(createdAt, "dd.MM.yyyy")}
        />
      ))}
    </div>
  );
};
