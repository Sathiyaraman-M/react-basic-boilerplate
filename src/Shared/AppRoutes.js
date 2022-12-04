import Index from "../Pages/Index";
import Counter from "../Pages/Counter";
import FetchData from "../Pages/FetchData";

export const AppRoutes = [
    {
        index: true,
        path: '/',
        element: <Index />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    }
]