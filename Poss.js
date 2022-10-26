import React, { useState, useRef } from "react";
import "./styles.css";
import { Po_si } from "./DropMenu.js";

export function Poss(props) {
    const InputOne = useRef()
    
    
    
  return props.words.map((P, index) => {
    
    /*
                            <div >
                                {P.poss}
                            </div>
                            <div>
                                <input type="text" name={P.poss} onChange={(e)=>e}/>
                            </div>
    */
            if ( (index) || index===0){
                    return (
                        <div className="i">
                            <div >
                                {P.phrase}
                            </div>
                            
                            <div>
                                
                                <input type="text" name={P.phrase} 
                                ref={InputOne}
                                defaultValue={props.PossPhrase_trl[index]}
                                onChange={ (e) => { 
                                    //e.target.value= e.target.value
                                    props.PossPhrase_trl[index] = e.target.value
                                    props.PossPhrase_trl2[index] = e.target.value
                                    props.PossPhrase_trl3[index] =  e.target.value
                                    console.log(InputOne.current.value)
                                } }
                                />
                            </div>
                            
                        </div>
                    )
            }

    })
  }

