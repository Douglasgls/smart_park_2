import { createHashRouter } from "react-router-dom";
import { Applayout } from "./components/layouts/AppLayout";


import Dashboard from "./pages/Dashboard";
import Devices from "./pages/devices/Devices";

export const router = createHashRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "clients",
                element: <Dashboard />,
            },  
            {
                path: "devices",
                element: <Devices />,
            },
            {
                path: "parking-space",
                element: <Dashboard />,
            },
        ],
    },
])
