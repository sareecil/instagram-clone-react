import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faPlus, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import instagramLogoText from '../assets/img/instagram-wordmark.svg'
import responsiveLogo from '../assets/img/instagram-logo-A807AD378B-seeklogo.com.png'
import "../Home.css"
import Content from './Content'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

const  postUrl = "https://pgyjuznzjnigvztxfqwd.supabase.co/rest/v1/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBneWp1em56am5pZ3Z6dHhmcXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTk5Nzk3MSwiZXhwIjoyMDExNTczOTcxfQ.hP7mZMrlsU0F7SYVHAfse-Q1oHuH6DcyllxC-gyNCsQ";
const insertPost = createClient(postUrl, apiKey)


export default function Navbar() {
    const [isCreateOpen, setCreateOpen] = useState(false)
    const [postTitle, setPostTitle] = useState("");
    const [postImage, setPostImage] = useState(null);

    function createPost() {
       setCreateOpen(!isCreateOpen)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const {data, error} = await insertPost.storage.from(`images`).upload(`public/${postImage.name}`, postImage)
        console.log(data);
        const imageUrl = data.Key

        const {data: postData, error: postError} = await insertPost.from("posts").upsert([
            {
                post_content: postTitle,
                post_img: imageUrl
            } 
        ]);

        setPostImage(null);
        setPostTitle("");

    }

    return(
        <>
            <div className="left-nav">
                <div className="leftnavs">
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
                    <div className="responsive-nav">
                        <div className='res-logo'>
                            <img src={responsiveLogo} width="50px" className='res-logo-item' alt="" />
                        </div>
                        <div className="respons-nav-ul">                
                            <li className="menu-item">
                                <Link to={"/"}><FontAwesomeIcon icon={faHouse} style={{color: "#000000",}} className='icon' /></Link>
                            </li>
                            <li className="menu-item">
                                <Link to={"/search"}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} className='icon' /></Link>
                            </li>
                            <li className="menu-item" onClick={createPost} >
                                <Link to={"/"}><FontAwesomeIcon icon={faPlus} style={{color: "#000000",}} className='icon' /> </Link>
                            </li>
                            <li className="menu-item">
                                <Link to={"/profile"}><FontAwesomeIcon icon={faUser} style={{color: "#000000",}} className='icon' /></Link>
                            </li>
                        </div>   
                    </div> 
                </div>
                     
            </div>   
           
            <div className={isCreateOpen ? "create-post active" : "card"}>
                <button className='btn' onClick={createPost}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></button>

                <div className="create-page">
                    <div className="create-header">
                        <p>Yeni gönderi oluştur</p>
                    </div>
                    <div className="create-center">
                            <form onSubmit={handleSubmit} className='d-center' encType='multipart/form-data' method='post'>
                                <input type="file" name="image" id='postImg' accept=".jpg,.jpeg,.png"  onChange={(e) => setPostImage(e.target.files[0])} /> 
                                <input type="text" name='text' id='text-name' onChange={(e) => setPostTitle(e.target.value)} placeholder='Açıklama yaz...'/>
                                <button className="add-post">Paylaş</button>
                            </form>
                        </div>
                </div>
            </div>
        
             
        </>
    )
}