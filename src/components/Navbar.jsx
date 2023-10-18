import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faPlus, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import instagramLogoText from '../assets/img/instagram-wordmark.svg'
import "../Home.css"
import Content from './Content'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
    const [isCreateOpen, setCreateOpen] = useState(false)

    function createPost() {
       setCreateOpen(!isCreateOpen)
    }
    
    return(
        <>
            <div className="left-nav">
                <div className="logo-item">
                    <img src={instagramLogoText} className="home logo react" alt="" />
                </div>
                <div className="left-nav-ul">                
                    <li className="menu-item">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} style={{color: "#000000",}} className='icon' />Anasayfa</Link>
                    </li>
                    <li className="menu-item">
                        <Link to={"/search"}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} className='icon' />Ara</Link>
                    </li>
                    <li className="menu-item" onClick={createPost} >
                        <Link to={"/"}><FontAwesomeIcon icon={faPlus} style={{color: "#000000",}} className='icon' />Gönderi Oluştur</Link>
                    </li>
                    <li className="menu-item">
                        <Link to={"/profile"}><FontAwesomeIcon icon={faUser} style={{color: "#000000",}} className='icon' />Profil</Link>
                    </li>
                </div>           
            </div>   
            <div className={isCreateOpen ? "create-post active" : "card"}>
                <button className='btn' onClick={createPost}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></button>

                <div className="create-page">
                    <div className="create-header">
                        <p>Yeni gönderi oluştur</p>
                    </div>
                </div>
            </div>
        
             
        </>
    )
}