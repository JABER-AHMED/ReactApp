import { Component } from "react";
import "./App.css";
import CardList from "./components/cart-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users") // fetch is a function that returns a promise
        .then((response) => response.json()) // this is a promise
        .then((users) => this.setState({ monsters: users })); // this is a promise
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField: searchField }
        });
    }

  render() {

    const {monsters, searchField} = this.state; // destructuring
    const {onSearchChange} = this; // destructuring

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className="monsters-search-box" placeholder="search monsters" handleChange={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
