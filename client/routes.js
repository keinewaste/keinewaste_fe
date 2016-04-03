import React from 'react'
import { Route, IndexRoute, Link } from 'react-router';
import App from './react/containers/app';

import About from './react/components/about/about';

import EditProfile from './react/components/profile/edit/edit-profile';

import createOffer from './react/components/donate/step1/create-offer';

const Home = () => (<div>Home!</div>)

export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="register" component={Home} />
        <Route path="profile" component={EditProfile} />
        <Route path="donate/step1" component={createOffer} />
    </Route>
)
