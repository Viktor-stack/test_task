import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Users from "./containers/Usres/Users"
import About from "./components/About/About";
import Layout from "./hoc/Layout/Layout"
import СalendarContainer from "./containers/Сalendar/Сalendar";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact component={About}/>
                <Route path={'/list'} component={Users}/>
                <Route path={'/calendar'} component={СalendarContainer}/>
            </Switch>
        </Layout>
    );
}

export default App;
