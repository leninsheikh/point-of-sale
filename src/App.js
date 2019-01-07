import React from 'react';
import { Admin } from 'admin-on-rest';

import customRoutes from './routes/customRoutes';
import Menu from './menu.js';
import customReducer from './store/reducer';

const App = () => (
    <Admin menu= {Menu} customReducers={{customReducer}} customRoutes={customRoutes} >
    </Admin>
);

export default App;