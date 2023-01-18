
import { useState } from "react";
import data from "../helpers/data";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";

const AccordionList = () => {
   
const [show, setShow] = useState(false);

console.log(data)

const toggle = (index) => {
    if (show=== index){
        return setShow(null)
    }

    setShow(index)
    console.log(index);
};

 
  return (
    <div className="container">
    {data.map((item, index) => {
    const { question, info } = item;
        return (
            <div key={index}>
      <header className="başlık">
        <div className="title">
          
          <h4>{question}</h4>
          
            <button className="btn " onClick={() => toggle(index)}>
              {show === index ? (
                <TiMinus fontSize={15} />
              ) : (
                <TiPlusOutline fontSize={15} />
              )}
            </button>
         
        </div>
      </header>
      {show === index ? <p className="info">{info}</p> : null}
    </div>

        )
              }
    
  )
              }
              

     </div> 

)};

export default AccordionList;


