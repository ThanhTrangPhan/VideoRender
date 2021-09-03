import React, { Component } from 'react';
// class component
class SearchBar extends Component {
    constructor(props) {
        super(props); //
        this.state = { term: 'Enter some text ...' };
    }
    render() {
        // use setState 
        return (
            <div className='search-bar'>
                <input
                value= {this.state.term}  
                onChange={event => this.onInputChange(event.target.value)} />
            </div>

        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTerm({term});
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
}

// functional component
// const SearchBar = ()=>{
//     return <input />;
// }

export default SearchBar;