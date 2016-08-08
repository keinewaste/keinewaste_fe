import React from 'react'
import { Route, IndexRoute, Link } from 'react-router';
import App from './react/components/app';

import About from './react/components/about/about';
import Overview from './react/containers/overview';
import Agenda from './react/components/agenda/agenda';

import EditProfile from './react/components/profile/edit/edit-profile';

import CreateOffer from './react/containers/create-offer';
import ConfirmOffer from './react/components/donate/step2/confirm-offer';
import CreateConsultant from './react/components/consultant/create/create-consultant';


export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Overview} />

        <Route path="consultant/create" component={CreateConsultant} />

        <Route path="agenda" component={Agenda} />

        <Route path="profile" component={EditProfile} />
        <Route path="donate/step1" component={CreateOffer} />
        <Route path="donate/step2" component={ConfirmOffer} />
    </Route>
);
