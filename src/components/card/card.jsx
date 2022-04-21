import React from "react";
import "./card.css";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  const item = props.phim;
  
  const moveToSupPase = () => {
    history.push(`/movie/${item.id}`);
  };

  return (
    <div className="itemcard" onClick={moveToSupPase}>
      <div className="card-img">
        <img src={item.anh} alt="" />
      </div>
      <div className="card-name">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
};
export default Card;
