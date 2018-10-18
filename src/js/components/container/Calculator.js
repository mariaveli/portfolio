import React from "react";
import * as ReactDOM from "react-dom";
import buttonArray from "../presentational/calcButtonArray";
import CalculatorScreen from "../presentational/CalculatorScreen";
import CalculatorButton from "../presentational/CalculatorButton";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            checked: true,
            disValue: "",
            disValue2: "",
            pressedEqual: false
        }
    }

    changeView(display){
        console.log(display);
        let result = "";
        let result2 = "";
        if(this.state.pressedEqual){
            this.state.disValue = "";
            result2= "";
            this.state.pressedEqual = !this.state.pressedEqual;

        }
        switch(display)
        {
            case "DEL":
                result= this.state.disValue.substring(0, this.state.disValue.length - 1);
                break;
            case "AC":
                result= "";
                result2= "";
                break;
            case "=":
                result = this.state.disValue;
                result2 = eval(this.state.disValue);
                if(result2.toString().length > 10){
                    result2 = result2.toPrecision(13);
                }
                this.state.pressedEqual = !this.state.pressedEqual;
                break;
            default:
                result = this.state.disValue + display;

                break;
        }
        if(result.length > 18){
            document.getElementById("display-top").style["text-align"] = "left";
        }else{
            document.getElementById("display-top").style["text-align"] = "right";
        }
        this.setState({
            disValue: result,
            disValue2: result2
        });
    }
    render() {
        return (
            <div id="calculus-pad">
                <h6 id={"h6"}>Calculatius Electronius</h6>
                <CalculatorScreen disValue={this.state.disValue} disValue2={this.state.disValue2}/>
                <div id="dis-but">
                    <div >
                        {buttonArray.map(obj => <CalculatorButton changeView={this.changeView.bind(this)} keyTrigger={obj.keyTrigger}  value={obj.value} keyCode={obj.keyCode} id={obj.id}/>)}
                    </div>
                </div>
            </div>

        );
    }
}
//ReactDOM.render(<Calculator />, document.getElementById("root"));

// const wrapper = document.getElementById("root");
// wrapper ? ReactDOM.render(<Calculator />, wrapper) : false;

export default Calculator;
