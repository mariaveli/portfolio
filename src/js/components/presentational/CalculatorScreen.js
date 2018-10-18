import React from "react";
import CalculatorButton from "./CalculatorButton";
class CalculatorScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render() {

        return(
            <div className="screen">
                <p id="display-top">
                    {this.props.disValue}
                </p>

                <p id="display-bottom">
                    {this.props.disValue2}
                </p>
            </div>
        )
    }
}
export default CalculatorScreen;