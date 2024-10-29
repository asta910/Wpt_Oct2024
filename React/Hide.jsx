import './hide.css'
import {useState} from 'react';

function Hide(){

    const [isVisible, setIsVisible] = useState(false);    

    function manageFunction(){
        setIsVisible(!isVisible);
    }
    return (
        <>
           <div>
                <button onClick={manageFunction}>Show/Hide Text</button>
                {isVisible && <p>Toggle me!</p>}
            </div>
        </>

      );
}
export default Hide;