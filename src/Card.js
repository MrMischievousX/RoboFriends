import React from "react";

const CardList = ({ id, username, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa2 ma3 grow bw2 shadow-5 tc">
      <img alt="" src={`https://robohash.org/${id}?size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default CardList;
