import React, {Component} from "react"; 
import "./App.css";
import "./Components/Rectangle/Bars.css"
import BubbleSort from "./Sorts/BubbleSort";
import HeapSort from "./Sorts/HeapSort";
import InsertionSort from "./Sorts/InsertionSort";
import QuickSort from "./Sorts/QuickSort";
import SelectionSort from "./Sorts/SelectionSort";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Bars10 from "./Components/Rectangle/Bars10"
import Bars20 from "./Components/Rectangle/Bars20"
import Bars50 from "./Components/Rectangle/Bars50"
import Bars100 from "./Components/Rectangle/Bars100"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import InsertionSortInfo from "./Components/SortInfo/InsertionSortInfo";
import QuickSortInfo from "./Components/SortInfo/QuickSortInfo";
import BubbleSortInfo from "./Components/SortInfo/BubbleSortInfo";
import SelectionSortInfo from "./Components/SortInfo/SelectionSortInfo";
import HeapSortInfo from "./Components/SortInfo/HeapSortInfo";
import titleImg from "./Components/Photos/TitlePhoto.png";

class App extends Component {
  state = {
    sortArray: [0,0,0,0,0,0,0,0,0,0],
    numbars: 10,
    delay: 100,
    visible10: true,
    visible20: false,
    visible50: false,
    visible100: false,
    visibleInsertionSort: false,
    visibleQuickSort: false,
    visibleBubbleSort: false,
    visibleHeapSort: false,
    visibleSelectionSort: false,
    isRunning: false
  }

  displayArr = () => {
    let temp = new Array(this.state.numbars).fill(0)
    for (let i = 0; i < this.state.numbars; i++) {
        temp[i] = (Math.round(Math.random() * (400 - 20) + 20));
    }
    this.setState({
        sortArray: temp
    })
  }

  delay = async (ms) => new Promise(res => setTimeout(res, ms));

  updateByTrace = async (arrTrace) => {
    for (let i = 0; i < arrTrace.length; i++) {
      if (!this.state.isRunning) {
        return;
      }
      this.setState({ sortArray: arrTrace[i] });
      await this.delay(this.state.delay);
    }
    await this.updateIsRunning(false);
  }

  handleOnChange = (value) => {
    this.setState({
      delay: value
    })
  }

  sortInfoDisplay = (sort) => {
    if (sort === "insertion") {
      this.setState({visibleInsertionSort: true, visibleQuickSort: false, visibleBubbleSort: false, visibleHeapSort: false, visibleSelectionSort: false});
    }
    else if (sort === "quick") {
      this.setState({visibleInsertionSort: false, visibleQuickSort: true, visibleBubbleSort: false, visibleHeapSort: false, visibleSelectionSort: false});
    }
    else if (sort === "bubble") {
      this.setState({visibleInsertionSort: false, visibleQuickSort: false, visibleBubbleSort: true, visibleHeapSort: false, visibleSelectionSort: false});
    }
    else if (sort === "heap") {
      this.setState({visibleInsertionSort: false, visibleQuickSort: false, visibleBubbleSort: false, visibleHeapSort: true, visibleSelectionSort: false});
    }
    else if (sort === "selection") {
      this.setState({visibleInsertionSort: false, visibleQuickSort: false, visibleBubbleSort: false, visibleHeapSort: false, visibleSelectionSort: true});
    }
    else {
      return;
    }
  }

  updateIsRunning = async (sorting) => {
    this.setState({ isRunning : sorting });
  }
 
