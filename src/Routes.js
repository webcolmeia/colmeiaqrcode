import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Begin pages
import Home from './Page/Home';
import Textqr from './Page/Textqr';
import Urlqr from './Page/Urlqr';
// End Pages

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/qrcode/text" component={Textqr} />
            <Route exact path="/qrcode/url" component={Urlqr} />
        </Switch>
    )
}

export default Routes;