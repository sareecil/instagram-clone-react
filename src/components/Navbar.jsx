import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import instagramLogoText from '../assets/img/instagram-wordmark.svg'
import "../Home.css"

export default function Navbar() {
    return(
        <div className="left-nav">
            <div className="logo-item">
                <img src={instagramLogoText} className="home logo react" alt="" />
            </div>
            <div className="left-nav-ul">                
                <li className="menu-item">
                    <a href="#"><FontAwesomeIcon icon={faHouse} style={{color: "#000000",}} className='icon' />Anasayfa</a>
                </li>
                <li className="menu-item">
                    <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} className='icon' />Ara</a>
                </li>
                <li className="menu-item">
                    <a href="#"><FontAwesomeIcon icon={faPlus} style={{color: "#000000",}} className='icon' />Gönderi Oluştur</a>
                </li>
                <li className="menu-item">
                    <a href="#"><FontAwesomeIcon icon={faUser} style={{color: "#000000",}} className='icon' />Profil</a>
                </li>
            </div>
            {/* <div className="end-item left-nav-ul">
                <li className="menu-item">
                    <a href="#"><FontAwesomeIcon icon={faUser} style={{color: "#000000",}} className='icon' />Profil</a>
                </li>
            </div> */}
        </div>
    )
}