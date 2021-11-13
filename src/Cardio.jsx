import React from "react";
import { CardioData } from "./Data";
import Card from "./Card";
const Cardio = () =>(
        <>
        {CardioData.map((val) => {
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
export default Cardio;