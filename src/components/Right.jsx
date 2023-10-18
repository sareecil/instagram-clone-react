import React, {  useState, useEffect } from 'react'
import { urlPrefix } from './Login'
import Login from './Login';


var myHeaders = new Headers();
    myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBneWp1em56am5pZ3Z6dHhmcXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTk5Nzk3MSwiZXhwIjoyMDExNTczOTcxfQ.hP7mZMrlsU0F7SYVHAfse-Q1oHuH6DcyllxC-gyNCsQ");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBneWp1em56am5pZ3Z6dHhmcXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTk5Nzk3MSwiZXhwIjoyMDExNTczOTcxfQ.hP7mZMrlsU0F7SYVHAfse-Q1oHuH6DcyllxC-gyNCsQ");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

export default function Right() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(urlPrefix + "users", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUsers(data)
        } ) 
    }, [])

    return(
        <>
            <div className="right-section">
                <div className="user-info">
                    <p>Senin için önerilenler</p>
                    {
                        users.map(user => (
                            <div key={user.id} className="for-you-section">
                                <h5>{user.user_username}</h5>
                                <button className='follow-us'>Takip Et</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}