  render() {
    const buttonClass = "same-line";
    const marginClass = "button-margin";
    const dropdownItemClass = "main-dropdown-items";
    const dropdownMenuClass = "main-dropdown-menu button-margin";
    const sliderClass = "slider-class";
    const visualizerContainer = "visualizer-container"
    const formatms = value => value + "ms";
    const sliderLabel = {1 : "", 500 : "Animation Delay", 1000 : ""};
    return (
      <>
        {/*Title */}
        <img src={ titleImg } alt=""></img>
        <div className={visualizerContainer}>
          {/*Row of Sort Buttons */}
          <div className={buttonClass}>
            {(this.state.sortArray.every(item => item !== 0) && !this.state.isRunning) ? <InsertionSort arr={this.state.sortArray} updateByTrace={this.updateByTrace} info={this.sortInfoDisplay} updateIsRunning={this.updateIsRunning}/> : <div><Button variant="info" disabled={true}>Insertion Sort</Button></div>}
            {(this.state.sortArray.every(item => item !== 0) && !this.state.isRunning) ? <QuickSort arr={this.state.sortArray} updateByTrace={this.updateByTrace} info={this.sortInfoDisplay} updateIsRunning={this.updateIsRunning}/> : <div><Button variant="info" disabled={true}>Quick Sort</Button></div>}
            {(this.state.sortArray.every(item => item !== 0) && !this.state.isRunning) ? <BubbleSort arr={this.state.sortArray} updateByTrace={this.updateByTrace} info={this.sortInfoDisplay} updateIsRunning={this.updateIsRunning}/> : <div><Button variant="info" disabled={true}>Bubble Sort</Button></div>}
            {(this.state.sortArray.every(item => item !== 0) && !this.state.isRunning) ? <HeapSort arr={this.state.sortArray} updateByTrace={this.updateByTrace} info={this.sortInfoDisplay} updateIsRunning={this.updateIsRunning}/> : <div><Button variant="info" disabled={true}>Heap Sort</Button></div>}
            {(this.state.sortArray.every(item => item !== 0) && !this.state.isRunning) ? <SelectionSort arr={this.state.sortArray} updateByTrace={this.updateByTrace} info={this.sortInfoDisplay} updateIsRunning={this.updateIsRunning}/> : <div><Button variant="info" disabled={true}>Selection Sort</Button></div>}
          </div>
          {/*Dropdown menu */}
          <DropdownButton className={dropdownMenuClass} id="dropdown-basic-button" title="# of Rectangles">
            <span className={dropdownItemClass}>
              <Button onClick={() => {
                this.setState({sortArray: new Array(10).fill(0), numbars: 10, visible10: true, visible20: false, visible50: false, visible100: false});
              }}>
                10
              </Button>
            </span>
            <span className={dropdownItemClass}>
              <Button onClick={() => {
                this.setState({sortArray: new Array(20).fill(0), numbars: 20, visible10: false, visible20: true, visible50: false, visible100: false});
              }}>
                20
              </Button>
            </span>
            <span className={dropdownItemClass}>
              <Button onClick={() => {
                this.setState({sortArray: new Array(50).fill(0), numbars: 50, visible10: false, visible20: false, visible50: true, visible100: false});
                }}>
                50
              </Button>
            </span>
            <span className={dropdownItemClass}>
              <Button onClick={() => {
                this.setState({sortArray: new Array(100).fill(0), numbars: 100, visible10: false, visible20: false, visible50: false, visible100: true});
                }}>
                100
              </Button>
            </span>
          </DropdownButton>          
          {/*Main rectangle box */}
          {this.state.visible10 ? <Bars10 sortArray ={this.state.sortArray}/> : null}
          {this.state.visible20 ? <Bars20 sortArray ={this.state.sortArray}/> : null}
          {this.state.visible50 ? <Bars50 sortArray ={this.state.sortArray}/> : null}
          {this.state.visible100 ? <Bars100 sortArray ={this.state.sortArray}/> : null}
          
          {/*Gen array button */}
          <Button variant="info" className={marginClass} onClick={this.displayArr}>Generate Array</Button>{' '}
          {/*Reset Button */}
          <Button variant="primary" className={marginClass} onClick={ () => {
            this.setState({
              sortArray : new Array(this.state.numbars).fill(0),
              visibleInsertionSort : false,
              visibleQuickSort : false,
              visibleBubbleSort : false,
              visibleHeapSort : false,
              visibleSelectionSort : false
            });
            this.updateIsRunning(false);
          }}>Reset</Button>
         
          {/*Time delay slider*/}
          <div className={sliderClass}>
            <Slider
              min={1}
              max={1000}
              value={this.state.delay}
              onChange={this.handleOnChange}
              format={formatms}
              labels={sliderLabel}
            />
          </div>
          
          {/*Sort Infos */}
          {this.state.visibleInsertionSort ? <InsertionSortInfo /> : null}
          {this.state.visibleQuickSort ? <QuickSortInfo /> : null}
          {this.state.visibleBubbleSort ? <BubbleSortInfo /> : null}
          {this.state.visibleHeapSort ? <HeapSortInfo /> : null}
          {this.state.visibleSelectionSort ? <SelectionSortInfo /> : null}
        </div>
      </>
    );
  }
}


export default App;
