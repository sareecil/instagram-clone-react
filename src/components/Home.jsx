import "../Home.css"
import Navbar from "./Navbar"
import Content from "./Content"

export default function Home() {
    
    return(
        <div className="container">
            <Navbar/>
            <Content/>
        </div>
    )
}