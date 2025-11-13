import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Component/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <div><Loading></Loading></div>;
    }

    if (!user) {
        return <Navigate state={location?.pathname} to="/login"></Navigate>;
    }

    return children;
};

export default PrivateRoute;