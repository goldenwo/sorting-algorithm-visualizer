
import React from 'react';
import "./Sorts.css";

export default class QuickSortInfo extends React.Component {

    render() {
        const mainInfoClass = "main-info-header-class";
        const mainInfoInnerClass = "main-info-text-class"
        return (
            <div>
                <span className={mainInfoClass}>
                Quick Sort Info
                </span>
                <p className={mainInfoInnerClass}>
                QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. -GeeksForGeeks.org               
                </p>
                <p className={mainInfoInnerClass}>
                Runtime: Best Case: Ω(nlog(n)) Average Case: Θ(nlog(n)) Worst Case:O(n^2)
                </p>
                <p className={mainInfoInnerClass}>
                Memory: O(log(n))
                </p>
            </div>
        )
    }
}