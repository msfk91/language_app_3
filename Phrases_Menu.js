import React, {useState, useEffect} from "react";
import { Sub_Menu } from "./Sub_Menu.js";
import { Phrases } from "./Phrases.js"; 
import { Fill_Poss_Buttons } from "./Fill_Buttons.js";
import { Poss_pl } from "./Poss_pl.js";
import "./styles.css";

export function Phrases_Menu(props) {
    
    const [Results,setResults] = useState()
    const [showResults,setshowResults] = useState("hide")
    let j=''
    let p = ''
    let t =""
    let a=0;
    useEffect(()=> {
        setResults(props.Phrase_trl)
    },
    [props.Phrase_trl])
    //for( a=0;a< props.nouns.length;a++ ){
     return  <div className={props.divName}>
                <div>
                    <div className="showDiv2">
                        <button name={ props.noun[a] } 
                        onClick={() => 
                        [
                        console.log("Phrase_si_trl"),
                        props.setShow_Menu1( "showDiv" ),
                        ]  }>
                            {props.title}
                        </button>
                    </div>
                </div>
                    <div className={props.Show_Menu1}>
                        <div className={props.Show_Menu1 +" "+ "j" +" "+ "show" }
                        onClick={ ()=>
                        props.setShow_Menu1("hide")}>
                            Escape
                        </div>
                        
                        <div>
                            <Phrases words={props.words}  
                            Phrase_trl={props.Phrase_trl}
                            Phrase_trl2={props.Phrase_trl2}
                            setPhrase_trl={props.setPhrase_trl}
                            setPhrase_trl2={props.setPhrase_trl2}
                            
                            n={props.n}
                            key={props.words} />
                        </div>      
                        <div className="show j" 
                        onClick={()=> [ 
                        //props.setResults(props.Phrase_trl),
                        j=props.Phrase_trl,
                        p=[],
                        console.log('j'),
                        console.log(j),
                        props.Phrase_trl.map((a,index)=> { p.push(a.split(props.N_trl)) }),
                        console.log('Im good'),
                        //console.log(props.setResultsArr()),
                        console.log(p),
                        props.setResultsArr(p),
                        console.log(props.ResultsArr),
                        props.setShow_Menu1( "hide" ),
                        setshowResults("showDiv"),
                        //t=props.Phrase_trl,
                        props.setResults({results: props.Phrase_trl, status: "nounDiv"}),
                        ] } >
                                Submit
                        </div>
            </div>
        </div>
    //}
}
