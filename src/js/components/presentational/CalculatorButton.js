import React from "react";
class CalculatorButton extends React.Component{
    constructor(props){
        super(props);

        this.getNumbers = this.getNumbers.bind(this);
    }

    getNumbers(){
        this.props.changeView(this.props.keyTrigger);
    }
    componentDidMount(){
        document.addEventListener("keydown",this.handleKeyPress);
    }
    render(){
        return(
            <button className="displayButtons" onClick={this.getNumbers}  id={this.props.id} >{this.props.keyTrigger}
            </button>
        );
    }
}
export default CalculatorButton;