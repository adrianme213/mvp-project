import React from 'react';
import axios from 'axios';

class RandomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: '',
      name: '',
    };
    // Bind functions
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitFlashcard = this.submitFlashcard.bind(this);
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
    e.preventDefault();
  }

  submitFlashcard() {
    axios.post('/words', {
      word: this.state.word,
      definition: this.state.definition,
      name: this.state.name
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <form id="flashcard-form" >
          <label>
            Word:
            <input type="text" value={this.state.word} onChange={this.handleWordChange} />
          </label>
          <label>
            Definition:
            <input type="text" value={this.state.definition} onChange={this.handleDefinitionChange} />
          </label>
          <label>
            Class/Topic:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.submitFlashcard} onSubmit={this.handleSubmit} />
        </form>
      </div>

    );
  }
}

export default RandomCard;
