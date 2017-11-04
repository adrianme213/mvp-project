import React from 'react';

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
          </div>
      )
  }
}


export default WordApp;
