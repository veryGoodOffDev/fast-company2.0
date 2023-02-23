import React, { useState, useEffect } from "react";
import Users from "./layouts/users";

import api from "./api";
import NavBar from "./components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
// import User from "./components/user";

function App() {
    
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/login:type?' component={Login}/>
                <Route path='/users/:userId?' component={Users}/>
                <Redirect to="/"/>
            </Switch>
            {/* {users && (
                <Users
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                    users={users}
                />
            )} */}
        </div>
    );
}

export default App;