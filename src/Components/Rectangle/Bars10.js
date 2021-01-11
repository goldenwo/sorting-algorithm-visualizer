import React from "react";
import "./Bars.css"

export default class Bars10 extends React.Component {
    render() {
        const inlineBar = "same-line-bars-ten outer-box";
    return ( 
        <>
              <div className={inlineBar}>
                <div style={{height: this.props.sortArray[0]+"px" }}></div>
                <div style={{height: this.props.sortArray[1]+"px" }}></div>
                <div style={{height: this.props.sortArray[2]+"px" }}></div>
                <div style={{height: this.props.sortArray[3]+"px" }}></div>
                <div style={{height: this.props.sortArray[4]+"px" }}></div>
                <div style={{height: this.props.sortArray[5]+"px" }}></div>
                <div style={{height: this.props.sortArray[6]+"px" }}></div>
                <div style={{height: this.props.sortArray[7]+"px" }}></div>
                <div style={{height: this.props.sortArray[8]+"px" }}></div>
                <div style={{height: this.props.sortArray[9]+"px" }}></div>
             </div>
        </>);
    }
}


