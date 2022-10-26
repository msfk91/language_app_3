import React, {useState} from "react";
import { Sub_Menu } from "./Sub_Menu.js";
import { Poss } from "./Poss.js";
import { Fill_Poss_Buttons } from "./Fill_Buttons.js";
import { Poss_pl } from "./Poss_pl.js";
import "./styles.css";

export function Poss_Menu(props) {
    
    const [Results,setResults] = useState()
    const [showResults,setshowResults] = useState("hide")
    let j=''
    let p = ''
    let a=0;
   for( a=0;a< props.nouns.length;a++ ){
     return  <div className="bigDiv2">
                
                <div>
                    <div className="showDiv2">
                        <button name={ props.noun[a] } 
                        onClick={() => 
                        [console.log(props.PossPhrase_si_trl2),
                        console.log("Phrase_si_trl"),
                        console.log(props.PossPhrase_si_trl),
                        console.log(props.PossPhrase_si_trl2),
                        props.setShow_Menu1( "showDiv" ),
                        ]  }>
                            Add Possesives
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
                            <Poss words={props.n.si_subj_poss}  
                            PossPhrase_trl={props.PossPhrase_si_trl}
                            PossPhrase_trl2={props.PossPhrase_si_trl2}
                            PossPhrase_trl3={props.PossPhrase_si_trl3}
                            n={props.n}
                            key={props.n.si_subj_poss} />
                        </div>      
                        <div className="show j" 
                        onClick={()=> [ 
                        setResults(props.PossPhrase_si_trl.toString().replaceAll(",", ", ")),
                        j=props.PossPhrase_si_trl,
                        p=[],
                        j.map((a,index)=> { p.push(a.split(props.n.si_trl)) }),
                        props.Poss_trl[props.nouns.indexOf(props.n)]=p,
                        props.Poss_trl2[props.nouns.indexOf(props.n)]=p,
                        console.log('Im good'),
                        console.log(props.Poss_trl2),
                        props.setShow_Menu1( "hide" ),
                        setshowResults("showDiv")
                        ] } >
                                Submit
                        </div>
            </div>
        </div>
}
}
    /*
    let dropfill=[]
    let dropfill3=[]

    const Poss_si_trl_function = (array, array2) => {
        let split_str =[]
        let dropfill2=[]
        let dropfill4=[]       
        console.log("array")
        console.log(array)
        console.log("array2")
        console.log(array2)
        console.log(props.n.si_trl)
        array.map( (a,index)=>{
            dropfill2.push( a.split(props.n.si_trl))
        })
        console.log("cool")
        array2.map( (b,index2)=>{
            console.log(b.split(props.n.si_trl ))
            dropfill4.push(  b.split(props.n.si_trl ) )    
        })
        dropfill = dropfill2
        dropfill3 = dropfill4
        console.log("dropfill2")
        console.log(dropfill2)
        console.log("dropfill4")
        console.log(dropfill4)
        
    }
    
    
    const create_dropfill=(arr, arr2)=>{
        
        const P_trl = props.Poss_trl
        const P_trl2 = props.Poss_trl2
        
        if ( ( arr !== props.Poss_trl[props.nouns.indexOf(props.n)]) 
        && (arr.length===8) 
        ){       
            P_trl[props.nouns.indexOf(props.n)]=arr
        }
        if ( ( arr2 !== props.Poss_trl2[props.nouns.indexOf(props.n)]) 
        && (arr2.length===8) 
        ){
            P_trl2[props.nouns.indexOf(props.n)]=arr2
        }
        console.log("props.Poss_trl 2")
        console.log(props.Poss_trl2)
        console.log("props.Poss_trl 1")
        console.log(props.Poss_trl)
        
    }
    <Fill_Poss_Buttons 
                            setResults
                            setPossPhrase_si_trl={props.setPossPhrase_si_trl}
                            setPossPhrase_si_trl2={props.setPossPhrase_si_trl2}
                            setPossPhrase_si_trl3={props.setPossPhrase_si_trl3} 
                            PossPhrase_si_trl={props.PossPhrase_si_trl}
                            PossPhrase_si_trl2={props.PossPhrase_si_trl2}
                            PossPhrase_si_trl3={props.PossPhrase_si_trl3}
                            DropDown={props.DropDown}
                            setDropDown={props.setDropDown}
                            setN_trl ={props.setN_si_trl}
                            n={props.n}
                            nouns={props.nouns}
                            key={props.n +"2"}
                            index={props.nouns.indexOf(props.n)}
                            N_trl={props.N_si_trl}
                            Poss_trl={props.Poss_trl}
                            Poss_trl2={props.Poss_trl2}
                            setPoss_trl2={props.setPoss_trl2}
                            />
    */