import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RegisterConnector } from '../modules/register/RegisterConnector';
var Routes = function () { return (React.createElement(BrowserRouter, null,
    React.createElement(Switch, null,
        React.createElement(Route, { exact: true, path: "/register", component: RegisterConnector })))); };
export default Routes;
//# sourceMappingURL=index.js.map