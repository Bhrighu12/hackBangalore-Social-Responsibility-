import { useState } from "react";
import "./navbar.scss";

function Navbar(){
    const [open,setOpen]=useState(false)
    return (
        <nav>
            <div className="left">
                <a href="" className="img">
                    <img src="/logo2.png" alt=""></img>
                    <span>Investor Dhundo</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Projects</a>
            </div>
            <div className="right">
                <a href="/">Login</a>
                <a href="/" className="register">Signup</a>
                <div className="menuIcon">
                    <img src = "/menu.png"
                    alt="" 
                    onClick={()=>setOpen((prev)=>!prev)}/>
                </div>
                <div className={open ? "menu active":"menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Grab Your Investor</a>
                <a href="/">Login</a>
                <a href="/">Signup</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;