import './Footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-page">
                    <img src="https://static.tildacdn.info/tild3461-3230-4230-a138-316130373734/image_987.png" alt="" className="footer-img" />
                </div>
                <p className='footer-text'>Bizni boshqa tarmoqlarda ham kuzating, yangiliklardan qolib ketmang!</p>

                <div className="footer-list">
                    <div className='footer-title'><a href="#" className="footer-link">Instagram</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Telegram</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">You Tube</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Natijalar</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Telefon</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Joylashuvimiz</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Yangiliklar</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Ijtimoiy hayot</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Xonalar</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">TikTok</a></div>
                    <div className='footer-title'><a href="#" className="footer-link">Facebook</a></div>
                </div>
                <p className='footer-texts'>© All Rights Reserved. abba marketing</p>
            </div>
        </div>
    )
}
export default Footer