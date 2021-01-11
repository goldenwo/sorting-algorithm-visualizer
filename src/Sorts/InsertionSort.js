import React from "react";
import Button from 'react-bootstrap/Button'

export default class InsertionSort extends React.Component {

    runInsertionSort = async () => {
        await this.props.updateIsRunning(true);
        //Runs insertion sort algorithm 
        let arrTrace = [];
        let arr = JSON.parse(JSON.stringify(this.props.arr));
        for (let i = 1; i < arr.length; i++) {
            const key = arr[i];
            let j = i - 1;

            //Move elements of arr that are greater than the key to one index greater than its current index
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                //Adds a deep copy of arr into arrTrace
                arrTrace.push(JSON.parse(JSON.stringify(arr)));
                j--;
            }
            arr[j + 1] = key;
            //Adds a deep copy of arr into arrTrace
            arrTrace.push(JSON.parse(JSON.stringify(arr)));
        }
        this.props.info("insertion");
        await this.props.updateByTrace(arrTrace);
    };

    render() {
        return(
            <div>
                
                <Button variant="info" onClick={this.runInsertionSort}>Insertion Sort</Button>{' '}
            </div>
        );
    }
}
