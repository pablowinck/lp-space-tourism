import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="scroll-smooth">
        <Layout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
