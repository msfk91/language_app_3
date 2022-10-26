

import "./Noun_Mod.js";
import { Noun } from "./Noun_Mod";
import { NS } from "./NS.js";
import { useState } from 'react';
import { NounList } from './NounList';
import "./styles.css";

export function NounCategory(props) {
  
  
  const Person = new Noun("person", "people","h");
  const Man = new Noun("man", "men","m");
  const Woman = new Noun("woman", "women","f");
  const Child= new Noun("child", "children","h")

  
  const People = [Person, Man, Woman, Child]

  const HideNounList=()=>{
    console.log("Eggo Waffle")
    setShowList("hide") 
    return
  } 
  const ShowNounList=()=>{  
    console.log("come one dude")
    setShowList("nounDiv")
    return     
  }
  const[ShowList, setShowList]=useState("hide")
  return(
    <div>
            <div className="j">
                <h2>
                    People

                </h2>
            </div>
            <div className='show' onClick={ShowNounList} 
            >
                Show List
            </div>
            <div className='show' onClick={HideNounList} 
            >
                Hide List
            </div>
            <div className={ShowList}>
                <NounList
                />
            </div>
    </div>
  )
}

