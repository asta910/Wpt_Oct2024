import './inp.css'
import {useState} from 'react';

function Inp(){
    const [change,setChange] = useState();
    
    function manage(e){
        setChange(e.target.value);
    }
    return(
        <>
            <input type="text" placeholder='Enter Text' onChange={manage}/>
            
            <div>{change}</div>

        </>
    )
}
export default Inp;