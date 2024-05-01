import React from "react";

const Card = (p) => {
  return (
    <div style={ { minWidth : "80%" , marginBottom : "20px" , maxWidth : "80%"}}>
      <div class="card">
        <h5 class="card-header" style={{fontWeight : "bolder"}}>{p.title}</h5>
        <div class="card-body">
          <h5 class="card-title " style={{color : "blue"}}>{p.domain}</h5>
          <p class="card-text">
            {p.desc}
          </p>
          <a href={p.link} target="_blank" class="btn btn-primary">
            Open
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
