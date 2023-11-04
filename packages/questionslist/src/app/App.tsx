import { RecoilRoot } from "recoil";
import { QuestionsList } from "../widgets/QuestionsList";

const App = () => {
  return (
    <RecoilRoot>
        <QuestionsList />
    </RecoilRoot>
  );
};

export default App;
