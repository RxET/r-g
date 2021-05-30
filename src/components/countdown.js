import React from "react"
import countdown from "countdown"
import "./countdown.css"

const weddingDay = new Date("May 20, 2022 18:30:00")
const counting = countdown(null, weddingDay)

const Countdown = () => (
  <div className="countdown">
    <h4 className="months">{counting.months} months</h4>
    <h4 className="days">{counting.days} days</h4>
    <h4 className="hours">{counting.hours} hours</h4>
    <h4 className="minutes">{counting.minutes} minutes</h4>
  </div>
)

export default Countdown
