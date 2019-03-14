import React, { Component } from 'react';
import Card from './Card.js';
import CardItem from './CardItem.js';
import Input from './Input.js';
import Button from './Button.js';

class EmployeeCreate extends Component{
    render(){
        return(
            <Card>
                <CardItem 
                    label='Name'
                    placeholder='Miranda'
                />
                <CardItem>
                    <Input 
                    label='Phone'
                    placeholder='555-555-555'
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
export default EmployeeCreate;