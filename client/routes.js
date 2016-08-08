import React from 'react'
import { Route, IndexRoute, Link } from 'react-router';
import App from './react/components/app';
import Overview from './react/components/overview/overview';
import Agenda from './react/components/agenda/agenda';
import CreateConsultant from './react/components/consultant/create/create-consultant';


export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Overview} />
        <Route path="consultant/create" component={CreateConsultant} />
        <Route path="agenda" component={Agenda} />
    </Route>
);
