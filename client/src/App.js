import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    state = {
        data: [],
        x: '',
        y: '',
        z: '',
        r: '',
        g: '',
        b: '',
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
                    <input type="number" min="0" max="360" onChange={e => this.setState({x: e.target.value})} placeholder="0" style={{width:"40px"}} />
                    <label> Y </label>
                    <input type="number" min="0" max="360" onChange={e => this.setState({Y: e.target.value})}  placeholder="0" style={{width:"40px"}} />
                    <label> Z </label>
                    <input type="number" min="0" max="360" onChange={e => this.setState({z: e.target.value})}  placeholder="0" style={{width:"40px"}} />
                    <label> R </label>
                    <input type="number" min="0" max="255" onChange={e => this.setState({r: e.target.value})}  placeholder="0" style={{width:"40px"}} />
                    <label> G </label>
                    <input type="number" min="0" max="255" onChange={e => this.setState({g: e.target.value})}  placeholder="0" style={{width:"40px"}} />
                    <label> B </label>
                    <input type="number" min="0" max="255" onChange={e => this.setState({b: e.target.value})}  placeholder="0" style={{width:"40px"}} />
                    <button onClick={() => this.addData(this.state.x, this.state.y, this.state.z, this.state.r, this.state.g, this.state.b)}>
                    Add
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
