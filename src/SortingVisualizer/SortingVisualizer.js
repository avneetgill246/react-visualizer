import * as React from 'react'
import './sorting.css'
import Func from './function'
export default function SortingVisualizer(){
    const [arr,setarr]= React.useState([])
    const[are,setare] =  React.useState([{'ab':1}])
   
    const[ starr,setstarr] = React.useState(Array(100).fill(1))
  const  Randomarr=()=>{
      const arrr=[]
    for (let index = 0; index < 100; index++) {
       arrr.push(getRandomInt(5,300)) 
        }
        setare([{'ab':1}])
        setarr(arrr)

  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
React.useEffect(()=>{
    Randomarr()
    

    
},[])

async function simplesort (){
   
    const are=arr
    let len = are.length;
    for (let i = 0; i < len; i++) {
       
            let min = i;
          for (let j = i + 1; j < len; j++) {
             
                
                    if (are[min] > are[j]) {
                        min = j;
                    }
         
              
            }
            if (min !== i) {
                let tmp = are[i];
                are[i] = are[min];
                are[min] = tmp;
            }
         }
         setare(are)
    }
     
        
 



return(
    <div>

    <div className='buttonDiv'>

        <button onClick={Randomarr} >New Array</button>
        <button onClick={simplesort} >Sort Array</button>
    
    </div>


    
    <div className='main'>
      
        
        {are[0]['ab']==1?arr.map((val,idd)=>{
           return <div className='bar' id={idd} style={starr[idd]==1?{height:val,backgroundColor:'aquamarine'}:starr[idd]==2?{height:val,backgroundColor:'red'}:{height:val,backgroundColor:'yellow'}}></div>
        }):are.map((val,idd)=>{
           return <div className='bar' id={idd} style={starr[idd]==1?{height:val,backgroundColor:'aquamarine'}:starr[idd]==2?{height:val,backgroundColor:'red'}:{height:val,backgroundColor:'yellow'}}></div>
        })}
        
    </div>
    </div>
)
}