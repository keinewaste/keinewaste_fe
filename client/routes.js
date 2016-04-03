import React from 'react'
import { Route, IndexRoute, Link } from 'react-router';
import App from './react/containers/app';

import About from './react/components/about/about';


const Home = () => (<div>Home!</div>)

export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={About}/>
        <Route path="register" component={Home}/>
    </Route>
)
