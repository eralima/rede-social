import React from "react"
import logo from "./../../assets/instagram-logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faHome, faMapMarkerAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import "./Header.css"

const Header = () => {

    return(
        <>
            <header className="Header">
                <div className="nav-header">
                    <a href="Home" className="logo-link">
                        <img src={logo} alt="Instagram" className="logo-instagram" />
                    </a>

                    <input type="text" name="search-profiles" id="search-profiles" placeholder="Pesquisar" />

                    <div className="icons">
                        <a href="Home">
                            <FontAwesomeIcon icon={faHome} />
                        </a>
                        <a href="Home">
                            <FontAwesomeIcon icon={faComment} />
                        </a>
                        <a href="Home">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </a>
                        <a href="Home">
                            <FontAwesomeIcon icon={faHeart} />
                        </a>
                        <a href="Home">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </a>
                    </div>
                </div>          
            </header>
        </>
    )
}

export default Header