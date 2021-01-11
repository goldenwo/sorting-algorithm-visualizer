
import React from 'react';
import "./Sorts.css";

export default class InsertionSortInfo extends React.Component {

    render() {
        const mainInfoClass = "main-info-header-class";
        const mainInfoInnerClass = "main-info-text-class"
        return (
            <div>
                <span className={mainInfoClass}>
                Insertion Sort Info
                </span>
                <p className={mainInfoInnerClass}>
                Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. -GeeksForGeeks.org
               
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

