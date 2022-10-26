import React, { useState, useRef } from "react";
import "./styles.css";

export function Demon_DropMenu(props) {

  const divOne = useRef()
  const [Display, setDisplay] = useState([])
  
  
  //let new_arr = []

 
  const triggerDropfill= (arr2, n2, i) => {
    console.log("Hoes")
    console.log(props.DemonPhrase_si_trl)
    console.log("Nothing yet")
    console.log(arr2)
    //props.setResults(arr2)
    console.log(n2)
    
    console.log(props.Demon_trl2)
    //props.setResults(arr2)
    //console.log(arr2==[n2,n2,n2,n2,n2,n2,n2,n2])
    console.log("piggyback")
    console.log(arr2[0].toString()==[n2,''].toString())
    //console.log( arr2[0]!==[n2,''] && arr2[0]!==['',n2] )
  
    if((props.DemonPhrase_si_trl.toString()==[n2,n2,n2].toString())){
      //let arr=props.Demon_trl[i]
      let new_arr=[]
      let arr3=[]
      console.log( arr2 )
      arr2.map(a=>{ new_arr.push( a.splice('',1,n2) ) } )     
      console.log(new_arr)
      props.setResults(arr2 )
      arr2.map((a,index)=>
        arr3.push(a.split(n2))     
      )
      arr2=props.n.demon_si_trl
      console.log("lame")
      return
    }
    //for(a=0; a < arr2.length; a++){
        if((arr2.toString()!==props.DemonPhrase_si_trl.toString() )){
          console.log(arr2)
          console.log(props.DemonPhrase_si_trl)
          let j=[]
          arr2.map((a,index)=>{
            //j.push( a.splice(a.indexOf(""),1,props.DemonPhrase_si_trl[0]) )
          })
          //props.setResult(props.DemonPhrase_si_trl.toString())
          return
        }
    //}
    
    
  }
  
  const handleDropfill= (arr, n) => {
    let new_arr = arr
    
    //.replaceAll(n+",", n) 
  }
  //className={props.DropDown}  {props.Results}
  return props.n.demon_si_class.map((b, index2) => {
    if(index2!==props.Demon_trl.length-1){     
      return(
          <div >  
              <div>
                Hildagard
              </div>
              <div >
                  <div className={"show" + " " + "j"}
                  onClick={ ()=> [ //console.log( props.Demon_trl ),
                  //handleDropfill (props.Demon_trl2[index2], props.n.si_trl),
                  triggerDropfill (props.n.demon_si_trl, props.n.si_trl, index2),
                  //props.Demon_trl2 = props.Demon_trl,
                  props.setDropDown("hide"),
                  //console.log( "props.Demon_trl2" ),
                    //console.log( props.Demon_trl2 ),
                  // console.log( "props.N_trl" ),
                  //console.log( props.N_trl ),
                  ] }  >

                      {b.toString().replace(",",'').replaceAll(",,",',') } 
                  </div>

                  <div className={'show'+" "+'j'}
                  onClick={()=>[props.Demon_trl.splice(props.Demon_trl.indexOf(b),1),
                    props.setDropDown("hide")]}>
                      Delete
                  </div>
              </div>
          </div>

      )
    }  
    else if(index2==props.Demon_trl.length-1){
        return(
            <div>
    
              <div >  
                <div >
                    <div className={"show" + " " + "j"}    
                    onClick={ ()=> [ //console.log( props.Demon_trl ),
                    //handleDropfill (props.Demon_trl2[index2], props.n.si_trl),
                    triggerDropfill (props.Demon_trl2[index2], props.n.si_trl),
                    //props.setPoss_trl(Display),
                    props.setDropDown("hide"),
                    ] }  >

                        {b.toString().replace(",",'').replaceAll(",,",",") } 
                    </div>

                    <div className={"show" + " " + "j"}
                    onClick={()=>[props.Demon_trl.splice(props.Demon_trl.indexOf(b),1),
                      props.setDropDown("hide")]}>
                        Delete
                    </div>
                </div>
              </div>
              <div>
                <div  className={"show" + " " + "j"}
                      onClick={()=> [console.log(props.DropDown),
                      props.setDropDown("hide")]}> 
                            Escape
                </div>
            </div>
              
            </div>
        )
      }
             
    })
  }
