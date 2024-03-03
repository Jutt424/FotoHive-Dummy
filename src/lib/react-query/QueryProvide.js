import { jsx as _jsx } from "react/jsx-runtime";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
export const QueryProvider = ({ children }) => {
    return (_jsx(QueryClientProvider, { client: queryClient, children: children }));
};
