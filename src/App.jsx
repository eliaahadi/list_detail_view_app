import React, { Component } from 'react';

import List from './List.jsx'
import Detail from './Detail.jsx'
import '../styles/App.css';
import catalog from './apis/catalog.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.userTemplate = {id: '', firstName: '', lastName: ''},
    this.state = {
      view: 'List',
      items: [],
      selectedItem: null,
    }
  }

  async componentDidMount() {
    const response = await catalog.get('http://localhost:5001/items', {
    });
    this.setState({
      items: response.data.data
    })
  }

  backButton = () => {
    const newState =  Object.assign({}, this.state);
    newState.view = 'List';
    this.setState(newState);
  }

  handleItemSelect = (item) => {
    const newState =  Object.assign({}, this.state);
    newState.view = 'Detail';
    newState.selectedItem = item;
    this.setState(newState);
  }

  get currentView() {
    let viewData;
    switch (this.state.view) {
      case 'List':
        viewData = <List 
          items={this.state.items}
          handleItemSelect={this.handleItemSelect}
        />
        break;
      case 'Detail':
        viewData = <Detail 
          item={this.state.selectedItem}
          backButton={this.backButton}
        />
        break;
      default:
        throw new Exception(`view ${this.state.view} is undefined!`);
    }
    return viewData;
  }

  render() {
    return (
      <div className="container">
        {this.currentView}
      </div>
    );
  }
}

export default App;