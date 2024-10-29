import { useState } from 'react'
import './counter.css' 
function Counter(){

    const [info,setInfo] = useState(0);

    function minus(){
        setInfo(p => p - 1);
    }

    function add(){
        setInfo(p => p + 1);
    }

    function reset(){
        setInfo(p => 0);
    }
    
    return(

        <>
        <div className='divOne'>

            <button className='btn' onClick={minus}> - </button>

            <h1> {info} </h1>

            <button className='btn' onClick={add}> + </button>
        </div>

        <br /><br />
        <button className='btn' onClick={reset}> RESET </button>
        </>
    )


}
export default Counter;