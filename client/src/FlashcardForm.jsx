import React from 'react';

class FlashcardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      name: '',
      displayed: false
    };
    // Bind functions
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWordChange(e) {
    this.setState({
      word: e.target.value
    });
  }
  handleDefinitionChange(e) {
    this.setState({
      definition: e.target.value
    });
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({
      displayed: !this.state.displayed
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
      {this.state.displayed ?
        <div id="flashcard">
          WORD: {this.state.word} <br />
          DEFINITION: {this.state.definition} <br />
          SUBMITTED BY: {this.state.name} <br />
          <button onClick={this.handleSubmit}>Edit Name</button>
        </div>
        :
        <form id="flashcard-form" onSubmit={this.handleSubmit}>
          <label>
            Word:
            <input type="text" value={this.state.word} onChange={this.handleWordChange} />
          </label>
          <label>
            Definition:
            <input type="text" value={this.state.definition} onChange={this.handleDefinitionChange} />
          </label>
          <label>
            Username:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      }
      </div>

    );
  }
}

export default FlashcardForm;
