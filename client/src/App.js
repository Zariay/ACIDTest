import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    state = {
        data: [],
        x: 0,
        y: 0,
        z: 0,
        r: 0,
        g: 0,
        b: 0,
    };

addData = (xVal, yVal, zVal, rVal, gVal, bVal) => {
    axios.post("http://localhost:3000/api/putData", {
        x: xVal,
        y: yVal,
        z: zVal,
        r: rVal,
        g: gVal,
        b: bVal
    });
};

handleInput(e){
    this.setState({[e.target.name]: e.target.value});
}


//UI
    render(){
        const { data } = this.state;
        return (
            <div>  
                <ul>
                    <p> Please enter all applicables values for x, y, z, and r, g, b. </p>
                </ul>
                <div>
                    <label> X </label>
                    <input type="text" pattern="[0-9]" min="0" max="360" value={this.state.x} onChange={this.handleInput.bind(this)} placeholder="0" style={{width:"30px"}} />
                    <label> Y </label>
                    <input type="text" pattern="[0-9]" min="0" max="360" value={this.state.y} onChange={this.handleInput.bind(this)}  placeholder="0" style={{width:"30px"}} />
                    <label> Z </label>
                    <input type="text" pattern="[0-9]" min="0" max="360" value={this.state.z} onChange={this.handleInput.bind(this)}  placeholder="0" style={{width:"30px"}} />
                    <label> R </label>
                    <input type="text" pattern="[0-9]" min="0" max="255" value={this.state.r} onChange={this.handleInput.bind(this)}  placeholder="0" style={{width:"30px"}} />
                    <label> G </label>
                    <input type="text" pattern="[0-9]" min="0" max="255" value={this.state.g} onChange={this.handleInput.bind(this)}  placeholder="0" style={{width:"30px"}} />
                    <label> B </label>
                    <input type="text" pattern="[0-9]" min="0" max="255" value={this.state.b} onChange={this.handleInput.bind(this)}  placeholder="0" style={{width:"30px"}} />
                    <button onClick={() => this.addData(this.state.x, this.state.y, this.state.z, this.state.r, this.state.g, this.state.b)}>
                    Add
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
