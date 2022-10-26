

import "./styles.css";
import "./Noun_Mod.js";
import { Noun } from "./Noun_Mod";
import { NS } from "./NS.js";
import { useState } from 'react';
import { NounItem } from './NounItem';


export function NounList(props) {
  
  
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
  
  const [BeingArr,setBeingArr] = useState([])
  const [GivingArr,setGivingArr]= useState([])
  const [ThankingArr,setThankingArr]= useState([])
  const [DemonArr,setDemonArr] = useState([]) 
  const [PossArr,setPossArr]= useState([])
  const [AdjArr,setAdjArr]= useState([])

  return People.map((a,index)=>{ 
    return(
            
      <NounItem
      si={a.sing}
      pl={a.plural}
      nouns={a}
      DemonArr={DemonArr}
      setDemonArr={setDemonArr}
      BeingArr={BeingArr}
      setBeingArr={setBeingArr}
      GivingArr={GivingArr}
      setGivingArr={setGivingArr}
      ThankingArr={ThankingArr}
      setThankingArr={setThankingArr}
      PossArr={PossArr}
      setPossArr={setPossArr}
      AdjArr={AdjArr}
      setAdjArr={setAdjArr}
      />
      
    )
  })
}


//export default App;
