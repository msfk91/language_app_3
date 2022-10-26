import React, {useState} from "react";
import { Sub_Menu } from "./Sub_Menu.js";
import { Demon } from "./Demon";
import { Fill_Poss_Buttons } from "./Fill_Buttons.js";
import { Poss_pl } from "./Poss_pl.js";
import "./styles.css";

export function Demon_Menu(props) {
    
    const [Results,setResults] = useState()
    const [showResults,setshowResults] = useState("hide")
    let j=''
    let p = ''
    let a=0;
   for( a=0;a< props.nouns.length;a++ ){
     return  <div className="bigDiv">
                
                
                <div>
                    <div className="showDiv2">
                        <button name={ props.noun[a] } 
                        onClick={() => 
                        [console.log(props.DemonPhrase_si_trl2),
                        console.log("Phrase_si_trl"),
                        console.log(props.DemonPhrase_si_trl),
                        console.log(props.DemonPhrase_si_trl2),
                        props.setShow_Menu1( "showDiv" ),
                        ]  }>
                            Add Demonstratives
                        </button>
                    </div>
                    <div>
                        <div className={showResults}>
                            <div className="show2">
                                {Results}
                                <div className="show"
                                onClick={()=>[setResults(''), setshowResults("hide")]}>
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={props.Show_Menu1}>
                        <div className={props.Show_Menu1 +" "+ "j" +" "+ "show" }
                        onClick={ ()=>
                        props.setShow_Menu1("hide")}>
                            Escape
                        </div>
                        
                        <div>
                            <Demon words={props.n.demon_si}  
                            DemonPhrase_trl={props.DemonPhrase_si_trl}
                            DemonPhrase_trl2={props.DemonPhrase_si_trl2}
                            PossPhrase_trl3={props.PossPhrase_si_trl3}
                            n={props.n}
                            key={props.n.demon_si} />
                        </div>      
                        <div className="show j" 
                        onClick={()=> [ 
                        setResults(props.DemonPhrase_si_trl.toString().replaceAll(",", ", ")),
                        j=props.DemonPhrase_si_trl,
                        p=[],
                        console.log('j'),
                        console.log(j),
                        j.map((a,index)=> { p.push(a.split(props.n.si_trl)) }),
                        props.n.demon_si_trl=p,
                        props.n.demon_si_class.push(p),
                        props.Demon_trl[props.nouns.indexOf(props.n)]=p,
                        props.Demon_trl2[props.nouns.indexOf(props.n)]=p,
                        console.log('Im good'),
                        console.log(props.Demon_trl2),
                        console.log(props.n.demon_si_trl),
                        props.setShow_Menu1( "hide" ),
                        setshowResults("showDiv")
                        ] } >
                                Submit
                        </div>
            </div>
        </div>
}
}
