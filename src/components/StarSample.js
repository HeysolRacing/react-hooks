import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";

const createArray = (length) => [
    ...Array(length)
];

const Star= ({ selected = false, onSelect}) => {
    return (
      <FaStar 
        color={selected ? "red" : "gray"}
        onClick={onSelect}>
      </FaStar>
    );
};

const StarRating = ({totalStars = 5}) => {
    const[selectedStars,
          setselectedStars] = useState(0);
   
    return(
      <>
        {createArray(totalStars).map((n,i) => (
         <Star 
            key={i} 
            selected={selectedStars > i}
            onSelect={() => setselectedStars(i + 1)}
        />
        ))
        }
        <p>Stars selected : {selectedStars} of {totalStars}</p>
      </>
    );
}
  
const StarSample = () => {
  return(
    <div>
      <h3>Star Example</h3>
      <StarRating totalStars={5}/>
    </div>
  )
}

export default StarSample;
