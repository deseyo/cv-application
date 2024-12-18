export default function FormSection({childIndex, value, name, label=name.charAt(0).toUpperCase() + name.slice(1), placeholder, state, stateFunction}) {
  return (
    <div className="form-section">
      <label className="label" htmlFor={name}><div className="section-text">{label}</div></label>
      <input className="input" type="text" name={name} placeholder={placeholder} value={value} onChange={(e) => {
        const newArray = state.paragraphs;
        newArray[childIndex][name] = e.target.value;
        stateFunction({...state, paragraphs: newArray})
      }}/>
    </div>
  )
}