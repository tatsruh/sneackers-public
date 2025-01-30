import {ReactNode} from 'react';
import Error404 from "./Error404.tsx";

type Props = {
    children: ReactNode;
}

const ProtectedRoute = (props: Props) => {
    const logged = false
    return (
        <>
            {logged ? props.children : <Error404 />}
            </>
    );
};

export default ProtectedRoute;