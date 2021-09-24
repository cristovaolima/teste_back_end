import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import ProblemOne from './pages/ProblemOne';
import ProblemTwo from './pages/ProblemTwo';
import ProblemThree from './pages/ProblemThree'

export default function src() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={ProblemOne}/>
                <Route exact path="/problem-two" component={ProblemTwo}/>
                <Route exact path="/problem-three" component={ProblemThree}/>
            </Switch>
        </BrowserRouter>
    );
}