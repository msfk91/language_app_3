import React,{ useState} from "react";
import "./styles.css";
import { DropMenu } from "./DropMenu";


export function Fill_Buttons(props) {
  
    //const [BeingFill, setBeingFill] = useState([])
    //const [DemonFill, setDemonFill] = useState([])
    //let [Results, setResults] = useState([])

    let j = []
    
    const FillFunct=(Arr, setArr)=>{
        j = []
        console.log(props.BeingArr)
        console.log(props.DemonArr)
        if(Arr){
            Arr.map((a,index)=>{
                j.push(a.splice('',1,props.N_trl).toString())
            })
            setArr(Arr)
            console.log("Fill")
            console.log(setArr)
        }
    }
    return (
        <div >
                <div
                className="show" 
                onClick={()=>[
                    //FillFunct(props.BeingArr, setBeingFill),
                    //FillFunct(props.DemonArr, setDemonFill),
                ]}>
                    <div>{props.BeingArr}</div>
                    <div>{props.DemonArr}</div>
                </div>
                <div>
                    
                    <br/>
                    
                </div>        
        </div>
          
    )
  
}