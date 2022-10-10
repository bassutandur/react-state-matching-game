import React from 'react'
import Tile from "../Tile/Tile"
import './Board.css';

const Board = (props) => {
const tiles = props.map((tile)=> {
  return <Tile tile={...tile}/>
})
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {tiles}
    </div>
  )
}

export default Board
