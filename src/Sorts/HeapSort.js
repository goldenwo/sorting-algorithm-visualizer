import React from "react";
import Button from 'react-bootstrap/Button'

export default class HeapSort extends React.Component {
    arrTrace = [];

    heapify = (arr, heapSize, i) => {
        //Maxheap implementation
        const left = (2 * i) + 1;
        const right = left +1;
        let max = i;

        if (left < heapSize && arr[left] > arr[max]) {
            max = left;
        }

        if (right < heapSize && arr[right] > arr[max]) {
            max = right;
        }

        if (max !== i) {
            //Swap
            [arr[i], arr[max]] = [arr[max], arr[i]];
            this.heapify(arr, heapSize, max);
        }
        this.arrTrace.push(JSON.parse(JSON.stringify(arr)));
    }

    runHeapSort = async () => {
        await this.props.updateIsRunning(true);
        //Runs heap sort algorithm 
        let arr = JSON.parse(JSON.stringify(this.props.arr));
        let arrLength = arr.length;
        let i = Math.floor(arrLength / 2-1);
        let k = arrLength -1;
        //Heapify
        while(i >= 0) {
            this.heapify(arr, arrLength, i)
            --i;
        }
        
        while(k >= 0) {
            [arr[0], arr[k]] = [arr[k], arr[0]];
            this.heapify(arr, k, 0);
            --k;
        }
        this.props.info("heap");
        await this.props.updateByTrace(this.arrTrace);
        this.arrTrace = [];
    }

    render() {
        return(
            <div>
                
                <Button variant="info" onClick={this.runHeapSort}>Heap Sort</Button>{' '}
            </div>
        );
    }
}

