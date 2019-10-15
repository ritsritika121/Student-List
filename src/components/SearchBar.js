import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
   state = {term: ''};

   onFormSubmit= (event) => {
       event.preventDefault();

       this.props.onSearch(this.state.term);

   };

    render(){
        return(
          <div className="ui segment"> 
              <form onSubmit= {this.onFormSubmit} className="ui form" autoComplete="off">
              <div className="field">
              <label><h2>Search:</h2></label>
                  <input id="input" type="text" value={this.state.term} onChange={(e) => this.setState({term:e.target.value})} />
                  </div>
              </form>
              <br />

              <Link to="/AddStudent" className="btn btn-info">
                        AddStudent
                </Link>
          </div>
        );
    }
}

export default SearchBar;