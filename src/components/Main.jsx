import React from 'react'
import AccordionList from "./AccordionList"
const Main = ({data}) => {
  return (
    <div>
        
        {
            data.map((item)=>{
                return <AccordionList key={item.id} {...item} />;
            })
        }
       
    </div>
  )
}

export default Main