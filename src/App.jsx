import { useState } from 'react'

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral

  if (total === 0) {
    return <p>No feedback given yet</p>
  }

  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <div>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>All: {total}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positive.toFixed(1)}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  )

  const handleGoodbutton = () => setGood(good + 1)
  const handleBadButton = () => setBad(bad + 1)
  const handleNeutralButton = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodbutton} text="good" />
      <Button onClick={handleBadButton} text="bad" />
      <Button onClick={handleNeutralButton} text="neutral" />

      <h2>statistics</h2>

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  )
}

export default App