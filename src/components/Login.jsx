import instagramLogoText from '../assets/img/instagram-wordmark.svg'
import React, { useRef, useState } from 'react'
import Home from './Home';
import loginImg from '../assets/img/home-phones.png';
import img from '../assets/img/screenshot3.png'

export const urlPrefix = "https://pgyjuznzjnigvztxfqwd.supabase.co/rest/v1/"


    var myHeaders = new Headers();
    myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBneWp1em56am5pZ3Z6dHhmcXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTk5Nzk3MSwiZXhwIjoyMDExNTczOTcxfQ.hP7mZMrlsU0F7SYVHAfse-Q1oHuH6DcyllxC-gyNCsQ");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBneWp1em56am5pZ3Z6dHhmcXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTk5Nzk3MSwiZXhwIjoyMDExNTczOTcxfQ.hP7mZMrlsU0F7SYVHAfse-Q1oHuH6DcyllxC-gyNCsQ");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

export default function Login() {
    const registerForm = useRef();
    const loginForm = useRef();
    const [isLogged, setIsLooged] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const myFormData = new FormData(e.target)
        const getUserName = myFormData.get('userName');
        
        fetch(urlPrefix + "users", requestOptions)
            .then(response => response.json())
            .then(result => {
                const findUser = result.find(user => user.user_username === getUserName);
                if(findUser) {
                    console.log("Kullanıcı bulundu");
                    setIsLooged(true)
                }
            })
    } 

    

 return(
    <>
        {isLogged ? (
            <Home/>
        ) : (
            <div className="login-form">
                
                <div className="img-form">
                    <img src={loginImg} alt="" />
                    <img src={img} alt="" className='img-absolute'/>
                </div>
                
                <div className="login">
                    <div className="login-info">
                        <div className='logo '>       
                            <img src={instagramLogoText} className="logo react" alt="React logo" />       
                        </div>
                        <form className='input-login' onSubmit={handleSubmit} ref={loginForm}>                
                            <input required type="text" id='userName' name="userName" placeholder="Kullanıcı Adı"/><br />
                            <input required type="password" id='password' name="password" placeholder="Şifre"/><br />
                            <button>Giriş Yap</button>
                        </form>
                    </div>
                    <div className="register">
                        <p>Hesabın yok mu?</p>
                        <a href="/register" ref={registerForm}>Kaydol</a>
                    </div>
                </div>
            </div>
        )}      
    </>

 )
}