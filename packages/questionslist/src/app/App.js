import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { QuestionsList } from "../widgets/QuestionsList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <QuestionsList />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
