import React from "react";
import Button from 'react-bootstrap/Button'

export default class BubbleSort extends React.Component {

    runBubbleSort = async () => {
        await this.props.updateIsRunning(true);
        let arrTrace = [];
        let arr = JSON.parse(JSON.stringify(this.props.arr));
        const n = arr.length;
        for (let i = 0; i < n-1; i++) {
            for (let j = 0; j < n-i-1; j++) {
                //Swap
                if (arr[j] > arr[j+1]) {
                    const temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    //Adds a deep copy of arr into arrTrace
                    arrTrace.push(JSON.parse(JSON.stringify(arr)));
                }
            }
        }
        this.props.info("bubble");
        await this.props.updateByTrace(arrTrace);
    }

    render() {
            
        return (
            <div>
                
                <Button variant="info" onClick={this.runBubbleSort}>Bubble Sort</Button>{' '}
            </div>
        );
    }
}

