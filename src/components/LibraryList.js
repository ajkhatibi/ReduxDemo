import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    };

    renderRows(library){
        console.log(library)
        return <ListItem library={library}/>
    }
    render(){
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRows}
            />
        );
    };
};

const mapStateToProps = state => {
    return { libraries: state.LibraryReducer }
}

export default connect(mapStateToProps)(LibraryList);