import {Fragment, useRef} from "react";
import Card from "../../UI/Card";

const StopWatchAdd = (stopWatchAddProps) => {
    const titleRef = useRef();

    function addStopWatchHandler(event) {
        event.preventDefault()
        const stopWatch = {
            id: Math.random(),
            title: titleRef.current.value,
            hour: 0,
            minute: 0,
            second: 0
        }
        stopWatchAddProps.onAddStopWatch(stopWatch)


    }

    return (
        <Card>
            <h3>Add a new Stopwatch</h3>
            <form onSubmit={addStopWatchHandler}>
                <div>
                    <label>Stopwatch Title </label>
                    <input type="text" maxLength='30' ref={titleRef}/>
                </div>
                <br/>
                <div>
                    <button type='submit' disabled={stopWatchAddProps.onDisableAdd >= 10}>Add</button>
                    {stopWatchAddProps.onDisableAdd >= 10 && <p>Sorry you cannot have more than 10 Stopwatches</p>}
                </div>
            </form>
        </Card>
    )
}
export default StopWatchAdd;