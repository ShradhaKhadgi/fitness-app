import React from "react";
import {YogaData} from "./Data";
import Card from './Card';
const Yoga = () =>(
  <>
        {YogaData.map((val) => {
      return(
    <Card
      id={val.id}
      title={val.title}
      img={val.img}
      desc={val.desc}
    />
  );
    })}
    </>
);
export default Yoga;