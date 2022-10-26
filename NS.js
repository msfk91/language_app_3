import React, {useState} from "react";
import { Sub_Menu } from "./Sub_Menu.js";
import { NS2 } from "./NounItem.js";
import "./styles.css";

import { Poss_si } from "./Poss.js";
import { Poss_pl } from "./Poss_pl.js";


export function NS(props) {

  
  const [Demon_trl, setDemon_trl]=useState([])
  const [Demon_trl2, setDemon_trl2]=useState([])
  const [Poss_trl, setPoss_trl] = useState([])
  const [Poss_trl2, setPoss_trl2] = useState([])
  
  const [DemonPhrase_si_trl, setDemonPhrase_si_trl] = useState(['','',''])
  const [DemonPhrase_pl_trl, setDemonPhrase_pl_trl] = useState(['','',''])
 
  const [PossPhrase_si_trl, setPossPhrase_si_trl] = useState(['','','','','','','',''])
  const [PossPhrase_pl_trl, setPossPhrase_pl_trl] = useState(['','','','','','','',''])
  const [PossPhrase_si_trl3, setPossPhrase_si_trl3] = useState(['','','','','','','',''])
  
  const [AdjPhrase_si_trl, setAdjPhrase_si_trl] = useState(['',''])
  const [AdjPhrase_pl_trl, setAdjPhrase_pl_trl] = useState(['',''])
  
  const [BeingPhrase_si_trl, setBeingPhrase_si_trl] = useState(['','','','',,'',])
  const [BeingPhrase_si_trl2, setBeingPhrase_si_trl2] = useState(['','','','',,'',])
  const [BeingPhrase_pl_trl, setBeingPhrase_pl_trl] = useState(['','','','',,'',])
  
  const [GivingPhrase_si_trl, setGivingPhrase_si_trl] = useState(['','','','',,'',])
  const [GivingPhrase_pl_trl, setGivingPhrase_pl_trl] = useState(['','','','',,'',])
  
  const [TakingPhrase_si_trl, setTakingPhrase_si_trl] = useState(['','','','',,'',])
  const [TakingPhrase_pl_trl, setTakingPhrase_pl_trl] = useState(['','','','',,'',])
  
  const [N_si_trl, setN_si_trl] = useState([])
  const [N_pl_trl, setN_pl_trl] = useState([])
  
  
  const [DemonFill,setDemonFill] = useState([])
    
        return (
            <div>
                <div>
                    <Sub_Menu noun={props.n.sing} 
                    key={props.n.sing} 
                        DemonArr={props.DemonArr}
                        setDemonArr={props.setDemonArr}
                        BeingArr={props.BeingArr}
                        setBeingArr={props.setBeingArr}
                        GivingArr={props.GivingArr}
                        setGivingArr={props.setGivingArr}
                        ThankingArr={props.ThankingArr}
                        setThankingArr={props.setThankingArr}
                        PossArr={props.PossArr}
                        setPossArr={props.setPossArr}
                        AdjArr={props.AdjArr}
                        setAdjArr={props.setAdjArr}
                    nouns={props.nouns}
                    n={props.n.sing}
                    N_trl={N_si_trl}
                    setN_trl={setN_si_trl}
                        Taking={props.n.taking_si}
                        TakingPhrase_trl={TakingPhrase_si_trl} 
                        setTakingPhrase_trl={setTakingPhrase_si_trl}
                        Giving={props.n.giving_si}
                        GivingPhrase_trl={GivingPhrase_si_trl} 
                        setGivingPhrase_trl={setGivingPhrase_si_trl}
                        
                        Being={props.n.being_si}
                        BeingPhrase_trl={BeingPhrase_si_trl} 
                        setBeingPhrase_trl={setBeingPhrase_si_trl}
                        BeingPhrase_trl2={BeingPhrase_si_trl2} 
                        setBeingPhrase_trl2={setBeingPhrase_si_trl2}

                        Adj={props.n.adj_si}
                        AdjPhrase_trl={AdjPhrase_si_trl}
                        setAdjPhrase_trl={setAdjPhrase_si_trl}
                        Poss={props.n.poss_si}
                        PossPhrase_trl={PossPhrase_si_trl}
                        setPossPhrase_trl={setPossPhrase_si_trl} 
                        Demon={props.n.demon_si}
                        DemonPhrase_trl={DemonPhrase_si_trl} 
                        setDemonPhrase_trl={setDemonPhrase_si_trl}
                    />
                    
                    <Sub_Menu noun={props.n.sing} 
                    key={props.n.plural} 
                    nouns={props.nouns}
                    n={props.n.plural}
                    n_trl={props.n.pl_trl}
                    Taking={props.n.taking_pl}
                    TakingPhrase_trl={TakingPhrase_pl_trl} 
                    setTakingPhrase_trl={setTakingPhrase_pl_trl}
                    Giving={props.n.giving_pl}
                    GivingPhrase_trl={GivingPhrase_pl_trl} 
                    setGivingPhrase_trl={setGivingPhrase_pl_trl}
                    Being={props.n.being_pl}
                    BeingPhrase_trl={BeingPhrase_pl_trl} 
                    setBeingPhrase_trl={setBeingPhrase_pl_trl}
                    Adj={props.n.adj_pl}
                    AdjPhrase_trl={AdjPhrase_pl_trl}
                    setAdjPhrase_trl={setAdjPhrase_pl_trl}
                    Poss={props.n.poss_pl}
                    PossPhrase_trl={PossPhrase_pl_trl}
                    setPossPhrase_trl={setPossPhrase_pl_trl} 
                    Demon={props.n.demon_pl}
                    DemonPhrase_trl={DemonPhrase_pl_trl} 
                    setDemonPhrase_trl={setDemonPhrase_pl_trl}
                    />
                    
                </div>
            </div>
    )
}

