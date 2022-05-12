import { useState } from "react";

export default function PhoneNumberInput(){
  
    const [inputValue,setInputValue]=useState("");
    const handleInput=e=>{
        const formattedPhoneNumber = 
        formatPhoneNumber(e.target.value);
        setInputValue(formattedPhoneNumber);

    };
       return   <input    type="tel" 
        //  max={14} maxLength={14}  
       name='phone'   id="phone" 
       onChange={e=>handleInput(e)} value={inputValue}
         className='section-input sections-input cpf'
               placeholder='93 148 77 33'  />
}

function formatPhoneNumber(value){
    if(!value) return value;
    const phoneNumber=value.replace(/[^\d]/g,'');
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength<4) return phoneNumber;
    if(phoneNumberLength<7){
         return `(${phoneNumber.slice(0,3)})
          ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0,2)}) 
     ${phoneNumber.slice(2,5)}-${phoneNumber.slice(5,9)}`
}
 
    
   
