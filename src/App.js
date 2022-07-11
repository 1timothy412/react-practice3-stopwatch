import {Fragment, useState} from "react";
import MyBody from "./components/body/MyBody";
import MyHeader from "./components/header/MyHeader";

function App() {
    const initialStopWatchData = [
        {
            id: Math.random(),
            title: 'My First Stopwatch',
            hour: 0,
            minute: 0,
            second: 0,
        },
    ]
    const [stopWatches, setStopWatches] = useState(initialStopWatchData)
    const addStopWatchHandler = (stopWatch) => {
        setStopWatches(
        prevStopWatches => [...prevStopWatches,stopWatch]
        )
    }
    return (
        <Fragment>
            <MyHeader>

            </MyHeader>
            <MyBody stopWatches={stopWatches} onAddStopWatch={addStopWatchHandler}>

            </MyBody>
        </Fragment>
    );
}

export default App;
