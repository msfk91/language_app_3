
import './App.css';

import "./Components/styles.css";
import "./Components/Noun_Mod.js";
import { Noun } from "./Components/Noun_Mod";
import { NS } from "./Components/NS.js";
import { useState } from 'react';
import { NounCategory} from "./Components/NounCategory" ;


function App() {
  
  
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
      <NounCategory
      />
    )
  
}


export default App;
