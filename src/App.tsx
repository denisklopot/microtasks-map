import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";
import {TopCars} from "./TopCars";

function App() {
    return (
        <div className="App">
            {/*<NewComponent students={students}/>*/}
            <TopCars topCars={topCars}/>
        </div>
    );
}

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 25},
    {id: 5, name: "David", age: 34},
    {id: 6, name: "Richard", age: 44},
    {id: 7, name: "Thomas", age: 39},
    {id: 8, name: "Charles", age: 66},
    {id: 9, name: "Joseph", age: 55},
    {id: 10, name: "William", age: 77}
]

export default App;
