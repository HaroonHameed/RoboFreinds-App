import React, { Component } from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  const cardArray = robots.map((user, i) => {
    return (
      <Card
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        key={i}
      ></Card>
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
