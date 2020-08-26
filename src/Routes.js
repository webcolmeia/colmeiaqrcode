import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" >
                Rodando Aqui
            </Route>
        </Switch>
    )
}

export default Routes;