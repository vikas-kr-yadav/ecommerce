import React from "react";
import Cards from "./Cards";
import "./Container.css";
import list from "./data";

const Container = ({name,handleClick}) => {
 

  return (
    <div id={name}>
      <div>
        <h2>
          {name}{" "}
          <span class="material-symbols-outlined">arrow_forward_ios</span>{" "}
        </h2>
      </div>
      <div className="container_wrapper">
    
        {
        list.map((items)=>(
        <Cards items={items} key={items.id} handleClick={handleClick}/>
        ))
        }
      
      </div>
    </div>
  );
};

export default Container;
