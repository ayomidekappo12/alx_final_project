import { Navigate } from "react-router-dom"


const ProtectedRoute = ({isAuthenticatad, children}) => {
    if(!isAuthenticatad){
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoute;