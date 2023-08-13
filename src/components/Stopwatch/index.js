/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {isTimeRunning: false, timeInElapsedTime: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onStart = () => {
    this.time = setInterval(this.onUpdateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  onStop = () => {
    clearInterval(this.time)
    this.setState({isTimeRunning: false})
  }

  onReset = () => {
    this.setState({isTimeRunning: false, timeInElapsedTime: 0})
  }

  onUpdateTime = () => {
    this.setState(prevState => ({
      timeInElapsedTime: prevState.timeInElapsedTime + 1,
    }))
  }

  onTimeMinute = () => {
    const {timeInElapsedTime} = this.state
    const minute = Math.floor(timeInElapsedTime / 60)

    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  onTimeSecond = () => {
    const {timeInElapsedTime} = this.state
    const second = Math.floor(timeInElapsedTime % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  render() {
    const {isTimeRunning} = this.state
    const runTime = `${this.onTimeMinute()}:${this.onTimeSecond()}`
    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stop Watch</h1>
          <div className="timer-container">
            <div className="time">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="clock"
                className="clock"
              />
              <p>Timer</p>
            </div>
            <p className="timing">{runTime}</p>
            <div>
              <button
                type="button"
                onClick={this.onStart}
                className="start"
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button type="button" onClick={this.onStop} className="stop">
                Stop
              </button>
              <button type="button" onClick={this.onReset} className="reset">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
