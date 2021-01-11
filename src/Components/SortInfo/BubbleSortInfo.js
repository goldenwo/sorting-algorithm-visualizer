import React from 'react';
import "./Sorts.css";

export default class BubbleSortInfo extends React.Component {

    render() {
        const mainInfoClass = "main-info-header-class";
        const mainInfoInnerClass = "main-info-text-class"
        return (
            <div>
                <span className={mainInfoClass}>
                Bubble Sort Info
                </span>
                <p className={mainInfoInnerClass}>
                Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. -GeeksForGeeks.org               
                </p>
                <p className={mainInfoInnerClass}>
                Runtime: Best Case: Ω(n) Average Case: Θ(n^2) Worst Case:O(n^2)
                </p>
                <p className={mainInfoInnerClass}>
                Memory: O(1)
                </p>
            </div>
        )
    }
}