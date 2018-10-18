import * as React from "react";


class ScoringTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messageStatus: "",
            pl1: 0,
            pl2: 0,
            tie: 0

        };
        this.statusLog = this.statusLog.bind(this);
    }
    statusLog(){
        if(this.props.activeGame) {
           this.state.messageStatus = 'Player ' + this.props.activePlayer + ' is on!';
        }else if( this.props.winner !== ""){
            this.state.messageStatus =  this.props.winner + ' player has won!!!' ;
            if(this.props.winner === "x"){
                this.state.pl1++;
            }else if(this.props.winner === "o"){
                this.state.pl2++;
            }
        }else if( this.props.tied) {
            this.state.messageStatus =  "It's a tie!!!";
            this.state.tie++;
        }

    }
    render(){
        this.statusLog();
        let xclass = "";
        let oclass = "";
        if(this.props.activePlayer === "x"){
            xclass = "activePlayer";
        }
        if(this.props.activePlayer === "o"){
            oclass = "activePlayer";
        }

        return(
            <div>
                <h5>{this.state.messageStatus}</h5>
                <div className={'obj-al-row'}>
                <h4 className={xclass}>Player 1: {this.state.pl1}</h4>
                    <h4>||</h4>
                <h4 className={oclass}>Player 2: {this.state.pl2}</h4>
                </div>
                    <h4>Tied: {this.state.tie}</h4>
                </div>

        )
    }
}

export default ScoringTable;