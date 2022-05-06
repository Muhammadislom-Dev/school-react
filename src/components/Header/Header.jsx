import './Header.css'

import salom from '../../img/salom.png'


const Header = () =>{
    return(
        <div className="header">
            <div className="container">  
                 <div className="header-page">
                    <img className='header-img' src={salom} alt="" />
                 </div>
            </div>
        </div>
    )
}
export default Header