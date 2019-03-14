import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js';
import EmployeeList from'./components/EmployeeList.js';
import EmployeeCreate from './components/EmployeeCreate.js';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='root'>
            
                <Scene key='auth'>
                    <Scene 
                        key='login' 
                        component={LoginForm} 
                        title="Please Login" 
                        initial 
                    />
                </Scene>

                <Scene key="main">
                    <Scene
                        onRight={() => Actions.employeeCreate()}
                        rightTitle="Add"
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene 
                        key="employeeCreate" 
                        component={EmployeeCreate} 
                        title="Create Employee" 
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;