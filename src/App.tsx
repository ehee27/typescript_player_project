import React, { useState } from 'react'
import './App.css'
import PlayerList from './components/PlayerList'

interface IState {
  players: {
    name: string
    position: string
    url: string
    age?: number
    active: boolean
  }[]
}

function App() {
  const [players, setPlayers] = useState<IState['players']>([])

  const result = players.map(player => {
    return <h3>{player.age}</h3>
  })

  return (
    <div className="App">
      <h1>Player Roster</h1>
      <PlayerList players={players} />
    </div>
  )
}

export default App

// {
//   name: 'Patrick Mahomes',
//   postion: 'QB',
//   url: '',
//   age: 27,
//   active: true,
// },
// {
//   name: 'Josh Allen',
//   postion: 'QB',
//   url: '',
//   age: 26,
//   active: true,
// },
// {
//   name: 'Joe Burrow',
//   postion: 'QB',
//   url: '',
//   age: 25,
//   active: true,
// },
