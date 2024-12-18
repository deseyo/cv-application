import { useState } from "react";
import Preview from "../smaller/Preview";
import Label from "../smaller/Label";
import FinishButton from "../smaller/Finish-Button";

const About = ({item}) => {
  const [content, setContent] = useState({current: '', paragraphs: ['Hello my name is Deseyo', 'I am self-taught developer with wide range of ineterests', 'I hope that this project will it\'s serve purpose', 'It\'s a part of react learning process']});

  return (
    <div className="component" key={item.key}>
      {item.editable === true && 
        <div className="paragraphs-cotainer">
          <div className="section"><div className="section-text">About Me</div></div>
          <form className="form" action="" onSubmit={(event) => event.preventDefault()}>
            {content.paragraphs.map((child, index) => {
              return (
                <div className="paragraph-container" key={index}>
                  <Label>{index + 1}. Paragraph</Label>
                  <input className="input" type="text" value={child} onChange={(e) => {
                    const newArray = content.paragraphs;
                    newArray[index] = e.target.value;
                    setContent({...content, paragraphs: newArray})
                  }}/>
                  <button className="remove-point-btn"  onClick={() => {
                    const newArray = content.paragraphs;
                    newArray.splice(content.paragraphs.indexOf(child), 1);
                    setContent({...content, paragraphs: newArray});
                  }}><img className="remove-icon" src="../../public/remove-point.svg" alt="" /></button>
                </div>
              )
            })}
            <div className="edit-btns">
              <button className="new-form-btn" onClick={() => setContent({...content, paragraphs: [...content.paragraphs, '']})}>Add Paragraph</button>
              <FinishButton item={item}/>
            </div>
          </form>
        </div>
      }
      {item.editable === false &&
        <Preview item={item}>
          <div className="preview-header">
            <div className="preview-name">About Me</div>
            <div className="preview-underline"></div>
          </div>
          <div className="preview-paragraphs">
            {content.paragraphs.filter(child => child !== '').map((child, index) => {
              return (
                <div className="preview-paragraph" key={index}>{child}</div>
              )
            })}
          </div>
        </Preview>
      }
    </div>
  )
}

export default About;