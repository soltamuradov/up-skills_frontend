import { QueryClient, QueryClientProvider } from "react-query";
import { AddQuestion } from "../features/AddQuestion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AddQuestion />
  </QueryClientProvider>
);

export default App;
