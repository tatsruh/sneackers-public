import {createBrowserRouter} from "react-router-dom";
import Adidas from "../layout/components/pages/Adidas.tsx";
import Error404 from "../layout/components/pages/Error404.tsx";
import App from "../App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [{
            path: '/adidas/',
            element: <Adidas/>,
         }
        ]
    }
])