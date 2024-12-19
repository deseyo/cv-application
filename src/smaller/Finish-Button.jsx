import { useComponentsStateContext } from "../Context";

const FinishButton = ({item}) => {
  const [components, setComponents] = useComponentsStateContext();

  function handleClick() {
    const newArray = [...components];
    newArray[newArray.indexOf(newArray.find(component => component.key === item.key))].editable = false;
    setComponents(newArray);
  }

  return (
    <button className="finish-btn" onClick={handleClick}>Finish</button>
  )
}

export default FinishButton;