import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/main-layout';
import Home from '../views/home';
import Product from '../views/product';

const RouteSetup: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
            </Route>

            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default RouteSetup;
