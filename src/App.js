import React, { Component } from 'react';
import Subject from "./components/Subject"
import Toc from "./components/Toc"
import Content from "./components/Content"
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="world wide web!"></Subject>
                <Subject title="React" sub="For ui"></Subject>
                <Toc></Toc>
                <Content subTitle="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;