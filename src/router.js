import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js';
import EmployeeList from'./components/EmployeeList.js';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='root'>
                <Scene key='login' component={LoginForm} title="Please Login" initial />
                <Scene key='employeeList' component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;