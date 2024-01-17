import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/cart-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") // fetch is a function that returns a promise
        .then((response) => response.json()) // this is a promise
        .then((users) => setMonsters(users)); // this is a promise
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className="monsters-search-box" placeholder="search monsters" handleChange={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
}

export default App;
