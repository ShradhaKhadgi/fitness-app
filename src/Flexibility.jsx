import React from "react";
import { FlexData } from "./Data";
import Card from './Card';
const Flexibility = () =>
(
    <>
        {FlexData.map((val) => {
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
export default Flexibility;