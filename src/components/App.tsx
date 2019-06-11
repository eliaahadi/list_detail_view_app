import * as React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  async componentDidMount(){
    const allData = await axios({
      method: 'GET',
      url: 'http://localhost:5001/',
      responseType: 'json',
    })
    .then(response => {
      console.log("axios success ", response);
    })
    .catch(error => console.log("axios GET failed -> ", error));
  }

  render() {
    return (
      <div>
        Hello THOR
      </div>
    )
  }
}

