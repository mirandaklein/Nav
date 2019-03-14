import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
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
                <Text style={styles.pickerTextStyle}>Shift Select</Text>
                <CardItem>
                        <Picker 
                            style={{ flex: 1 }}
                            selectedValue={this.props.shift}
                            onValueChange={day => this.props.employeeUpdate( {prop: 'shift', value: day})}
                        >
                            <Picker.Item label='Monday' value='Monday'/>
                            <Picker.Item label='Tuesday' value='Tuesday'/>
                            <Picker.Item label='Wednesday' value='Wednesday'/>
                            <Picker.Item label='Thursday' value='Thursday'/>
                            <Picker.Item label='Friday' value='Friday'/>
                            <Picker.Item label='Saturday' value='Saturday'/>
                            <Picker.Item label='Sunday' value='Sunday'/>
                        </Picker>

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

const styles= {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 25,
        paddingTop: 10,
        backgroundColor: '#fff',
        padding: 5,
        position: 'relative'
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}
export default connect (mapStateToProps, { employeeUpdate })(EmployeeCreate);