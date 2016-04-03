import React from 'react'
import { Route, IndexRoute, Link } from 'react-router';
import App from './react/containers/app';

import About from './react/components/about/about';

import EditProfile from './react/components/profile/edit/edit-profile';

import CreateOffer from './react/containers/create-offer';
import ConfirmOffer from './react/components/donate/step2/confirm-offer';


export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={About} />

        <Route path="profile" component={EditProfile} />
        <Route path="donate/step1" component={CreateOffer} />
        <Route path="donate/step2" component={ConfirmOffer} />
    </Route>
);
