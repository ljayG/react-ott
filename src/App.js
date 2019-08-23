import React, { Component } from 'react';
import Subject from "./components/Subject"
import Toc from "./components/Toc"
import Content from "./components/Content"
import './App.css';

class App extends Component {
    // 어떠한 컴포넌트가 실행될 때, render() 보다 constructor라는 함수가 먼저 실행해서 초기화 담당한다.
    constructor(props){
        super(props);
        this.state = {
            subject: {title: 'WEB', sub: 'world wide web!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'}
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
                <Toc data={this.state.contents}></Toc>
                <Content subTitle="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;