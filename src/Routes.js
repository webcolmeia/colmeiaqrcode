import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Begin pages
import Home from './Page/Home';
// End Pages

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}

export default Routes;