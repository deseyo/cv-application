import { useState } from "react";

const Education = ({item}) => {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState({current: '', paragraphs: [{school: 'Harvard University', location: 'Cambridge, USA', profession: 'Computer Science', time: 'Sep 2016 - May 2020'}]});

  return (
    <div className="component" key={item.key}>
      {editable === true && 
        <>
          <div className="section"><div className="section-text">Education</div></div>
          {content.paragraphs.map((child, index) => {
            return (
              <form className="form" key={index} action="" onSubmit={(event) => event.preventDefault()}>
                <div className="count-container">
                  <div className="count"><div className="section-text">{index + 1}. Education</div></div>
                  <button className="remove-btn" onClick={() => {
                    const newArray = content.paragraphs;
                    newArray.splice(content.paragraphs.indexOf(child), 1);
                    setContent({...content, paragraphs: newArray});
                  }}>Remove <img className="remove-icon" src="../../public/remove-form.svg" alt=""/></button> 
                </div>
                <div className="form-section">
                  <label className="label" htmlFor="school"><div className="section-text">School</div></label>
                  <input className="input" type="text" name="school" placeholder="e.g. Harvard University" value={child.school} onChange={(e) => {
                    const newArray = content.paragraphs;
                    newArray[index].school = e.target.value;
                    setContent({...content, paragraphs: newArray})
                  }}/>
                </div>
                <div className="form-section">
                  <label className="label" htmlFor="location"><div className="section-text">Location</div></label>
                  <input className="input" type="text" name="location" placeholder="e.g. Cambridge, USA" value={child.location} onChange={(e) => {
                    const newArray = content.paragraphs;
                    newArray[index].location = e.target.value;
                    setContent({...content, paragraphs: newArray})
                  }}/>
                </div>
                <div className="form-section">
                  <label className="label" htmlFor="profession"><div className="section-text">Profession</div></label>
                  <input className="input" type="text" name="profession" placeholder="e.g. Computer Science" value={child.profession} onChange={(e) => {
                    const newArray = content.paragraphs;
                    newArray[index].profession = e.target.value;
                    setContent({...content, paragraphs: newArray})
                  }}/>
                </div>
                <div className="form-section">
                  <label className="label" htmlFor="time"><div className="section-text">Time</div></label>
                  <input className="input" type="text" name="time" placeholder="e.g. Sep 2020 - May 2024" value={child.time} onChange={(e) => {
                    const newArray = content.paragraphs;
                    newArray[index].time = e.target.value;
                    setContent({...content, paragraphs: newArray})
                  }}/>
                </div>
              </form>
            )
          })}
          <div className="edit-btns">
            <button className="new-form-btn" onClick={() => setContent({...content, paragraphs: [...content.paragraphs, {school: '', location: '', profession: '', time: ''}]})}>Add Education</button>
            <button className="finish-btn" onClick={() => {
              setEditable(!editable);
              setContent({...content, paragraphs: content.paragraphs.filter(child => child.school !== '' && child.location !== '' && child.profession !== '' && child.time !== '')});
            }}>Finish</button>
          </div>
        </>
      }
      {editable === false &&
        <div className="preview" id="education" onClick={() => setEditable(!editable)}>
          <div className="preview-name">Education</div>
          {content.paragraphs.map((child, index) => {
            return (
              <div className="preview-expierience-container" key={index}>
                <div className="preview-organization-location-container">
                  <div className="preview-organization">{child.school}</div>
                  <div className="preview-location">{child.location}</div>
                </div>
                <div className="preview-profession-time-container">
                  <div className="preview-profession">{child.profession}</div>
                  <div className="preview-time">{child.time}</div>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Education;