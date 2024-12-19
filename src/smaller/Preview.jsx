import { useState } from "react";
import { useComponentsStateContext } from "../Context";

const Preview = ({id="", item, children}) => {
  const [deleteTimer, setDeleteTimer] = useState(null);
  const [styleTimer, setStyleTimer] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [components, setComponents] = useComponentsStateContext();

  function handleMouseDown() {
    setStyleTimer(setTimeout(() => {
      setIsActive(true);
    }, 100))
    setDeleteTimer(setTimeout(() => {
      const newArray = [...components];
      newArray.splice(components.indexOf(components.find(component => component.key === item.key)), 1);
      setComponents(newArray);
    }, 1000))
  }

  function handleHoldTimer() {
    if (deleteTimer) {
      clearTimeout(styleTimer);
      clearTimeout(deleteTimer);
      setStyleTimer(null);
      setDeleteTimer(null);
      setIsActive(false);
    }
  }

  function handleClick() {
    const newArray = [...components];
    newArray[newArray.indexOf(newArray.find(component => component.key === item.key))].editable = true;
    setComponents(newArray);
  }

  return (
    <div id={id} className={`preview ${isActive ? "remove-active" : ""}`} onClick={handleClick}  onMouseDown={handleMouseDown} onMouseUp={handleHoldTimer} onMouseLeave={handleHoldTimer}>
      {children}
    </div>
  )
}

export default Preview