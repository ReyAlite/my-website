import React from 'react';
import '../css/detailedCard.css'

const DetailedCard = (props) => {
    const card = props.card
    console.log(card.img.length)
    const icons = card.icons.map((icon, i) => {
        let iconTxt = (icon.slice(icon.lastIndexOf('/'), icon.indexOf('-'))).substring(1);
        return (
            <img key={iconTxt + "-key"} className={iconTxt + "-icon"} src={icon} alt="icon"></img>
        );
    });
    function getImage(i) {
        if (card.img.length !== 0) {
            return (
                <img key={String(card.img)} className={i + "-img"} src={card.img} alt="gif"></img>
            )
        } else {
            return (
                <span></span>
            );
        }
    }
    const codeSnippet = `
    filteredLanguages(activity){
        let languages = activity.winner.languages;
        let filteredLang = languages.filter(language => language === this.lang || language === 'gb');
        return filteredLang;
         }
     }
    `
    return (
        <div className="detailedCard">
            <div className="detailedCard-head">
                <h2 className="detailedCard-title">{card.title}</h2>
                <div className="detailedCard-img-container">
                    {icons}
                </div>
            </div>
            <div className="detailedCard-main">
                {card.txt}
            </div>
            <div className="detailedCard-footer">
                {getImage(0)}
                <span>{codeSnippet}</span>
            </div>
        </div>
    );
}

export default DetailedCard;