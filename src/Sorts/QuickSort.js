import React from "react";
import Button from 'react-bootstrap/Button'

export default class QuickSort extends React.Component {
    arrTrace = [];

    partition = (arr, start, end) => {
        const pivot = arr[end];
        let pivotIndex = start;
        for (let i = start; i < end; i++) {
            if (arr[i] < pivot) {
                //swap
                const temp = arr[pivotIndex];
                arr[pivotIndex] = arr[i];
                arr[i] = temp;
                this.arrTrace.push(JSON.parse(JSON.stringify(arr)));
                pivotIndex++;
            }
        }
        //swap
        const temp1 = arr[pivotIndex];
        arr[pivotIndex] = arr[end];
        arr[end] = temp1;
        this.arrTrace.push(JSON.parse(JSON.stringify(arr)));
        return pivotIndex;
    }

    runQuickSort = async () => {
        await this.props.updateIsRunning(true);
        let arr = JSON.parse(JSON.stringify(this.props.arr));
        let stack = [];
        stack.push(0);
        stack.push(arr.length - 1);

        while (stack[stack.length - 1] >= 0) {
            let end = stack.pop();
            let start = stack.pop();

            let pivotIndex = this.partition(arr, start, end);
            if (pivotIndex - 1 > start) {
                stack.push(start);
                stack.push(pivotIndex - 1);
            }
            if (pivotIndex + 1 < end) {
                stack.push(pivotIndex + 1);
                stack.push(end);
            }
        }
        this.props.info("quick");
        await this.props.updateByTrace(this.arrTrace);
        this.arrTrace = [];
    }
   
    render() {
        return(
            <div>
                
                <Button variant="info" onClick={this.runQuickSort}>Quick Sort</Button>{' '}
            </div>
        );
    } 
}
