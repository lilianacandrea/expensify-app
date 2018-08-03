import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// The component that we want to show. 
const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component
    </div>
);
 
const HelpPage = () => (
    <div>
        This is from my help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404
    </div>
);

// Set a route with 2 props.
// path: what URL do you want to use for this route
// component: take a component when we match that URL what should we show to the screen
// exact: it changes how matching works.
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));

