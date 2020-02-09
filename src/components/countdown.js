import React from "react"
import countdown from "countdown"

const weddingDay = new Date('September 12, 2020 18:30:00');
const counting = countdown(null, weddingDay)

const Countdown = () => (
  <div>
    <h2 className="months">{counting.months} months</h2>
    <h2 className="days">{counting.days} days</h2>
    <h2 className="hours">{counting.hours} hours</h2>
  </div>
)

export default Countdown
