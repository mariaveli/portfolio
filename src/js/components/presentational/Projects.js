import * as React from "react";
import TicTacToe from "../container/TicTacToe";
import Calculator from "../container/Calculator";
import DrumPadApp from "../container/DrumPadApp";

class Projects extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div >
            <div id="project-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="tic-tac-toe-tab-control" data-toggle="tab" href="#tic-tac-toe-tab" role="tab"
                           aria-controls="tic-tac-toe-tab" aria-selected="true">Tic Tac Toe</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="calculator-tab-control" data-toggle="tab" href="#calculator-tab" role="tab"
                           aria-controls="calculator-tab" aria-selected="false">Calculator</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="drumpad-tab-control" data-toggle="tab" href="#drumpad-tab" role="tab"
                           aria-controls="drumpad-tab" aria-selected="false">Drum Pad</a>
                    </li>
                </ul>
            </div>
                <div  className='tab-content obj-al-row' id="project">
                    <div className="tab-pane fade show active " id="tic-tac-toe-tab" role="tabpanel"
                         aria-labelledby="tic-tac-toe-tab-control"><TicTacToe />
                    </div>
                    <div className="tab-pane fade " id="calculator-tab" role="tabpanel" aria-labelledby="calculator-tab-control"><Calculator/></div>
                    <div className="tab-pane fade " id="drumpad-tab" role="tabpanel" aria-labelledby="drumpad-tab-control"><DrumPadApp /></div>
                </div>
            </div>
        );
    }
}

export default Projects;