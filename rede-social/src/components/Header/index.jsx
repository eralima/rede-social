import React from "react"
import logo from "./../../assets/instagram-logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faComment, faHeart, faHeartbeat, faHome, faMapMarked, faMapMarkedAlt, faMapMarkerAlt, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import "./Header.css"

const Header = () => {



    return(
        <>
            <header className="Header">
                <a href="#" className="logo-link">
                    <img src={logo} alt="Instagram" className="logo-instagram" />
                </a>
                <input type="text" name="search-profiles" id="search-profiles" placeholder="Pesquisar" />
                <div className="icons">
                    <a href="#">
                        <FontAwesomeIcon icon={faHome} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faComment} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header