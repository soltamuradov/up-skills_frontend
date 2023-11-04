import { RecoilRoot } from "recoil";
import { QuestionsList } from "widgets";

const App = () => {
  return (
    <RecoilRoot>
        <QuestionsList />
    </RecoilRoot>
  );
};

export default App;
