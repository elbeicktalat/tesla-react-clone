import React from 'react';
import "./App.css"
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App(): JSX.Element {
    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;