import * as React from "react";
class SkillList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <li id={this.props.id}> {this.props.name} </li>
        )
    }
}
export default SkillList;