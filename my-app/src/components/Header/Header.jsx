import React from "react";
import logoImage from "../../assets/img/terser.svg"

const menu = [
    {
        title: 'Products',
        link: '/'
    },
    {
        title: 'Pricing',
        link: '/'
    },
    {
        title: 'Dashboard',
        link: '/'
    }
]

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logoImage} alt="img" />
            </div>
            <div className="menu-wrapper">
                <ul>
                    {menu.map((item, index) => (<li key={`menu item ${index}`}><a href={item.link}>{item.title}</a></li>))}
                </ul>
                <div className="auth-buttons">
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Header;