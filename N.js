import React, {useState} from "react";
import "./styles.css";







export function N(props) {
                let ev=''
                return (
                    <div>                    
                        <div>{ props.n }</div>
                            <div>
                                <input type="text" name={ props.n }  
                                onChange={ (e) => 
                                    [   ev=e.target.value,
                                        props.setN_trl( ev ), 
                                        console.log(props.N_trl),
                                        props.setBeingPhrase_trl([ev,ev,ev,ev,ev]),
                                        props.setBeingPhrase_trl2([ev,ev,ev,ev,ev]),
                                        props.setGivingPhrase_trl([ev,ev,ev,ev,ev,ev,ev,ev]),
                                        //props.setGivingPhrase_trl2([props.n.si_trl,props.n.si_trl,props.n.si_trl,props.n.si_trl,
                                          //  props.n.si_trl,props.n.si_trl,props.n.si_trl,props.n.si_trl]),
                                        props.setTakingPhrase_trl([ev,ev,ev,ev,ev,ev,ev,ev]),
                                        //props.setTakingPhrase_trl2([props.n.si_trl,props.n.si_trl,props.n.si_trl,props.n.si_trl,
                                          //  props.n.si_trl,props.n.si_trl,props.n.si_trl,props.n.si_trl]),
                                        props.setDemonPhrase_trl([ev,ev,ev]),
                                        //props.setDemonPhrase_trl2([props.n.si_trl,props.n.si_trl,props.n.si_trl]),
                                        props.setPossPhrase_trl([ev,ev,ev,ev,ev,ev,ev,ev]),
                                        //props.setPossPhrase_trl2([props.n.si_trl,props.n.si_trl,props.n.si_trl,props.n.si_trl,
                                            //props.n.si_trl,props.n.si_trl,props.n.si_trl,props.n.si_trl]),
                                        props.setAdjPhrase_trl([ev,ev]),
                                        //props.setAdjPhrase_trl2([props.n.si_trl,props.n.si_trl]),

                                    ]} 
                                />
                            </div>
                    </div>
                )

}