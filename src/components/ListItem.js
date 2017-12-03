import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    expandRow() {
        const { library, selectedLibraryID } = this.props;
        if (library.id === selectedLibraryID) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }
    render() {
        const { textStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={textStyle}>{title}</Text>
                    </CardSection>
                    {this.expandRow()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

const mapStateToProps = state => {
    return { selectedLibraryID: state.Selection };
};

export default connect(mapStateToProps, actions)(ListItem);
