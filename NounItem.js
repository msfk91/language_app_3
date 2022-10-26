import React, {useState} from "react";
import { Sub_Menu } from "./Sub_Menu.js";
import { Phrases } from "./Phrases.js"; 
import { Fill_Poss_Buttons } from "./Fill_Buttons.js";
import { Poss_pl } from "./Poss_pl.js";
import { NS } from "./NS.js";
import "./styles.css";

export function NounItem(props) {

    const[ShowMenu, setShowMenu]=useState("hide")

    const HideNounMenu=()=>{
        console.log("Eggo Waffle")
        setShowMenu("hide") 
        return
    } 
    const ShowNounMenu=()=>{  
        console.log("come one dude")
        setShowMenu("nounDiv")
        return     
    }
    return(
        <div>
            <div>

              <div className='j'
              onClick={()=>[
                console.log(ShowMenu)
              ]}>
                {props.si}, {props.pl}
              </div>
              <div className='show' onClick={ShowNounMenu} 
              >
                Show Details
              </div>
              <div className='show' onClick={HideNounMenu} 
              >
                Hide Details
              </div>
            </div>
          <div className={ShowMenu}
          >    
              <NS  
              nouns={props.nouns}
              n={props.nouns}
              key={props.nouns}
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
              />
              <div className="show" 
              onClick={()=>[
              ] }>
                  Save and Continue
              </div>
              
          </div>
        </div>  
    )
}
