import React, {useState} from 'react';

const CheckBoxSample = () => {
  const [checked, setChecked] = useState(false);
  return(
    <div>
      <h3>Checkbox Example</h3>
      <input
        type="checkbox" 
        value={checked}
        onChange={() => setChecked(checked =>!checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  )
}

export default CheckBoxSample;
