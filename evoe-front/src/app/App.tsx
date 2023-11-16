import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainRoutes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
