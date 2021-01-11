import React from 'react';
import "./Sorts.css";

export default class SelectionSortInfo extends React.Component {

    render() {
        const mainInfoClass = "main-info-header-class";
        const mainInfoInnerClass = "main-info-text-class"
        return (
            <div>
                <span className={mainInfoClass}>
                Selection Sort Info
                </span>
                <p className={mainInfoInnerClass}>
                The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array. -GeeksForGeeks.org
                </p>
                <p className={mainInfoInnerClass}>
                Runtime: Best Case: Ω(n^2) Average Case: Θ(n^2) Worst Case:O(n^2)
                </p>
                <p className={mainInfoInnerClass}>
                Memory: O(1)
                </p>
            </div>
        )
    }
}