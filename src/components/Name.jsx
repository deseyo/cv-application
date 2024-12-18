import { useState } from "react";
import Preview from "../smaller/Preview";
import FinishButton from "../smaller/Finish-Button";

const Name = ({item}) => {
  const [content, setContent] = useState({forename: 'Forename', surname: 'Surname'});

  return (
    <div className="component" key={item.key}>
      {item.editable === true && 
        <>
          <div className="section"><div className="section-text">Name Section</div></div>
          <form className="form" action="" onSubmit={(event) => event.preventDefault()}>
            <div className="form-section">
              <label className="label" htmlFor="forename"><div className="section-text">forename</div></label>
              <input className="input" type="text" name="forename" placeholder="Forename" value={content.forename} onChange={(e) => setContent({...content, forename: e.target.value})}/>
            </div>
            <div className="form-section">
              <label className="label" htmlFor="surname"><div className="section-text">surname</div></label>
              <input className="input" type="text" name="surname" placeholder="Surname" value={content.surname} onChange={(e) => setContent({...content, surname: e.target.value})}/>
            </div>
          </form>
          <div className="edit-btns">
            <FinishButton item={item}/>
          </div>
        </>
      }
      {item.editable === false && 
        <Preview id="name" item={item}>
          <div className="forename">{content.forename}</div>
          <div className="surname">{content.surname}</div>
        </Preview>
      }
    </div>
  )
}

export default Name;