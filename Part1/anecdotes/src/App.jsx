import { useState } from 'react'

const Button = ({handler, text}) => {
  return (
    <button onClick = {handler}>{text}</button>
  )
}

const Anecdote = ( {text, vote} ) => {
  return (
    <div>
      {text}<br/>
      has {vote} votes
    </div>
  )
}

const HighestAnecdote = ( {votes, anecdotes} ) => {
  let maxIdx = 0
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] > votes[maxIdx]) {
      maxIdx = i
    }
  }
  return (
    <div>
      {anecdotes[maxIdx]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const voteClick = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const nextClick = () => {
    const updatedSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(updatedSelected)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text = {anecdotes[selected]} vote = {votes[selected]}></Anecdote>
      <Button handler = {voteClick} text = {'vote'}></Button>
      <Button handler = {nextClick} text = {'next anecdote'}></Button>

      <h1>Anecdote with most votes</h1>
      <HighestAnecdote votes = {votes} anecdotes = {anecdotes}></HighestAnecdote>
    </div>
  )
}

export default App