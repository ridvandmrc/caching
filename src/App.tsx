import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Input from "./comments/Input";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchIntervalInBackground: false,
        cacheTime: 10_000,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Input />
    </QueryClientProvider>
  );
};

export default App;
