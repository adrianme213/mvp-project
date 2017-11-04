import React from 'react';
import RetrieveEntries from './RetrieveEntries.jsx';
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
            <RetrieveEntries />
            <FlashcardForm />
          </div>
      )
  }
}


export default WordApp;
