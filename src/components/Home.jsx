import "../Home.css"
import Navbar from "./Navbar"
import Content from "./Content"
import Right from "./Right"

export default function Home() {
    
    return(
        <div className="container">
            <Navbar/>
            <Content/>
            <Right/>
        </div>
    )
}