import './temp.css'
import {useState} from 'react';


function Tempra(){

    const [changeKelvin,setChangeKelvin] = useState();
    const [frh,setFrh] = useState();
    
    function handelBoth(e){
        setChangeKelvin(+e.target.value + 273.15);
        setFrh((+e.target.value*9/5) + 32);
    }

    return(
        <>
           <div className="nano">
                <label htmlFor="celc">Temprature in  degrees Celsius</label>
                <br /><br />
                <input type="number" placeholder='Enter temprature in degree ' onChange={handelBoth} id='celc' />
           </div>



            <div className='two'>
                <div className="nano">
                    <label htmlFor="kelvin">Temprature in kelvin</label>
                    <div className="one"id='kelvin'>{changeKelvin}</div>
                </div>

                <div className="nano">
                    <label htmlFor="frh">Temprature in  Fahrenheit</label>
                    <div className="one" id='frh'>{frh}</div>
                    </div>

            </div>
    
        </>
    )


}
export default Tempra;