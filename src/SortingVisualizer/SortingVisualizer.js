import * as React from 'react'
import './sorting.css'
export default function SortingVisualizer(){
    const [arr,setarr]= React.useState([])
  const  Randomarr=()=>{
      const arrr=[]
    for (let index = 0; index < 100; index++) {
       arrr.push(getRandomInt(5,300)) 
        }
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
return(
    <div className='main'>
        <div className='buttonDiv'>
            <button onClick={Randomarr}></button>
        </div>
        {arr.map((val,idd)=>{
           return <div className='bar' id={idd} style={{height:val}}></div>
        })}
    </div>
)
}