import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {

    const {isAuth} = useContext(AuthContext);
    console.log(isAuth)
    if (!isAuth.isAuth) {
        return <Navigate to={"/login"}></Navigate>
    } else {
        return children
    }
}

export default PrivateRoute;