import React from 'react'
import { useAppContext } from '../../context'
//import { keys } from "../utils/thesarusScales" //I would iterate over them, but the optgroups are nice

const styles = {
  marginBottom: 20
}

export default () => {
  const { state, dispatch } = useAppContext()

  return (
    <select
      onChange={e => dispatch({ type: 'TOGGLE_MODE', payload: e.target.value })}
      value={state.mode}
      style={styles}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <optgroup label="MajorModes">
        <option value="Ionian">Ionian</option>
        <option value="Dorian">Dorian</option>
        <option value="Phrygian">Phrygian</option>
        <option value="Lydian">Lydian</option>
        <option value="Mixolydian">Mixolydian</option>
        <option value="Aeolian">Aeolian</option>
        <option value="Locrian">Locrian</option>
      </optgroup>
      <optgroup label="OtherModes">
        <option value="Blues">Blues</option>
        <option value="Superlocrian">Superlocrian</option>
        <option value="LydianDominant">LydianDominant</option>
        <option value="FifthModeHarmonicMinor">FifthModeHarmonicMinor</option>
      </optgroup>
      <optgroup label="EightNoteScales">
        <option value="MinorBebop">MinorBebop</option>
        <option value="SousaBebop">SousaBebop</option>
        <option value="Diminished">Diminished</option>
      </optgroup>
b
    </select>
  )
}