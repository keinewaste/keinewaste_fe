import React from 'react'
import { Route, IndexRoute, Link } from 'react-router';
import App from './react/containers/app';

import About from './react/components/about/about';

import EditProfile from './react/components/profile/edit/edit-profile';

import createOffer from './react/containers/create-offer';

const Home = () => (<div>Step 2</div>);
export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={About} />

        <Route path="profile" component={EditProfile} />
        <Route path="donate/step1" component={createOffer} />
        <Route path="donate/step2" component={Home} />
    </Route>
);
