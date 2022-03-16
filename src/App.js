import React from "react";

import './App.css';
import Header from './components/Header';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from "./components/Profile";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {

    return (
        <div className="app-wrapper">
            <Router>
                <Header/>
                <SidebarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/" exact={true}>
                        <Redirect to="/profile"/>
                    </Route>
                    <Route path="/profile/:id?" >
                        <ProfileContainer />
                    </Route>
                    <Route path="/dialogs" >
                        <DialogsContainer/>
                    </Route>
                    <Route path='/users'>
                        <UsersContainer/>
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
