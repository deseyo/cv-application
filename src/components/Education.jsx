import { useState } from "react";
import FormSection from "../smaller/Form-Section";
import Preview from "../smaller/Preview";
import FinishButton from "../smaller/Finish-Button";

const Education = ({item}) => {
  const [content, setContent] = useState({current: '', paragraphs: [{school: 'Harvard University', location: 'Cambridge, USA', profession: 'Computer Science', time: 'Sep 2016 - May 2020', points: ['Your Point No. 1', 'Your Point No. 2']}]});

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
                    <FormSection childIndex={childIndex} value={child.school} name={'school'} placeholder={'e.g. Harvard University'} state={content} stateFunction={setContent}/>       
                    <FormSection childIndex={childIndex} value={child.location} name={'location'} placeholder={'e.g. Cambridge, USA'} state={content} stateFunction={setContent}/>       
                    <FormSection childIndex={childIndex} value={child.profession} name={'profession'} placeholder={'e.g. Computer Science'} state={content} stateFunction={setContent}/>       
                    <FormSection childIndex={childIndex} value={child.time} name={'time'} placeholder={'e.g. Sep 2016 - May 2020'} state={content} stateFunction={setContent}/>
                  </div>

                  <div className="points-cotainer">
                    {child.points.map((point, pointIndex) => {    
                      return (
                        <div className="point-container" key={pointIndex}>
                          <label className="label" htmlFor=""><div className="section-text">{pointIndex + 1}. Point</div></label>
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
            <div className="preview-name">Education</div>
            <div className="preview-underline"></div>
          </div>
          {content.paragraphs.filter(child => child.school !== '' && child.location !== '' && child.profession !== '' && child.time !== '').map((child, childIndex) => {
            return (
              <div className="preview-expierience-container" key={childIndex}>
                <div className="preview-organization-location-container">
                  <div className="preview-organization">{child.school}</div>
                  <div className="preview-location">{child.location}</div>
                </div>
                <div className="preview-profession-time-container">
                  <div className="preview-profession">{child.profession}</div>
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

export default Education;