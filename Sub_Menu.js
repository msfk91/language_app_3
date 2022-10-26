import React, { useState } from "react";
import "./styles.css";
import { Poss_Menu } from "./Poss_Menu_Comp";
import { Poss_si } from "./Poss.js";
import { Demon_Menu } from "./Demon_Menu";
import { Phrases_Menu } from "./Phrases_Menu";
import { N } from "./N.js";
import { Fill_Buttons } from "./Fill_Buttons";
import { DropMenu } from "./DropMenu";
import { Demon_DropMenu } from "./Demon_DropMenu";

export function Sub_Menu(props) {
  

    
    const [DemonPhrase_si_trl, setDemonPhrase_si_trl] = useState(['','',''])
    const [DemonPhrase_si_trl2, setDemonPhrase_si_trl2] = useState(['','',''])
    const [PossPhrase_si_trl, setPossPhrase_si_trl] = useState(['','','','','','','',''])
    const [PossPhrase_si_trl2, setPossPhrase_si_trl2] = useState(['','','','','','','',''])
    const [PossPhrase_si_trl3, setPossPhrase_si_trl3] = useState(['','','','','','','',''])
    const [AdjPhrase_si_trl, setAdjPhrase_si_trl] = useState(['',''])
    const [AdjPhrase_si_trl2, setAdjPhrase_si_trl2] = useState(['',''])
    const [BeingPhrase_si_trl, setBeingPhrase_si_trl] = useState(['','','','',,'',])
    const [BeingPhrase_si_trl2, setBeingPhrase_si_trl2] = useState(['','','','',,'',])
    const [GivingPhrase_si_trl, setGivingPhrase_si_trl] = useState(['','','','',,'',])
    const [GivingPhrase_si_trl2, setGivingPhrase_si_trl2] = useState(['','','','',,'',])
    const [TakingPhrase_si_trl, setTakingPhrase_si_trl] = useState(['','','','',,'',])
    const [TakingPhrase_si_trl2, setTakingPhrase_si_trl2] = useState(['','','','',,'',])

    const [PossPhrase_pl_trl, setPossPhrase_pl_trl] = useState([])
    
    
    const [Add_Poss_Menu, setAdd_Poss_Menu] = useState( 'hide' )
    //const [Show_Menu1, setShow_Menu1] = useState( 'hide' )
    const [Show_Poss_Menu, setShow_Poss_Menu] = useState( 'hide' )
    const [Show_Demon_Menu, setShow_Demon_Menu] = useState( 'hide' )
    const [Show_Adj_Menu, setShow_Adj_Menu] = useState( 'hide' )
    const [Show_Being_Menu, setShow_Being_Menu] = useState( 'hide' )
    const [Show_Giving_Menu, setShow_Giving_Menu] = useState( 'hide' )
    const [Show_Taking_Menu, setShow_Taking_Menu] = useState( 'hide' )

    const [DropDown, setDropDown] = useState("hide")
    let [poss_number, setposs_number] = useState(0)
    let [Results, setResults] = useState([])

    
  
   
    const [N_si_trl, setN_si_trl] = useState([])
    const [N_pl_trl, setN_pl_trl] = useState([])

    const [BeingArr,setBeingArr] = useState([])
    const [GivingArr,setGivingArr]= useState([])
    const [TakingArr,setTakingArr]= useState([])
    const [DemonArr,setDemonArr] = useState([]) 
    const [PossArr,setPossArr]= useState([])
    const [AdjArr,setAdjArr]= useState([])

    const [BeingResults,setBeingResults] = useState({ results:'', status:"hide" })
    const [GivingResults,setGivingResults]= useState({ results:'', status:"hide" })
    const [TakingResults,setTakingResults]= useState({ results:'', status:"hide" })
    const [DemonResults,setDemonResults] = useState({ results:'', status:"hide" }) 
    const [PossResults,setPossResults]= useState({ results:'', status:"hide" })
    const [AdjResults,setAdjResults]= useState({ results:'', status:"hide" })

    let z =[]
    const Fill= (arr,empty)=>{
        arr.map((a,index)=>{
            empty.push(a.splice('',1,props.N_trl))
        })
        arr = empty
    }
    return          <div>
                        <div className="i" >
                            <div>
                                <N
                                nouns={props.nouns}
                                n={props.n}
                                N_trl={props.N_trl}
                                setN_trl={props.setN_trl}
                                setDemonPhrase_trl={props.setDemonPhrase_trl}
                                //setDemonPhrase_trl2={setDemonPhrase_si_trl2} 
                                setPossPhrase_trl={props.setPossPhrase_trl}
                                //setPossPhrase_trl2={setPossPhrase_si_trl2}
                                setAdjPhrase_trl={props.setAdjPhrase_trl}
                                //setAdjPhrase_trl2={setAdjPhrase_si_trl2}
                                
                                setBeingPhrase_trl={props.setBeingPhrase_trl}
                                setBeingPhrase_trl2={setBeingPhrase_si_trl2}
                                
                                setGivingPhrase_trl={props.setGivingPhrase_trl}
                                //setGivingPhrase_trl2={setGivingPhrase_si_trl2}
                                setTakingPhrase_trl={props.setTakingPhrase_trl}
                                //setTakingPhrase_trl2={setTakingPhrase_si_trl2}
                                />
                                <Fill_Buttons
                                
                                N_trl={props.N_trl}
                                DemonPhrase_trl={props.DemonPhrase_trl}
                                    BeingArr={BeingArr}
                                    setBeingArr={setBeingArr}
                                    GivingArr={props.GivingArr}
                                    setGivingArr={props.setGivingArr}
                                    ThankingArr={props.ThankingArr}
                                    setThankingArr={props.setThankingArr}
                                    DemonArr={DemonArr}
                                    setDemonArr={setDemonArr}
                                    PossArr={props.PossArr}
                                    setPossArr={props.setPossArr}
                                    AdjArr={props.AdjArr}
                                    setAdjArr={props.setAdjArr}
                                />
                                

                                
                                    <Phrases_Menu
                                    title="Add Phrases of Being"
                                    divName="bigDiv"
                                    Results={BeingResults}
                                    setResults={setBeingResults}
                                    ResultsArr={BeingArr}
                                    setResultsArr={setBeingArr}
                                    N_trl={props.N_trl}
                                    setN_trl={props.setN_trl}
                                    Show_Menu1={Show_Being_Menu} 
                                    setShow_Menu1={setShow_Being_Menu}
                                    n={props.n}
                                    words={props.Being}
                                    nouns={props.nouns}
                                    noun={props.noun}
                                    Phrase_trl={props.BeingPhrase_trl} 
                                    Phrase_trl2={props.BeingPhrase_trl2}
                                    setPhrase_trl={props.setBeingPhrase_trl}
                                    setPhrase_trl2={props.setBeingPhrase_trl2}
                                    />
                                    <div className={BeingResults.status}> 
                                        <div className="j">
                                            {BeingResults.results.toString().replaceAll(",",", ") }
                                        </div>
                                        <div className="i2" 
                                        onClick={()=> setBeingResults( { results:'', status:"hide" } ) }>
                                            Delete
                                        </div>
                                    </div>

                                <Phrases_Menu
                                title="Add Phrases of Giving"
                                divName="bigDiv2" 
                                Results={GivingResults}
                                setResults={setGivingResults}
                                ResultsArr={GivingArr}
                                setResultsArr={setGivingArr}
                                N_trl={props.N_trl}
                                setN_trl={props.setN_trl}
                                Show_Menu1={Show_Giving_Menu} 
                                setShow_Menu1={setShow_Giving_Menu}
                                n={props.n}
                                words={props.Giving}
                                nouns={props.nouns}
                                noun={props.noun}
                                Phrase_trl={props.GivingPhrase_trl} 
                                setPhrase_trl={props.setGivingPhrase_trl}
                                />
                                <div className={GivingResults.status}> 
                                    <div className="j">
                                        {GivingResults.results.toString().replaceAll(",",", ")}
                                    </div>
                                    <div className="i2"
                                    onClick={()=> setGivingResults( { results:'', status:"hide" } ) }>
                                        Delete
                                    </div>
                                </div>

                                <Phrases_Menu
                                title="Add Phrases of Taking"
                                divName="bigDiv3"
                                Results={TakingResults}
                                setResults={setTakingResults}
                                ResultsArr={TakingArr}
                                setResultsArr={setTakingArr}
                                N_trl={props.N_trl}
                                setN_trl={props.setN_trl}
                                Show_Menu1={Show_Taking_Menu} 
                                setShow_Menu1={setShow_Taking_Menu}
                                n={props.n}
                                words={props.Taking}
                                nouns={props.nouns}
                                noun={props.noun}
                                Phrase_trl={props.TakingPhrase_trl} 
                                setPhrase_trl={props.setTakingPhrase_trl}
                                />
                                <div className={TakingResults.status}> 
                                    <div className="j">
                                        {TakingResults.results.toString().replaceAll(",",", ")}
                                    </div>
                                    <div className="i2" 
                                    onClick={()=> setTakingResults( { results:'', status:"hide" } ) }>
                                        Delete
                                    </div>
                                </div>
                                <Phrases_Menu
                                title="Add Demonstratives"
                                divName="bigDiv"  
                                Results={DemonResults}
                                setResults={setDemonResults}
                                ResultsArr={DemonArr}
                                setResultsArr={setDemonArr} 
                                N_trl={props.N_trl}
                                setN_trl={props.setN_trl}
                                Show_Menu1={Show_Demon_Menu} 
                                setShow_Menu1={setShow_Demon_Menu}
                                n={props.n}
                                words={props.Demon} 
                                nouns={props.nouns}
                                noun={props.noun}
                                Phrase_trl={props.DemonPhrase_trl} 
                                setPhrase_trl={props.setDemonPhrase_trl}
                                />
                                <div className={DemonResults.status}> 
                                    <div className="j">
                                        {DemonResults.results.toString().replaceAll(",",", ")}
                                    </div>
                                    <div className="i2" 
                                    onClick={()=> setDemonResults( { results:'', status:"hide" } ) }>
                                        Delete
                                    </div>
                                </div>
                                
                                <Phrases_Menu
                                title="Add Possesives"
                                divName="bigDiv2"
                                Results={PossResults}
                                setResults={setPossResults}
                                ResultsArr={PossArr}
                                setResultsArr={setPossArr}
                                N_trl={props.N_trl}
                                setN_trl={props.setN_trl}
                                Show_Menu1={Show_Poss_Menu} 
                                setShow_Menu1={setShow_Poss_Menu}
                                n={props.n}
                                words={props.Poss}
                                nouns={props.nouns}
                                noun={props.noun}
                                Phrase_trl={props.PossPhrase_trl} 
                                setPhrase_trl={props.setPossPhrase_trl}
                                />
                                <div className={PossResults.status}> 
                                    <div className="j">
                                        {PossResults.results.toString().replaceAll(",",", ")}
                                    </div>
                                    <div className="i2" 
                                    onClick={()=> setPossResults( { results:'', status:"hide" } ) }>
                                        Delete
                                    </div>
                                </div>
                                <Phrases_Menu
                                title= "Add Adjectives"
                                divName="bigDiv3"
                                Results={AdjResults}
                                setResults={setAdjResults}
                                ResultsArr={AdjArr}
                                setResultsArr={setAdjArr}
                                N_trl={props.N_trl}
                                setN_trl={props.setN_trl}
                                Show_Menu1={Show_Adj_Menu} 
                                setShow_Menu1={setShow_Adj_Menu}
                                n={props.n}
                                words={props.Adj}
                                nouns={props.nouns}
                                noun={props.noun}
                                Phrase_trl={props.AdjPhrase_trl} 
                                setPhrase_trl={props.setAdjPhrase_trl}
                                />
                                <div className={AdjResults.status}> 
                                    <div className="j">
                                        {AdjResults.results.toString().replaceAll(",",", ")}
                                    </div>
                                    <div className="i2" 
                                    onClick={()=> setAdjResults( { results:'', status:"hide" } ) }>
                                        Delete
                                    </div>
                                </div>
                                
                            </div>    
                        </div>
                    
                    </div>
    
  }

