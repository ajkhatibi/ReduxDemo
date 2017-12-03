import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';
 
export default class ListItem extends Component {
    render() {
        const { textStyle } = styles;
        return (
            <CardSection>
                <Text style={textStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})
