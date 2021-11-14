import React, { useState } from "react";
const Card = (props) =>
{
    const [openDetails, setDetails] = useState(false);
    
    return(
        <>
        <div className="card" key={props.id}>       
            <img src={props.img} alt="Fitness"/>
            <h2 className="card_title">{props.title}</h2>
            <div class="button_style">
            <button onClick={()=>{setDetails(true);}}>Learn more</button>
            </div>
        </div>
        {openDetails && 
            <div className="main">
            <div className="container">
                <img src={props.img} alt="Fitness" className="cont_img"/>
                <div className="content">
                <h2 className="cont_heading">{props.title}</h2>
                <p className="cont_para">{props.desc}</p>
                <button onClick={()=>setDetails(false)}>Let's Do it</button>
                </div>
            </div>
            </div>
        }
        </>
    );
    }
export default Card;