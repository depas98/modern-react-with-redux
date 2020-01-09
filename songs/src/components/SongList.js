import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
    renderList() {
        return this.props.songs.map( song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {     
        // console.log(this.props);  
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// the name of this function is by convention, but can be any name
const mapStateToProps = state => {
    // console.log(state);
    return { songs: state.songs };
}

// connect returns a function 
// so the second set of parenthese (SongList) executes the inner function of connect with the SongList parameter
export default connect(mapStateToProps, { selectSong })(SongList);