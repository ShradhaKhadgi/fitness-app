import React from "react";
import Card from './Card';
import {StrengthData} from './Data';
const Strenth = () =>
(
<>
        {StrengthData.map((val) => {
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
export default Strenth;