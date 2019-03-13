// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//  Make a component
class Header extends Component {
    render() {
        const { textStyle, viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

// Style the component
const styles = {
    viewStyle: {
        backgroundColor: '#dae3e8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
// Make the component available to other parts of the app
export default Header;