/*
<Demon_DropMenu
                    n={props.n}
                    Results={Results}
                    setResults={setResults}
                    DropDown={DropDown}
                    setDropDown={setDropDown}
                    Demon_trl={props.Demon_trl}
                    setDemon_trl={props.setDemon_trl}
                    Demon_trl2={props.Demon_trl2}
                    setDemon_trl2={props.setDemon_trl2}
                    DemonPhrase_si_trl={DemonPhrase_si_trl} 
                    setDemonPhrase_si_trl={setDemonPhrase_si_trl}
                    DemonPhrase_si_trl2={DemonPhrase_si_trl2} 
                    setDemonPhrase_si_trl2={setDemonPhrase_si_trl2}
                    
                    />
<Fill_Poss_Buttons
                            setPossPhrase_si_trl={setPossPhrase_si_trl}
                            setPossPhrase_si_trl2={setPossPhrase_si_trl2}
                            setPossPhrase_si_trl3={setPossPhrase_si_trl3} 
                            PossPhrase_si_trl={PossPhrase_si_trl}
                            PossPhrase_si_trl2={PossPhrase_si_trl2}
                            PossPhrase_si_trl3={PossPhrase_si_trl3}
                            setN_trl ={props.setN_si_trl}
                            n={props.n}
                            nouns={props.nouns}
                            key={props.n +"2"}
                            index={props.nouns.indexOf(props.n)}
                            N_trl={props.N_si_trl} 
                            
                            DropDown={DropDown}
                            setDropDown={setDropDown}
                            Poss_trl={props.Poss_trl}
                            Poss_trl2={props.Poss_trl2}
                            setPoss_trl2={props.setPoss_trl2}
                            />

<Poss_pl words_pl={props.n.pl_subj_poss} 
                N_pl_trl={N_pl_trl}
                PossPhrase_pl_trl = {PossPhrase_pl_trl}
                key={props.n.pl_subj_poss} />
                <div>
                    <input type="button" value="Submit"/>
                </div>

<Add_Menu 
                    Add_Poss_Menu={Add_Poss_Menu}
                    n={props.n}
                    PossPhrase_si_trl = {props.PossPhrase_si_trl}
                    PossPhrase_si_trl2 = {props.PossPhrase_si_trl2}
                    Poss_si_trl_function={Poss_si_trl_function}
                    create_dropfill={create_dropfill}
                    setAdd_Poss_Menu={setAdd_Poss_Menu}
                    />
*/