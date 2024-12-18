import { useState } from "react";
import Preview from "../smaller/Preview";
import FinishButton from "../smaller/Finish-Button";

const Position = ({item}) => {
  const [content, setContent] = useState('Full Stack Developer');

  return (
    <div className="component" key={item.key}>
      {item.editable === true && 
        <>
          <div className="section"><div className="section-text">Position Section</div></div>
          <form className="form" action="" onSubmit={(event) => event.preventDefault()}>
            <div className="form-section">
              <label className="label" htmlFor="position"><div className="section-text">Position</div></label>
              <input className="input" type="text" name="position" placeholder="e.g. Full Stack Developer" value={content} onChange={(e) => setContent(e.target.value)}/>
            </div>
          </form>
          <div className="edit-btns">
            <FinishButton item={item}/>
          </div>
        </>
      }
      {item.editable === false &&
        <Preview id="position" item={item}>
          <div className="position">{content}</div>
        </Preview>
      }
    </div>
  )
}

export default Position;