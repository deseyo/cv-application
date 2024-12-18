import Preview from "../smaller/Preview";
import { useState } from "react";

function Test({item, components, setComponents}) {
  const [editable, setEditable] = useState(false);

  return (
    <div key={item.key} className="component">
      <Preview editable={editable} setEditable={setEditable} item={item} components={components} setComponents={setComponents}>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Preview>
    </div>
  )
}

export default Test;