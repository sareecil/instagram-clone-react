import { urlPrefix } from './Login'
import React, {  useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "../Home.css"


var myHeaders = new Headers();
    myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBneWp1em56am5pZ3Z6dHhmcXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTk5Nzk3MSwiZXhwIjoyMDExNTczOTcxfQ.hP7mZMrlsU0F7SYVHAfse-Q1oHuH6DcyllxC-gyNCsQ");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBneWp1em56am5pZ3Z6dHhmcXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTk5Nzk3MSwiZXhwIjoyMDExNTczOTcxfQ.hP7mZMrlsU0F7SYVHAfse-Q1oHuH6DcyllxC-gyNCsQ");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

export default function Content() {
    const [posts, setPosts] = useState([])
    const [isOptionOpen, setOptionOpen] = useState(false)

    useEffect(() => {
        fetch(urlPrefix + "posts", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPosts(data);
            const shuffledData = shuffleArray(data);
            setPosts(shuffledData);
        })
    }, [])

    const shuffleArray = (array) => {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };

    function getOption() {
        setOptionOpen(!isOptionOpen)
    }

    return (
        <>
            <div className="posts"> 
                {
                    posts.map(post => ( 
                       
                        <div key={post.id} className="post">     
                            {/* <img src={post.id.user_id.user_profile} alt="" />                 */}
                            <div className="post-option-title">
                                <h3>{post.post_title}</h3>
                                <Link to={"/"}><FontAwesomeIcon icon={faEllipsis} style={{color: "#000000",}} className='option-btn' onClick={getOption} /></Link>
                            </div>
                            <img src={post.post_img} className='img-size' alt="" />
                            <div className="likes">
                                <div className="like">
                                    <a href=""><FontAwesomeIcon icon={faHeart} style={{color: "#000000",}} className='like-icon' /></a>
                                    <p>10 beğenme</p>
                                </div>
                                <h4>{post.post_title}</h4>
                            </div>
                        </div> 
                    ))
                }
            </div>   
            {/* <div className={isOptionOpen ? "option-btn-open" : "option-btn"}>
                <button className='btn' onClick={getOption}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></button>

                <div className="option-page">
                    <div className="option-content">
                        <li className='red'>Şikayet Et</li>
                        <li className='red'>Takibi Bırak</li>
                        <li>Favorilere ekle</li>
                        <li>Gönderiye Git</li>
                        <li>Paylai...</li>
                        <li onClick={getOption} className='close-option'>İptal</li>
                    </div>
                </div>
            </div> */}
            
            
        </>
    )


}