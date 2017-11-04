import React from 'react';
import axios from 'axios';

class RetrieveEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      entries: [],
      displayed: false
    };
    // Bind functions
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEntriesChange = this.handleEntriesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.retrieveEntries = this.retrieveEntries.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEntriesChange(e) {
    this.setState({
      entries: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({
      displayed: !this.state.displayed
    });
    e.preventDefault();
  }

  retrieveEntries() {
    const context = this;
    axios.get('/wordsbytopic', {
      params: {
        name: this.state.name
      }
    })
    .then(function (response) {
      context.setState({
        entries: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>
            Search by class/topic:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            <input type="submit" value="Search by Topic" onClick={this.retrieveEntries} />
            Results:
            <div className="result-entry">
              {this.state.entries.map((entry, key) => (<div key={entry._id}>{entry.word} : {entry.definition} <br /> </div>))}
            </div>
            <br />
            <br />
          </label>
        </form>
      </div>

    );
  }
}

export default RetrieveEntries;
