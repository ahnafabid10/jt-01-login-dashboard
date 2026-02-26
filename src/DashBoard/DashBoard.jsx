import React from 'react';
import DashboardLayout from './DashboardLayout';

const DashBoard = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div>
            <DashboardLayout></DashboardLayout>
        </div>
    );
};

export default DashBoard;