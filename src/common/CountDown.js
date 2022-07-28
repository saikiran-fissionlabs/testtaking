import React, { Component } from 'react'

export default class 
CountDown extends Component {
    state = {
        minutes: 15,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        const mystyle = {
            textAlign: "center",
            color: "white",
            backgroundColor: "#CD1414",
            padding: "5px",
            width: "80px",
            marginLeft: "40px",
            fontWeight: "700",
            borderRadius: "40px",
          };
        return (
            <div style={mystyle}>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <span>{minutes} : {seconds < 10 ? `0${seconds}` : seconds} s</span>
                }
            </div>
        )
    }
}