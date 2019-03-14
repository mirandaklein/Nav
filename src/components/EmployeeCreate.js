import React, { Component } from 'react';
import Card from './Card.js';
import CardItem from './CardItem.js';
import Input from './Input.js';
import Button from './Button.js';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';


class EmployeeCreate extends Component{
    render(){
        return(
            <Card>
                <CardItem>
                    <Input
                    label='Name'
                    placeholder='Miranda'
                    value={this.props.name}
                    onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardItem>
                <CardItem>
                    <Input 
                    label='Phone'
                    placeholder='555-555-555'
                    value={this.props.phone}
                    onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardItem>
                <CardItem>
                    <Button
                    label='Create'
                    />
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}
export default connect (mapStateToProps, { employeeUpdate })(EmployeeCreate);