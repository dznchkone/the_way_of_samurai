import React from "react";

import './App.css';
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";

function App({state}) {
    return (
        <div className="app-wrapper">
            <Router>
                <Header/>
                <Sidebar state={state.navbar}/>
                <div className="app-wrapper-content">
                    <Route path="/" exact={true}>
                        <Redirect to="/profile"/>
                    </Route>
                    <Route path="/profile" >
                        <Profile state={state.profilePage}/>
                    </Route>
                    <Route path="/dialogs" >
                        <Dialogs state={state.dialogsPage}/>
                    </Route>

                    <Route component={News} exact={true} path="/news"/>
                    <Route component={Music} exact={true} path="/music"/>
                    <Route component={Settings} exact={true} path="/settings"/>
                </div>
            </Router>
        </div>
    );
}

export default App;
