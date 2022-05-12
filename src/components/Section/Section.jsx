// import Cleave from 'cleave.js/react';
import './Section.css'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import Modal from '../Modal/Modal';
import trueIcon from "../../img/salom.png"
import PhoneNumberInput from '../HandInput/HandInput';
const label = { inputProps: 
  { 'aria-label': 'Checkbox demo' } };

   



const Section = () =>{  

const nameRef =  React.useRef(null)
const telRef =  React.useRef(null)



  var kurslar=[];
  const selectCourses = (e)=>{
  // console.log(e.target.value)
 if(kurslar.includes(e.target.value)){
     kurslar.splice(kurslar.findIndex(l=>{
         l=e.target.value
     }),1)
 }
 else{
     kurslar.push(e.target.value)
 }

}
const formBtn = (e)=>{

  e.preventDefault();

      if (e.target[0].value.length > 0
           && e.target[1].value.length > 4
            && kurslar.length>0 ) {

         


          let botMessege = `
               Salom, Yangi Xabar!😊%0A
               Ismi 👤: ${e.target[0].value}%0A
               Raqam ☎: ${e.target[1].value}%0A                 Kursi ✍🏻: ${kurslar}%0A     
                
          `;

   
          let url =`https://api.telegram.org/bot5136951868:AAEbk5iaJ1l89mI2H7LXacKLS3ZcMbLHkAE/sendMessage?chat_id=-1001328953154&text=${botMessege}`;
          async function fetchAsync(url) {
            let response = await fetch(url);
            console.log(response,"1-si")
            let data = await response.json();
          console.log(data,"2-si")
            return data;
             
          }
          fetchAsync(url);

 

          if(document.querySelector("#name").matches(".input-error")){
              document.querySelector("#name").classList.remove("input-error")
              // document.querySelector("#errorText").classList.add("error-text1")
              document.querySelector("#errorText").classList.remove("error-text1")
          }
          if(document.querySelector("#phone").matches
          (".tel-error")){
              document.querySelector("#phone").classList.remove("tel-error")
               document.querySelector("#errorTel").classList.remove("error-tel1")
          }
          if(document.querySelector(".checkBtn").matches(".check-errors")){
              document.querySelector(".checkBtn").classList.remove("check-errors")
              document.querySelector("#checkError").classList.remove("error-check1")
          }


          e.target[0].value=""
          document.querySelector(".sections-input").value=""  
          e.target[1].value="+998"          
          
          openGreatModal()
          
  } 
  else{
      if(e.target[0].value.length < 1 ){
          document.querySelector("#name").classList.add("input-error")
         document.querySelector("#errorText").classList.add("error-text1")
      }
      if(e.target[1].value.length < 5){
          document.querySelector("#phone").classList.add("tel-error")
          document.querySelector("#errorTel").classList.add("error-tel1")
      } 
      if(document.querySelector(".checkBtn").matches(".check-errors")){
          document.querySelector(".checkBtn").classList.add("check-errors")
          document.querySelector("#checkError").classList.add("error-check1")
      }    
  }

}


const [greatModal, setGreatModal] =  React.useState(false);

function openGreatModal(){
  setGreatModal(!greatModal)
}  

return(

<div className="section">
  <div className="container">
      <form   id="myForm" onSubmit={formBtn}>
          <div className="section-page">
              <p className="section-name">Ismingiz?</p>
              <input ref={nameRef}
                 className='section-input'
                  
                 id='name' type="text" placeholder='Alisher'  />
            <div className="error-text" id='errorText'>
           Siz ismingizni kiritmadingiz
            </div>
              <p className='section-name'>Raqamingiz</p>
<label  className='code-label'>
           <p className='code-number'>+998</p>
        
              <PhoneNumberInput />
              <div className="tel-errors" id='errorTel'>
                  Siz telefon raqamingizni kiritmadingiz
                  </div></label>
             
              <p className='section-names'>Qaysi kurs haqida ma'lumot olmoqchisiz?</p>
              <div className='check-section'>
              <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="Ingliz tili" color="default" />
                  <label className='section-text'>Ingliz tili</label>
              </div> 
              <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="IELTS" color="default" />
                  <label className='section-text'>IELTS</label>
              </div>
              
              <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="Matematika" color="default" />
                  <label className='section-text'>Matematika</label>
              </div>
                <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="Biologiya" color="default" />
                  <label className='section-text'>Biologiya</label>
              </div>
             
              <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="Kimyo" color="default" />
                  <label className='section-text'>Kimyo</label>
              </div>


              <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="Ona tili" color="default" />
                  <label className='section-text'>Ona tili</label>
              </div>
              <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="Rus tili" color="default" />
                  <label className='section-text'>Rus tili</label>
              </div>
              <div className='section-checkbox'>
                  <Checkbox {...label} className="checkBtn" onChange={selectCourses}  value="Tarix" color="default" />
                  <label className='section-text'>Tarix</label>
              </div>
              </div>
              <div className='check-errors' id='checkError'>Siz checkbox tanlamadingizz</div>
          </div>

          <button className='section-btn'  type='submit'  
           id='btnSubmit'  >Send</button>
           
      </form>
  </div>
        <dialog className="modal"
        show={greatModal} >
        <button className="close-btn" onClick={()=>setGreatModal()}>
                        &times;
                    </button>
                    <div className="modal-footer">
                    <img className='modal-true' src={trueIcon} alt="true" />
            <h3 className="modal-title">
                Siz ro'yhatdan o'tdingiz !!!

            </h3>
            </div>
        </dialog>
  
</div>

)
}
export default Section;