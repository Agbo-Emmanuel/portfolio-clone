import React from 'react';
import menu from "./img/menu.png";



const Header = ()=>{
    return(
        <>
            <div className="Header">
                <div className='headerleft'>
                    <h2>AGBO</h2>
                </div>
                <div className='headerright'>
                    <nav>Portfolio</nav>
                    <nav>About</nav>
                    <nav>Contact</nav>
                    <div className='burgermenu'>
                        <img src={menu} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}



export default Header