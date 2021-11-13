import React from "react";
import Head from './Head';
import Menu from "./Menu";
import Home from "./Home";
import Cardio from "./Cardio";
import Strenth from "./Strength";
import Flexibility from "./Flexibility";
import Yoga from "./Yoga";
import { Route, Switch } from "react-router";
const App = () =>{
    return(
        <>
        <Head/>
        <Menu/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/yoga' component={Yoga}/>
            <Route exact path='/cardio' component={Cardio}/>
            <Route exact path='/strength' component={Strenth}/>
            <Route exact path='/flexibility' component={Flexibility}/> 
        </Switch>
        </>
    );
}
export default App;