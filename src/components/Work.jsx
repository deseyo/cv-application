import { useState } from "react";
import Preview from "../smaller/Preview";
import FormSection from "../smaller/Form-Section";
import Label from "../smaller/Label";
import FinishButton from "../smaller/Finish-Button";

const Work = ({item}) => {
  const [content, setContent] = useState({current: '', paragraphs: [{company: 'Google LLC.', location: 'Mountain View, USA', position: 'Full Stack Developer', time: 'May 2020 - Present', points: ['Your Point No. 1', 'Your Point No. 2']}]});

  return (
    <div className="component" key={item.key}>
      {item.editable === true && 
        <>
          <div className="section"><div className="section-text">Work Experience</div></div>
            {content.paragraphs.map((child, childIndex) => {
              return (
                <form className="form" key={childIndex} action="" onSubmit={(event) => event.preventDefault()}>
                  <div className="inputs-container">
                    <div className="count-container">
                      <div className="count"><div className="section-text">{childIndex + 1}. Experience</div></div>
                      <button className="remove-btn" onClick={() => {
                        const newArray = content.paragraphs;
                        newArray.splice(content.paragraphs.indexOf(child), 1);
                        setContent({...content, paragraphs: newArray});
                      }}>Remove <img className="remove-icon" src="../../public/remove-form.svg" alt=""/></button>
                    </div> 
                    <FormSection childIndex={childIndex} value={child.company} name={'company'} placeholder={'e.g. Google LLC.'} state={content} stateFunction={setContent}/>       
                    <FormSection childIndex={childIndex} value={child.location} name={'location'} placeholder={'e.g. Mountain View, USA'} state={content} stateFunction={setContent}/>       
                    <FormSection childIndex={childIndex} value={child.position} name={'position'} placeholder={'e.g. Full Stack Developer'} state={content} stateFunction={setContent}/>       
                    <FormSection childIndex={childIndex} value={child.time} name={'time'} placeholder={'e.g. May 2020 - Present'} state={content} stateFunction={setContent}/>
                  </div>

                  <div className="points-cotainer">
                    {child.points.map((point, pointIndex) => {    
                      return (
                        <div className="point-container" key={pointIndex}>
                          <Label>{pointIndex + 1}. Point</Label>
                          <input className="input point" type="text" name="point" value={point} onChange={(e) => {
                            const newArray = child.points;
                            newArray[pointIndex] = e.target.value;
                            const newChild = {...child, points: newArray};
                            const newParagraphs = content.paragraphs;
                            newParagraphs[childIndex] = newChild;
                            setContent({...content, paragraphs: newParagraphs})
                          }}/>
                          <button className="remove-point-btn" onClick={() => {
                            const newArray = child.points;
                            newArray.splice(pointIndex, 1);
                            const newChild = {...child, points: newArray};
                            const newParagraphs = content.paragraphs;
                            newParagraphs[childIndex] = newChild;
                            setContent({...content, paragraphs: newParagraphs})
                          }}><img className="remove-icon" src="../../public/remove-point.svg" alt="" /></button>
                        </div>
                      )
                    })}
                  </div>
                  <button className="new-point-btn" onClick={() => {
                    const newArray = child.points
                    child.points.push('');
                    console.log(newArray);
                    const newChild = {...child, points: newArray};
                    const newParagraphs = content.paragraphs;
                    newParagraphs[childIndex] = newChild;
                    setContent({...content, paragraphs: newParagraphs});
                  }}>Add Point <img className="add-point-btn" src="../../public/add-point.svg" alt="" /></button>
                </form>
              )
            })}
          <div className="edit-btns">
            <button className="new-form-btn" onClick={() => setContent({...content, paragraphs: [...content.paragraphs, {company: '', location: '', position: '', time: '', points: []}]})}>Add Work Experience</button>
            <FinishButton item={item}/>
          </div>
        </>
      }
      {item.editable === false &&
        <Preview item={item}>
          <div className="preview-header">
            <div className="preview-name">Work Experience</div>
            <div className="preview-underline"></div>
          </div>
          {content.paragraphs.filter(child => child.company !== '' && child.location !== '' && child.position !== '' && child.time !== '').map((child, childIndex) => {
            return (
              <div className="preview-expierience-container" key={childIndex}>
                <div className="preview-organization-location-container">
                  <div className="preview-organization">{child.company}</div>
                  <div className="preview-location">{child.location}</div>
                </div>
                <div className="preview-profession-time-container">
                  <div className="preview-profession">{child.position}</div>
                  <div className="preview-time">{child.time}</div>
                </div>
                <ul className="preview-points">
                  {child.points.filter(point => point !== '').map((point, index) => {
                    return <li className="preview-point" key={index}>{point}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </Preview>
      }
    </div>
  )
}

export default Work;