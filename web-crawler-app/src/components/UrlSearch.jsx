import React, { Component } from 'react';

class UrlSearch extends Component {
  state = {
    url: '',
  }
  render() {
    return (
      <form>
        <label>URL: </label>
        <input type='text' placeholder='Add URL here' onChange={this.addUrl}/>
        <button type='submit' > Submit </button>
      </form>
    );
  }

  addUrl = event => {
    const value = event.target.value;
    this.setState({
      url: value
    })
    console.log(this.state)
  }
};

export default UrlSearch;