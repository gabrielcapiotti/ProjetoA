import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaLayout } from '../pages/LayoutPagina';

export const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaLayout />} />
            </Routes>
        </Router>
    );
};
