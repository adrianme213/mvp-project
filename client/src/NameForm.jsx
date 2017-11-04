import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameDisplayed: false
    };
    // Bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({
      nameDisplayed: !this.state.nameDisplayed
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
      {this.state.nameDisplayed ?
        <div id="name-display">
          Welcome to Flashcard Word Review: {this.state.name}
          <br />
          <button onClick={this.handleSubmit}>Edit Name</button>
        </div>
        :
        <form id="name-form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      }
      </div>

    );
  }
}

export default NameForm;
