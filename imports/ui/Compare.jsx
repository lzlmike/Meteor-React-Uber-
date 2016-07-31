import React, {Component} from 'react';
import ReactDom from 'react-dom';

export default class Compare extends Component {
    clicked() {
        const inputValue = this.refs.distInput.value;
        FlowRouter.go(`/p/${inputValue}?speed=40&city=shanghai`);
    }

    render() {
        return (
            <div className="ui right labeled input">
            <div className="ui label blue"><i className="car icon"></i>公里数</div>
            <input  style={{borderColor:'#2185D0'}} type="number" placeholder="预测到目的地里程" ref="distInput"/>
            <div className="ui basic label blue">km</div>
            <button className="ui blue button" style={{marginLeft: 20}} onClick={this.clicked.bind(this)}>比较</button>
            </div>
        )
    }
}