import { useState } from "react";
import Preview from "../smaller/Preview";
import Label from "../smaller/Label";
import FinishButton from "../smaller/Finish-Button";

const Skills = ({item}) => {
  const [content, setContent] = useState({current: '', skills: ['piano', 'programming', 'public speaking']});

  return (
    <div className="component" key={item.key}>
      {item.editable === true && 
        <div className="edit-container">
          <div className="skills-cotainer">
            <div className="section"><div className="section-text">Skills</div></div>
            <form className="form"  action="" onSubmit={(event) => event.preventDefault()}>
              {content.skills.map((child, index) => {
                return (
                  <div className="skill-container" key={index}>
                    <Label>{index + 1}. Skill</Label>
                    <input className="input" type="text" value={child} onChange={(e) => {
                      const newArray = content.skills;
                      newArray[index] = e.target.value;
                      setContent({...content, skills: newArray})
                    }}/>
                    <button className="remove-point-btn" onClick={() => {
                      const newArray = content.skills;
                      newArray.splice(content.skills.indexOf(child), 1);
                      setContent({...content, skills: newArray});
                    }}><img className="remove-icon" src="../../public/remove-point.svg" alt="" /></button>
                  </div>
                )
              })}
              <div className="edit-btns">
                <button className="new-form-btn" onClick={() => setContent({...content, skills: [...content.skills, '']})}>Add Skill</button>
                <FinishButton item={item}/>
              </div>
            </form>
          </div>
        </div>
      }
      {item.editable === false &&
        <Preview item={item}>
          <div className="preview-header">
            <div className="preview-name">Skills</div>
            <div className="preview-underline"></div>
          </div>
          <ul className="preview-skills">
            {content.skills.filter(child => child !== '').map((child, index) => {
              return (
                <li className="preview-skill" key={index}>{child}</li>
              )
            })}
          </ul>
        </Preview>
      }
    </div>
  )
}

export default Skills;