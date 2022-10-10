import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const color = props.selected || props.matched ? {backgroundColor: props.color}: null;
  const svg = <props.svg style={{fontSize: '4em', }}/>
  return (
    <div className='Tile' style={color}>
      {props.selected || props.matched ? svg: null}
    </div>
  )
}

export default Tile
