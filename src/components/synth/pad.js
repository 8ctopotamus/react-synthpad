import React from 'react'

export default ({ letter, note, color, playSound }) => {
  
  const styles = {
    width: 100,
    height: 100,
    borderRadius: 8,
    background: color,
    cursor: 'pointer',
  }

  return (
    <button onClick={() => playSound(letter)} style={styles}>{note}</button>
  )
}
