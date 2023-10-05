import instagramLogoText from '../assets/img/instagram-wordmark.svg'
import "../index.css"
import { useRef } from 'react'
import Home from './Home';


const urlPrefix = "https://pgyjuznzjnigvztxfqwd.supabase.co/rest/v1/"


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

    function handleSubmit(e) {
        e.preventDefault();
        const myFormData = new FormData(e.target)
        console.log(Object.fromEntries(myFormData));
        fetch(urlPrefix + "users", requestOptions)
            .then(response => response.json())
            .then(result => {  
            result.filter(user => { 
                if(user.user_username === Object.fromEntries(myFormData).userName) {
                    console.log("home gidildi");
                    <Home/>
                }
                else {
                    console.log("tekrar dene")
                }
            });

            
            
            
        })
    } 

 return(
    <>
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
        
        
    </>

 )
}