import React from 'react';
import NameForm from './NameForm.jsx';

class WordApp extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    console.log('hello')
  }

  render() {
      return(
          <div>
            Hello
            <NameForm />
          </div>
      )
  }
}


export default WordApp;
