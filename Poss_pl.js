import React from "react";
import "./styles.css";
//import { Po_pl } from "./Fill_Poss_Buttons.js";

export function Poss_pl(props) {
  

  return props.words_pl.map((P, index) => {
    return (
        <div className="x">
            <div >
                {P.poss}
            </div>
            <div>
                    <input type="text" name={P.poss}  />
            </div>
            <div >
                {P.phrase}
            </div>
            <div>
                    <input type="text" name={P.phrase} 
                    defaultValue={props.PossPhrase_pl_trl}
                    onChange={ (e) => props.setPossPhrase_pl_trl(e.target.value)}/>
            </div>
            
        </div>    
    );
  });
}
