import { useState } from "react";
import Preview from "../smaller/Preview";
import FinishButton from "../smaller/Finish-Button";

const Links = ({item}) => {
  const [content, setContent] = useState({email: 'youremail@example.com', address: '1234 Random Street, Los Angeles, California', phone: '+111 222 333 444'});

  return (
    <div className="component" key={item.key}>
      {item.editable === true && 
        <div className="point-container">
          <div className="section"><div className="section-text">Name Section</div></div>
          <form className="form" action="" onSubmit={(event) => event.preventDefault()}>
            <div className="form-section">
              <label className="label" htmlFor="email"><div className="section-text">Email</div></label>
              <input className="input" type="text" name="email" placeholder="eg. youremail@example.com" value={content.email} onChange={(e) => setContent({...content, email: e.target.value})}/>
            </div>
            <div className="form-section">
              <label className="label" htmlFor="address"><div className="section-text">Address</div></label>
              <input className="input" type="text" name="address" placeholder="eg. 1234 Random Street, Los Angeles, California" value={content.address} onChange={(e) => setContent({...content, address: e.target.value})}/>
            </div>
            <div className="form-section">
              <label className="label" htmlFor="phone"><div className="section-text">Phone</div></label>
              <input className="input" type="text" name="phone" placeholder="eg. +111 222 333 444" value={content.phone} onChange={(e) => setContent({...content, phone: e.target.value})}/>
            </div>
          </form>
          <div className="edit-btns">
            <FinishButton item={item}/>
          </div>
        </div>
      }
      {item.editable === false && 
        <Preview item={item}>
          <div className="links-container">
            <div className="link-container">
              <img className="link-icon" src="../../public/email.svg" alt="" />
              <div className="link-text">{content.email}</div>
            </div>
            <div className="link-container">
            <img className="link-icon" src="../../public/adress.svg" alt="" />
              <div className="link-text">{content.address}</div>
            </div>
            <div className="link-container">
              <img className="link-icon" src="../../public/phone.svg" alt="" />
              <div className="link-text">{content.phone}</div>
            </div>
          </div>
        </Preview>
      }
    </div>
  )
}

export default Links;