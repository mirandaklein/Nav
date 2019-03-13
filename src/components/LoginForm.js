import React, { Component } from 'react';
import Card from './Card.js';
import CardItem from './CardItem.js';
import Input from './Input.js';
import Button from './Button.js';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component { 
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    render() {
        return(
            <Card>
                <CardItem>
                    <Input
                        label="email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    /> 
                </CardItem>
                    
                <CardItem>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        label="Login"
                    />
                </CardItem>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);