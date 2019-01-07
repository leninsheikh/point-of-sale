import React from 'react';
import { Route } from 'react-router-dom';
import POS from '../customPage/point-of-sale';
import Dashboard from '../customPage/dashboard';

export default [
    <Route exact path="/" component={Dashboard} />,
    <Route exact path="/pos" component={POS} />,
];