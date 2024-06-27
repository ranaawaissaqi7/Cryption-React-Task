import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import siteLogo from "../../assets/site-log.webp"
export default function Header() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    
    return (
        <>

<div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={siteLogo} alt="site-logo" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === '#section-1' ? 'active' : ''}`} to="#section-1" onClick={() => handleLinkClick('#section-1')}>
                                    About Cryption
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === '#section-2' ? 'active' : ''}`} to="#section-2" onClick={() => handleLinkClick('#section-2')}>
                                    Our Tokens
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === '#section-3' ? 'active' : ''}`} to="#section-3" onClick={() => handleLinkClick('#section-3')}>
                                    Crowdsale
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === '#section-4' ? 'active' : ''}`} to="#section-4" onClick={() => handleLinkClick('#section-4')}>
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}
