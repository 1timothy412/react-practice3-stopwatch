import {Fragment, useEffect, useState} from "react";

const StopWatch = (StopWatchProps) => {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [isActivated, setIsActivated] = useState(false)
    const [disableRun, setDisableRun] = useState(false)
    const [disablePause, setDisablePause] = useState(true)
    const [disableReset, setDisableReset] = useState(true)

    useEffect(() => {
        let runningInterval = null
        if (isActivated) {
            console.log('Stopwatch is running')
            runningInterval = setTimeout(() => {
                setSecond(prevState => {
                        return prevState + 1
                    }
                )
            }, 1000)
            if (second > 59) {
                setSecond(0
                )
                console.log('Reset second timer')
                setMinute(prevState => {
                    return prevState + 1
                })
                if (minute > 59) {
                    console.log('Reset minute timer')
                    setHour(prevState => {
                        return prevState + 1
                    })
                }
            }

        }
        console.log('second running')
        console.log(isActivated)
        return () => {
            console.log('clearTimeout running')
            clearTimeout(runningInterval)
        }

    }, [second, isActivated])


    function pauseTimerHandler() {
        setIsActivated(!isActivated)
        setDisablePause(true)
        setDisableRun(false )
        setDisableReset(false)

    }

    function resetTimerHandler() {
        setSecond(0);
        setMinute(0);
        setHour(0);
        setIsActivated(false)
        setDisableRun(false)
        setDisablePause(true)
        setDisableReset(true)

    }

    function runTimerHandler() {
        setIsActivated(true)
        setDisableRun(true)
        setDisablePause(false)
        setDisableReset(false)


    }

    return (
        <Fragment>
            <h3> {hour}h :  {minute}m :  {second}s</h3>
            <button type='button' onClick={runTimerHandler} disabled={disableRun}>Run</button>
            <button type='button' onClick={pauseTimerHandler} disabled={disablePause}>Pause</button>
            <button type='button' onClick={resetTimerHandler} disabled={disableReset}>Reset</button>

        </Fragment>
    )
}

export default StopWatch;