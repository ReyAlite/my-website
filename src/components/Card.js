import React from 'react';
import '../css/card.css';

const Card = (props) => {
    const card = props.card;

    const roles = card.roles.map((role) => {
        return (
            <p className="cardRole" key={role + "-key"}>{role}</p>
        );
    });
    const icons = card.icons.map((icon, i) => {
        let iconTxt = (icon.slice(icon.lastIndexOf('/'), icon.indexOf('-'))).substring(1);
        return (
            <img key={iconTxt + "-key"} className={iconTxt + "-icon"} src={icon} alt="icon"></img>
        );
    });
    return (
        <div className="card">
            <div className="card-main">
                <div className="card-main-txt">
                    <h3>{card.title}</h3>
                    <p className="cardText">{card.txt}</p>
                </div>
                <div className="card-main-roles">
                    <h3>Roles</h3>
                    {roles}
                </div>
            </div>
            <div className="card-side">
                <div className="card-side-logoContainer">
                    {icons}
                </div>
            </div>
        </div>
    );
}

export default Card;