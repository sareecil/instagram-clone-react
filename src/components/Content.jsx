import { urlPrefix } from './Login'
import React, {  useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
    // const [user, setUser] = useState()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(urlPrefix + "posts", requestOptions)
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])


    return (
        <>
            <div className="posts"> 
                {
                    posts.map(post => (
                        <div key={post.id} className="post">
                            <h3>{post.post_title} </h3>
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
            
            
        </>
    )


}