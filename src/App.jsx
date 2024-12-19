import { useState, useEffect } from "react";
import { ComponentsStateContext } from "./Context";
import Name from "./components/Name";
import About from "./components/About"
import Position from "./components/Position";
import Skills from "./components/Skills";
import Links from "./components/Links";
import Education from "./components/Education";
import Work from "./components/Work";
import './App.css';

const App = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [components, setComponents] = useState([{name: 'name', key: 0, editable: false}, {name: 'position', key: 1, editable: false}, {name: 'links', key: 2, editable: false}, {name: 'skills', key: 3, editable: false}, {name: 'work', key: 4, editable: false}, {name: 'education', key: 5, editable: false}, {name: 'about', key: 6, editable: false}])
  const [index, setIndex] = useState(7)
  const [readyToPrint, setReadyToPrint] = useState(false)
  const [showInfo, setShowInfo] = useState(false);
  
  function handleClickWindow(stateFunction, stateVariable) {
    stateFunction(!stateVariable);
  }

  function handleClickComponent(name) {
    const newChild = {
      name: name,
      key: index,
      editable: false
    }

    setComponents([...components, newChild]);
    setIndex(index + 1);
    setShowWindow(false);
  }

  useEffect(() => {
    if (readyToPrint === true) {
      window.print();
      setReadyToPrint(false);
    }
  }, [readyToPrint]);


  return (
    <ComponentsStateContext.Provider value={[components, setComponents]}>
      {showInfo && 
        <div className="info-container">
         <div className="info-window">
            <div className="info-header-one">Information</div>
            <div className="info-description">This app was made to learn crucial React&apos;s concepts.</div>
            <div className="info-header-two">How To Use</div>
            <ul className="info-instructions">
              <li className="info-instruction">
                <div className="info-instruction-name">
                  <img className="info-instruction-icon" src="../../public/instructions/add.svg" alt="" />
                  Add
                </div>
                <div className="info-instruction-description">Click Add Section dropdown menu to add new section of your CV. Duplicates are allowed.</div>
              </li>
              <li className="info-instruction">
                <div className="info-instruction-name">
                  <img className="info-instruction-icon" src="../../public/instructions/edit.svg" alt="" />
                  Edit
                </div>
                <div className="info-instruction-description">Click the section that you want to edit. Now you are entering edit mode. When you are ready to finish click Done button.</div>
              </li>
              <li className="info-instruction" style={{borderBottom: 'none'}}>
                <div className="info-instruction-name">
                  <img className="info-instruction-icon" src="../../public/instructions/remove.svg" alt="" />
                  Delete
                </div>
                <div className="info-instruction-description">Hold the section that you want to remove with your mouse left click for 1.5s and it will magically disappear.</div>
              </li>
            </ul>
           <button className="info-close-btn" onClick={() => handleClickWindow(setShowInfo, showInfo)}>Close</button>
         </div>
       </div>
      }
      <div className="info-nav">
        <button className="info-nav-btn" onClick={() => handleClickWindow(setShowInfo)}>
          Info
          <img className="info-nav-icon" src="../../public/info.svg" alt="" />
        </button>
      </div>
      <div className="page-btns">
        <button className="page-btn" onClick={() => setComponents([{name: 'name', key: 0, editable: false}, {name: 'position', key: 1, editable: false}, {name: 'links', key: 2, editable: false}, {name: 'skills', key: 3, editable: false}, {name: 'work', key: 4, editable: false}, {name: 'education', key: 5, editable: false}, {name: 'about', key: 6, editable: false}])}>Reset Examples</button>
        <button className="page-btn" onClick={() => {
          setComponents(components.map(component => ({...component, editable: false})));
          setReadyToPrint(true);
        }}>Preview</button>
        <button className="page-btn" onClick={() => setComponents([])}>Clear Paper</button>
      </div>
      <div className="page">
        {components.map(child => {
          if (child.name === 'name') return <Name key={child.key} item={child}/>
          else if (child.name === 'about') return <About key={child.key} item={child}/>
          else if (child.name === 'position') return <Position key={child.key} item={child}/>
          else if (child.name === 'skills') return <Skills key={child.key} item={child}/>
          else if (child.name === 'links') return <Links key={child.key} item={child}/>
          else if (child.name === 'education') return <Education key={child.key} item={child}/>
          else if (child.name === 'work') return <Work key={child.key} item={child}/>
        })}
        <div className="new-component-btn-container">
          <button className="new-component-btn" onClick={() => handleClickWindow(setShowWindow, showWindow)}>+ Add Section</button>
          {
          !!showWindow &&
          <div className="new-component-window">
            <button className="component-btn" onClick={() => handleClickComponent('name')}>Name</button>
            <button className="component-btn" onClick={() => handleClickComponent('links')}>Links</button>
            <button className="component-btn" onClick={() => handleClickComponent('work')}>Work Expierience</button>
            <button className="component-btn" onClick={() => handleClickComponent('skills')}>Skills</button>
            <button className="component-btn" onClick={() => handleClickComponent('about')}>About Me</button>
            <button className="component-btn" onClick={() => handleClickComponent('position')}>Position</button>
            <button className="component-btn" onClick={() => handleClickComponent('education')}>Education</button>
          </div>
        }
        </div>
      </div>
    </ComponentsStateContext.Provider>
  )
}

export default App;