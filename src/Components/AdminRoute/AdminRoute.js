import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    console.log(user.email, admin)
    if (isLoading) {
        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    if (admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;

};

export default AdminRoute;