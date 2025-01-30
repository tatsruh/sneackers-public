import {NavLink} from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <div>
                <h2>Page Not Found</h2>
                <p>Whoops! Something went wrong</p>
                <NavLink to={'/adidas'}>Return to the main page</NavLink>
            </div>
        </div>
    );
};

export default Error404;