import React, { Component } from "react";
import ReactDOM from "react-dom";
import DrumMachine from "../presentational/DrumMachine";
class DrumPadApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: true,
            disValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({
            checked: checked
        });
        let ButtonsArray =document.getElementsByClassName("drum-pad");
        for(let i=0; i<ButtonsArray.length; i++){
            ButtonsArray[i].disabled = !checked;
        }
        if(!checked){
            document.getElementById("display").innerHTML = "";
        }
    }

    render() {
        return (
            <div className={'obj-al-row'} id="drum-machine">
                <DrumMachine />
                <div className={'obj-al-col'}>
                    <p>Power</p>
                    <div className="power-switch">
                        <Switch
                            onChange={this.handleChange}
                            checked={this.state.checked}
                            className="react-switch"
                            id="normal-switch"
                        />
                    </div>
                    <p id="drum-pad-display">
                        {this.state.disValue}
                    </p>
                </div>
            </div>
        );
    }
}

// ReactDOM.render(<DrumPad />, document.getElementById("root"));

//
// const wrDrumPader = document.getElementById("root");
// wrDrumPader ? ReactDOM.render(<DrumPad />, wrDrumPader) : false;

export default DrumPadApp;