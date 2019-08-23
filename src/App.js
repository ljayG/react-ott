import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{ this.props.title }</h1>
                { this.props.sub }
            </header>
        );
    }
}

class Toc extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">javaScript</a></li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <article>
                <h2>{ this.props.subTitle }</h2>
                { this.props.desc }
            </article>
        );
    }
}
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
