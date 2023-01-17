
import { useEffect } from "react";
import { useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

const AccordionList = ({ id,question, info }) => {
const [show, setShow] = useState(false);
const [göster, setGöster]=useState(false)


const handleclick = () => {
  setShow(!show);
  setGöster(!göster)
    
}



  return (
    <div className="sorulistesi">
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={handleclick}>
          {show ? <TiMinus fontSize={15} /> : <TiPlusOutline fontSize={15} />}
        </button>
      </header>
      {show && <p >{info}</p>}
    </div>
  );
};

export default AccordionList;


