import React from "react";


export default function Location(props){
    return (
        <div>
            <div className="Location">
                <img src={`${props.image}`} className="Location--image" ></img>
                <div className="Location--info">
                    <div className="Location--topline">
                        <img src="/images/here_icon.png" className="here_icon" />
                        <span className="country">{props.country}</span>
                        <a href={`${props.link}`} className="link" target="_blank">View on Google Maps</a>
                    </div>
                    <span className="Location--spot">{props.spot}</span>
                    <div className="Location--date">{props.date}</div>
                    <span className="Location--description">
                    {props.description}
                    </span>
                </div>
                
            </div>
            <hr className="hr"/>
        </div>    
        
    )
}