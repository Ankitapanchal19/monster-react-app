import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   string : "Hey this is my new react App!!!"
    // }

    this.state = {
        monsters: [],
        searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json() //coverting into json formate so JS can understand it
    )
    .then(users => this.setState({monsters: users})
    )
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBox placeholder="Search Monsters..." handlechange={e => this.setState({searchField: e.target.value})}></SearchBox>
        <CardList monsters={filteredMonsters} className="class-list"></CardList>
      </header>
    </div> 
    );
  }
}

export default App;
