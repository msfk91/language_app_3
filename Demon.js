import React, { useState, useRef } from "react";
import "./styles.css";
import { Po_si } from "./DropMenu.js";

export function Demon(props) {
    const InputOne = useRef()
    
    
    
  return props.words.map((P, index) => {
    
            if ( (index) || index===0){
                    return (
                        <div className="i">
                            <div >
                                {P}
                            </div>
                            
                            <div>
                                
                                <input type="text" name={P} 
                                ref={InputOne}
                                defaultValue={props.DemonPhrase_trl[index]}
                                onChange={ (e) => { 
                                    //e.target.value= e.target.value
                                    props.DemonPhrase_trl[index] = e.target.value
                                    props.DemonPhrase_trl2[index] = e.target.value
                                    console.log(InputOne.current.value)
                                } }
                                />
                            </div>
                            
                        </div>
                    )
            }

    })
  }
