import * as React from "react";
class Information extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "Maria Veli",
            title: "Civil Engineer / Front End Developer"
        }
    }
    render(){
        return(
            <div className={"obj-al-row infoName"}>
                <div className={'obj-al-col'} id={'title'}>
                <h1 >{this.state.name}</h1>
                <h2 >{this.state.title}</h2>
                </div>
            </div>
        );
    }
}

export default Information;