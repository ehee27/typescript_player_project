interface IProps {
  players: {
    name: string
    position: string
    url: string
    age?: number
    active: boolean
  }[]
}

const PlayerList = ({ players }: IProps) => {
  return (
    <div className="players-container">
      <h1>PlayerList</h1>
      <div className="list-box">
        {players.map(player => {
          return <div key={player.name}>{player.name}</div>
        })}
      </div>
    </div>
  )
}

export default PlayerList
