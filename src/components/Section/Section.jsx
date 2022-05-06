import './Section.css'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Section = () =>{

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    console.log(data)

    return(
        <div className="section">
            <div className="container">
               <form action="">

               <div className="section-page">
                    <p className="section-name">Ismingiz?</p>
                    <input required className='section-input' type="text" placeholder='Alisher' />
                    <p className='section-name'>Raqamingiz</p>
                    
                    <div className="section-list">
                        <select   name="" id="">
                        { data && data.map(e => (
                                 <option className='option'>
                                        <p>{e.code}</p>
                                        <p className='code'>{e.dial_code}</p>
                                 </option>
                        ))}
                        </select>
                        <input required className='section-inputs' type="number" placeholder='99-999-9999' />
                    </div>
                    <p className='section-name'>Qaysi kursga haqida malumot olmoqchisiz?</p>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                    <div className='section-checkbox'> 
                        <Checkbox {...label} defaultChecked color="default" />
                        <p className='section-text'>Beginner</p>
                    </div>
                </div>

                <button className='section-btn'>Send</button>
               </form>
            </div>
        </div>
    )
}
export default Section


