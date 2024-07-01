import { createHashRouter, RouterProvider } from "react-router-dom";
import Test from "./pages/Test";
import Vessel from "./pages/main icons/Vessel";
import Fuel from "./pages/main icons/Fuel";
import Power from "./pages/main icons/Power";
import Anemometer from "./pages/main icons/Anemometer";
import GPS from "./pages/main icons/GPS";
import Engine from "./pages/main icons/Engine";
import Compass from "./pages/main icons/Compass";
import Alarm from "./pages/main icons/Alarm";
import Radar from "./pages/main icons/Radar";
import Speed from "./pages/main icons/Speed";
import ECDIS from "./pages/main icons/ECDIS";
import Rudder from "./pages/main icons/Rudder";
import Echo from "./pages/main icons/Echo";
import Speedometer from "./pages/Tester";
import RPMEngineSpeed from "./pages/tester2";

const MainRoutes = () => {
    const routes = createHashRouter([
        {
            path: "/",
            element: <Test />,
        },
        {
            path: "/vessel",
            element: <Vessel/>,
        },
        {
            path: "/fuel",
            element: <Fuel />,
        },
        {
            path: "/power",
            element: <Power />,
        },
        {
            path: "/anemometer",
            element: <Anemometer />,
        },
        {
            path: "/gps",
            element: <GPS />,
        },
        {
            path: "/engine",
            element: <Engine />,
        },
        {
            path: "/compass",
            element: <Compass />,
        },
        {
            path: "/alarm",
            element: <Alarm />,
        },        
        {
            path: "/radar",
            element: <Radar />,
        },
        {
            path: "/speed",
            element: <Speed />,
        }, 
        {
            path: "/ecdis",
            element: <ECDIS />,
        },
        {
            path: "/rudder",
            element: <Rudder />,
        }, 
        {
            path: "/echo",
            element: <Echo />,
        }, 
        {
            path: "/speedometer",
            element: <Speedometer />,
        }, 
        {
            path: "/test2",
            element: <RPMEngineSpeed />,
        },        
    ])
    
    return <RouterProvider router={routes} />;
}

export default MainRoutes;
