import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    onFormSubmit = event => {
        // this pevents the form from automatically submitting iteself, which is its defualt behavior
        event.preventDefault();
        
        // onSubmit function was passed in as a prop for the App.js        
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={e => this.setState({ term: e.target.value})}/>
                    </div>                    
                </form>
            </div>
        )
    };
}

export default SearchBar;