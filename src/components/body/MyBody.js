import Card from "../../UI/Card";
import StopWatch from "./StopWatch";
import StopWatchAdd from "./StopWatchAdd";

const MyBody = (MyBodyProps) => {
    const stopWatches = MyBodyProps.stopWatches;
    const addStopWatchHandler = (stopWatch) => {
        MyBodyProps.onAddStopWatch(stopWatch)
    }
    return (
        <Card>
            <StopWatchAdd
                onAddStopWatch={addStopWatchHandler}
                onDisableAdd = {stopWatches.length}
            />
            {stopWatches.map((stopWatch) =>
                <StopWatch key={stopWatch.id}
                           id={stopWatch.id}
                           title={stopWatch.title}
                           hour={stopWatch.hour}
                           minute={stopWatch.minute}
                           second={stopWatch.second}
                >

                </StopWatch>
            )}
        </Card>

    )
}
export default MyBody;