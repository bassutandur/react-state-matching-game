import React from 'react'

import './Tile.css'

const Tile = (tile) => {
  const color = props.selected || props.matched ? {backgroundColor: tile.color}: null;
  return (
    <div className='Tile' style={color}>
      {props.selected || props.matched ? <svg />: null}
    </div>
  )
}

export default Tile
