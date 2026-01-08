import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "../utils/auth";

const ProtectedRoute =({ children })=>{
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login"  />;
};

export default ProtectedRoute;