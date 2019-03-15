import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import _ from 'lodash';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeeFetch();

        this.createDataSource(this.props);
    };

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component will be rendered twith
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    };

    createDataSource({ employee }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(this.props.employee);
    };

    render(){
        console.log(this.props);
        return(
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    };
}

const mapStateToProps = state => {
    const employee = _.map(state.employee, (val, uid) => {
            return { ...val, uid }; // { shift: 'Monday, name: 'S', id: '2323'}
        });
        return { employee };
};

 export default connect (mapStateToProps, { employeeFetch })(EmployeeList);