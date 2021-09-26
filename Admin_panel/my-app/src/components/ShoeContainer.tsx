import React from "react";

interface Props {
    children: JSX.Element[] | JSX.Element;
    menu:number
  }

function ShoeContainer(props: Props) {
  if(props.menu ==0){
    return (
        <div className="container">
          {props.children}
        </div>
    )
  }
  else{
    return(
      <div className="container--block">
          {props.children}
        </div>
    )
  }
  }
  
  export default ShoeContainer;
  