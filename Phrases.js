import React, { useState, useRef } from "react";
import "./styles.css";
import { Po_si } from "./DropMenu.js";

export function Phrases(props) {
    const InputOne = useRef()
    
    
    let ev=""

  return props.words.map((P, index) => {
                    return (
                        <div className="i">
                            <div>
                                <div >
                                    {P}
                                </div>
                                
                                <div>
                                    
                                    <input type="text" name={P} id={P}
                                    ref={InputOne}
                                    defaultValue={props.Phrase_trl[index]}
                                    onChange={ (e) => { 
                                        ev= e.target.value
                                        //props.setPhrase_trl( (prevPhrase)=> prevPhrase[index] = ev )
                                        console.log("tripping")
                                        //props.setPhrase_trl(prev => prev[index] = e.target.value)
                                        props.Phrase_trl[index] = ev
                                        document.getElementById(P).value=props.Phrase_trl[index]
                                        props.setPhrase_trl(props.Phrase_trl)
                                        //InputOne.current.value= e.target.value
                                        console.log("Phrase")
                                        console.log(props.Phrase_trl)
                                    } }
                                    />
                                </div>
                                
                            </div>
                        </div>
                    )

    })
}
