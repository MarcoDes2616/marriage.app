import { Navigate, Outlet, useParams} from 'react-router-dom';

const ProtectedRoutes = () => {
    const {token} = useParams()


    if (token) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }

};

export default ProtectedRoutes;