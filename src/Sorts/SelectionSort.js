import React from "react";
import Button from 'react-bootstrap/Button'

export default class SelectionSort extends React.Component {

    runSelectionSort = async () => {
        await this.props.updateIsRunning(true);
        //Runs selection sort algorithm 
        let arr = JSON.parse(JSON.stringify(this.props.arr));
        let arrTrace = [];
        for (let i = 0; i < arr.length - 1; i++) { 
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            //Swap
            const temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
            //Adds a deep copy of arr into arrTrace
            arrTrace.push(JSON.parse(JSON.stringify(arr)));
        }
        this.props.info("selection");
        await this.props.updateByTrace(arrTrace);
    }

    render() {
        return(
            <div id="selection-sort">
                
                <Button variant="info" onClick={this.runSelectionSort}>Selection Sort</Button>{' '}
            </div>
        );
    }
}

