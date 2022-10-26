import React, { useState, useRef } from "react";
import "./styles.css";

export function DropMenu(props) {

  const divOne = useRef()
  const [Display, setDisplay] = useState([])
  
  
  //let new_arr = []

 
  const triggerDropfill= (arr2, n2, i) => {
    console.log("Hoes")
    console.log(props.PossPhrase_si_trl)
    console.log("Nothing yet")
    console.log(arr2)
    //props.setResults(arr2)
    console.log(n2)
    
    console.log(props.Poss_trl2)
    //props.setResults(arr2)
    console.log(arr2==[n2,n2,n2,n2,n2,n2,n2,n2])
    console.log("piggyback")
    console.log(arr2[0].toString()==[n2,''].toString())
    //console.log( arr2[0]!==[n2,''] && arr2[0]!==['',n2] )
  
    if((props.PossPhrase_si_trl.toString()==[n2,n2,n2,n2,n2,n2,n2,n2].toString())){
      let arr=props.Poss_trl[i]
      let new_arr=[]
      let arr3=[]
      console.log( arr2 )
      arr2.map(a=>{ new_arr.push( a.splice('',1,n2) ) } )     
      console.log(new_arr)
      props.setResult(new_arr )
      arr2.map((a,index)=>
        arr3.push(a.split(n2))     
      )
      arr2=arr3
      console.log("lame")
      return
    }
    //for(a=0; a < arr2.length; a++){
        if ( (arr2.toString()==props.PossPhrase_si_trl.toString() )){
          //props.setResults(arr2)
          let new_arr=[]
          console.log("GOLLY")
          console.log((arr2.toString()!==props.PossPhrase_si_trl.toString() ))
          console.log(arr2.toString())
          console.log(props.PossPhrase_si_trl.toString())
          arr2.map( (a, index)=>{ 
            let new_arr2=[]
            new_arr.push( a.splice('',1,n2) )  
            a.map( (b, index2)=>{
              //new_arr2.push( b.replaceAll(b,b+" ") )
              //console.log(b)

            })
              
          })
          props.setResults(arr2)
          
          console.log("sadness")
          return
        }else{
          console.log(arr2)
          console.log(props.PossPhrase_si_trl)
          let j=[]
          arr2.map((a,index)=>{
            //j.push( a.splice(a.indexOf(""),1,props.PossPhrase_si_trl[0]) )
          })
          props.setResult(props.PossPhrase_si_trl.toString())
          return
        }
    //}

    if (  (!Array.isArray(arr2[0])) 
    && (Array.isArray(arr2)) ){
      let new_arr=[]
      arr2.map(a=>{ new_arr = a.splice('',1,n2) } )
      console.log("joy")
      props.setResults(new_arr )
    }
    
    
  }
  
  const handleDropfill= (arr, n) => {
    let new_arr = arr
    
    //.replaceAll(n+",", n) 
  }
  return props.Poss_trl.map((b, index2) => {
    if(index2!==props.Poss_trl.length-1){     
      return(
          <div >  
              <div className="j">
                  <div 
                   
                  className={props.DropDown}
                  onClick={ ()=> [ //console.log( props.Poss_trl ),
                  //handleDropfill (props.Poss_trl2[index2], props.n.si_trl),
                  triggerDropfill (props.Poss_trl2[index2], props.n.si_trl, index2),
                  props.Poss_trl2 = props.Poss_trl,
                  props.setDropDown("hide"),
                  //console.log( "props.Poss_trl2" ),
                    //console.log( props.Poss_trl2 ),
                  // console.log( "props.N_trl" ),
                  //console.log( props.N_trl ),
                  ] }  >

                      {b.toString().replace(",",'').replaceAll(",,",',') } 
                  </div>

                  <div className={props.DropDown +" " +'j'}
                  onClick={()=>[props.Poss_trl.splice(props.Poss_trl.indexOf(b),1),
                    props.setDropDown("hide")]}>
                      Delete
                  </div>
              </div>
          </div>

      )
    }  
    else if(index2==props.Poss_trl.length-1){
        return(
            <div>
    
              <div >  
                <div className="j">
                    <div    
                    className={props.DropDown}
                    onClick={ ()=> [ //console.log( props.Poss_trl ),
                    //handleDropfill (props.Poss_trl2[index2], props.n.si_trl),
                    triggerDropfill (props.Poss_trl2[index2], props.n.si_trl),
                    //props.setPoss_trl(Display),
                    props.setDropDown("hide"),
                    ] }  >

                        {b.toString().replace(",",'').replaceAll(",,",",") } 
                    </div>

                    <div className={props.DropDown +" " +'j'}
                    onClick={()=>[props.Poss_trl.splice(props.Poss_trl.indexOf(b),1),
                      props.setDropDown("hide")]}>
                        Delete
                    </div>
                </div>
              </div>
              <div>
                <div className={props.DropDown}
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
  
  

