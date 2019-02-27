import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    state = {
        data: [],
        id: 0,
        x: 0,
        y: 0,
        z: 0,
        r: 0,
        g: 0,
        b: 0,
        intervalIsSet: false
    };

//fetch all existing data in db, then poll to check if db has changed and implement into ui.
    componentDidMount() {
        this.getDataFromDb();
        if(!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

//kill processes when we're done using them.
    componentWillUnmount() {
        if(this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

//get data from database
getDataFromDb = () => {
    fetch("http://localhost:3000/api/getData").then(data => data.json()).then(res => this.setState({ data: res.data }));
};

addData = (xVal, yVal, zVal, rVal, gVal, bVal) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)){
        ++idToBeAdded;
    }

    axios.post("http://localhost:3000/api/putData", {
        id: idToBeAdded,
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
                    <p> Please enter all applicables values for x, y, z, and r, g and b. </p>
                </ul>
                <div>
                    <input type="number" min="0" max="360" onChange{ e => this.setState({ x: e.target.value})} placeholder="0" style={{width:"30px"}} />
                    <input type="number" min="0" max="360" onChange{ e => this.setState({ y: e.target.value})} placeholder="0" style={{width:"30px"}} />
                    <input type="number" min="0" max="360" onChange{ e => this.setState({ z: e.target.value})} placeholder="0" style={{width:"30px"}} />
                    <input type="number" min="0" max="255" onChange{ e => this.setState({ r: e.target.value})} placeholder="0" style={{width:"30px"}} />
                    <input type="number" min="0" max="255" onChange{ e => this.setState({ g: e.target.value})} placeholder="0" style={{width:"30px"}} />
                    <input type="number" min="0" max="255" onChange{ e => this.setState({ b: e.target.value})} placeholder="0" style={{width:"30px"}} />
                    <button onClick={() =? this.addData(x,y,z,r,g,b)}>
                    Add
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
