import React from 'react';
import "./Sorts.css";

export default class HeapSortInfo extends React.Component {

    render() {
        const mainInfoClass = "main-info-header-class";
        const mainInfoInnerClass = "main-info-text-class"
        return (
            <div>
                <span className={mainInfoClass}>
                Heap Sort Info
                </span>
                <p className={mainInfoInnerClass}>
                Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements. -GeeksForGeeks.org
                </p>
                <p className={mainInfoInnerClass}>
                Runtime: Best Case: Ω(nlog(n)) Average Case: Θ(nlog(n)) Worst Case:O(nlog(n))
                </p>
                <p className={mainInfoInnerClass}>
                Memory: O(n)
                </p>
            </div>
        )
    }
}