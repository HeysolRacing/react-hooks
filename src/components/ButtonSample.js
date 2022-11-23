import React, {useState} from 'react';

const ButtonSample = () => {
    const [status, setStatus] = useState("Not Delivered");
    return(
    <div>
      <h3>Buton Example</h3>
      <h4>The package is : {status}. </h4>
      <button onClick={() => setStatus("Delivered")}>
        Deliver
      </button>    
    </div>
  )
}

export default ButtonSample;
