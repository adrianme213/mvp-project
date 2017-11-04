import React from 'react';
import NameForm from './NameForm.jsx';
import FlashcardForm from './FlashcardForm.jsx';

class WordApp extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {

  }

  render() {
      return(
          <div>
            <NameForm />
            <FlashcardForm />
          </div>
      )
  }
}


export default WordApp;
