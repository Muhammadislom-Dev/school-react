import './Section.css'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Section = () =>{

    

    return(
        <div className="section">
            <div className="container">
                <div className="section-page">
                    <p className="section-name">Ismingiz?</p>
                    <input className='section-input' type="text" placeholder='Alisher' />
                    <p className='section-name'>Raqamingiz</p>
                    
                    <div className="section-list">
                        <select name="" id="">
                            <option value="">Uzb +998</option>
                            <option value="">Af</option>
                            <option value="">Rus</option>
                            <option value="">Usa</option>
                        </select>
                        <input className='section-inputs' type="number" placeholder='99-999-9999' />
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
            </div>
        </div>
    )
}
export default Section


