import React from "react";

interface Props {
    children: JSX.Element[] | JSX.Element;
    menu:number
  }

function ShoeContainer(props: Props) {

    return (
        <div className="container">
          {props.children}
        </div>
    )
  

  }
  
  export default ShoeContainer;
  