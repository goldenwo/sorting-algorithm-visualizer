import React from "react";
import "./Bars.css"

export default class Bars20 extends React.Component {
    render() {
        const inlineBar = "same-line-bars-twenty outer-box";
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
                <div style={{height: this.props.sortArray[10]+"px" }}></div>
                <div style={{height: this.props.sortArray[11]+"px" }}></div>
                <div style={{height: this.props.sortArray[12]+"px" }}></div>
                <div style={{height: this.props.sortArray[13]+"px" }}></div>
                <div style={{height: this.props.sortArray[14]+"px" }}></div>
                <div style={{height: this.props.sortArray[15]+"px" }}></div>
                <div style={{height: this.props.sortArray[16]+"px" }}></div>
                <div style={{height: this.props.sortArray[17]+"px" }}></div>
                <div style={{height: this.props.sortArray[18]+"px" }}></div>
                <div style={{height: this.props.sortArray[19]+"px" }}></div>
             </div>
        </>);
    }
}